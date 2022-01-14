import { FastifyReply, FastifyRequest } from "fastify";
import FindAllDeliveriesByDeliveryman from "../usecase/findAllDeliveriesByDeliveryman";

class FindAllDeliveryByClientController {
  async handle(req: FastifyRequest, response: FastifyReply): Promise<void> {
    if (!req.id_deliveryman) {
      response.statusCode = 401;
      response.send();
      return;
    }
    const findAllDeliveriesByDeliveryman = new FindAllDeliveriesByDeliveryman();

    return findAllDeliveriesByDeliveryman
      .handle({
        deliveryman_id: req.id_deliveryman,
      })
      .then((_deliveries) => {
        response.statusCode = 200;
        response.send(_deliveries);
      });
  }
}

export default FindAllDeliveryByClientController;
