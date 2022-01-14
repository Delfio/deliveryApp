import { FastifyInstance, FastifyPluginOptions } from "fastify";
import FindAllWithoutEndDate from "../controller/findAllAvailable";
import UpdateDelivery from "../controller/updateDelivery";
import FindAllDeliveriesByDeliveryman from "../controller/findAllDeliveriesByDeliveryman";
import configMiddlewareAuth from "../middleware";

type done = (err?: Error | undefined) => void;
const deliverymanMiddleware = configMiddlewareAuth("Deliveryman");

export default (
  server: FastifyInstance,
  _: FastifyPluginOptions,
  done: done
) => {
  const findAllWithoutEndDate = new FindAllWithoutEndDate();
  const updateDelivery = new UpdateDelivery();
  const findAllDeliveriesByDeliveryman = new FindAllDeliveriesByDeliveryman();

  deliverymanMiddleware(server);

  server.get("/", findAllDeliveriesByDeliveryman.handle);
  server.get("/available", findAllWithoutEndDate.handle);
  server.patch("/:deliveryId", updateDelivery.handle);

  done();
};
