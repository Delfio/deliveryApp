import { FastifyReply, FastifyRequest } from "fastify";
import FindAllDeliveriesByClient from "../usecase/findAllDeliveriesByClient";

class FindAllDeliveryByClientController {
  async handle(req: FastifyRequest, response: FastifyReply): Promise<void> {
    if (!req.id_client) {
      response.statusCode = 401;
      response.send();
      return;
    }
    const findAllDeliveriesByClient = new FindAllDeliveriesByClient();

    return findAllDeliveriesByClient
      .handle({
        client_id: req.id_client,
      })
      .then((_deliveries) => {
        response.statusCode = 200;
        response.send(_deliveries);
      });
  }
}

export default FindAllDeliveryByClientController;
