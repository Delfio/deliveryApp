import UpdateDelivery from "../usecase/updateDelivery";
import ValidateClientIsOwner from "../usecase/validateClientIsOwner";
import { IUpdateDeliveryRequest } from "@domain/delivery/usecase/IUpdateDelivery";
import { FastifyReply, FastifyRequest } from "fastify";

export type CreateClientRequest = FastifyRequest<{
  Body: Omit<IUpdateDeliveryRequest, "id">;
  Params: { deliveryId: string };
}>;

class UpdateDeliveryController {
  async handle(
    request: CreateClientRequest,
    response: FastifyReply
  ): Promise<void> {
    const { body, params } = request;
    const updateDelivery = new UpdateDelivery();
    const validateClientIsOwner = new ValidateClientIsOwner();

    if (!!request.id_client) {
      const clientIsOwner = await validateClientIsOwner.handle({
        client_id: request.id_client,
        delivery_id: params.deliveryId,
      });

      if (!clientIsOwner) {
        console.log("Cliente id !== Owner Delivery ID");
        response.statusCode = 404;
        response.send({
          error: true,
          data: {
            message: "Delivery not found!",
          },
        });

        return;
      }

      delete body.end_at;
      delete body.id_deliveryman;
    } else {
      delete body.item_name;
    }
    console.log(body);

    return updateDelivery
      .handle({
        ...body,
        id: params.deliveryId,
      })
      .then((_response) => {
        response.statusCode = 200;
        response.send(_response);
        return;
      })
      .catch((_err) => {
        console.log(_err);
        response.statusCode = 404;
        response.send({
          error: true,
          data: _err,
        });
        return;
      });
  }
}

export default UpdateDeliveryController;
