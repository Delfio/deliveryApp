import { FastifyReply, FastifyRequest } from "fastify";
import CreateDelivery from "../usecase/createDelivery";
import ValidateClientExistsByID from "@modules/client/usecase/validateClientExistsByID";

export type CreateClientRequest = FastifyRequest<{
  Body: { item_name: string };
  Querystring: { idClient: string };
}>;

class CreateDeliveryController {
  async handle(
    request: CreateClientRequest,
    response: FastifyReply
  ): Promise<void> {
    const createDelivery = new CreateDelivery();
    const validateClientExistsByID = new ValidateClientExistsByID();

    const { item_name } = request.body;
    const { id_client } = request;

    if (!id_client) {
      response.statusCode = 401;
      response.send({
        error: "invalid client!",
      });

      return;
    }

    return validateClientExistsByID
      .handle(id_client)
      .then((_clientExists) => {
        if (!_clientExists) {
          response.statusCode = 401;
          response.send({
            error: "invalid client!",
          });

          return;
        }
        return createDelivery.handle({
          id_client: id_client,
          item_name,
        });
      })
      .then((_deliveryCreated) => {
        response.statusCode = 201;
        response.send({
          id_delivery: _deliveryCreated,
        });
        return;
      })
      .catch((_error) => {
        response.statusCode = 400;
        response.send({
          error: true,
          data: _error
        });

        return;
      });
  }
}

export default CreateDeliveryController;
