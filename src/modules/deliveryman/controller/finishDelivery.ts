import { FastifyReply, FastifyRequest } from "fastify";
import FinishDelivery from "../usecase/finishDelivery";
import ValidateDeliverymanIsOwner from "../usecase/validateDeliverymanIsOwner";

export type CreateClientRequest = FastifyRequest<{
  Params: {
    deliveryId: string;
  };
}>;

class CreateDeliverymanController {
  async handle(
    request: CreateClientRequest,
    response: FastifyReply
  ): Promise<void> {
    const { deliveryId } = request.params;
    const finishDelivery = new FinishDelivery();
    const validateDeliverymanIsOwner = new ValidateDeliverymanIsOwner();

    if (!request.id_deliveryman) {
      response.statusCode = 401;
      response.send();
      return;
    }

    const deliveryManIsOwner = await validateDeliverymanIsOwner.handle({
      delivery_id: deliveryId,
      deliveryman_id: request.id_deliveryman,
    });

    if (!deliveryManIsOwner) {
      response.statusCode = 401;
      response.send();
      return;
    }

    return finishDelivery
      .handle({
        delivery_id: deliveryId,
      })
      .then((_) => {
        response.statusCode = 200;
        response.send()
      });
  }
}

export default CreateDeliverymanController;
