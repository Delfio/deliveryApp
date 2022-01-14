import { FastifyInstance, FastifyPluginOptions } from "fastify";
import CreateDelivery from "../controller/createDelivery";
import UpdateDelivery from "../controller/updateDelivery";
import FindAllDeliveriesByClient from "../controller/findAllDeliveriesByClient";
import configMiddlewareAuth from "../middleware";

type done = (err?: Error | undefined) => void;
const clientMiddleware = configMiddlewareAuth("Client");

export default (
  server: FastifyInstance,
  _: FastifyPluginOptions,
  done: done
) => {
  const createDelivery = new CreateDelivery();
  const updateDelivery = new UpdateDelivery();
  const findAllDeliveriesByClient = new FindAllDeliveriesByClient();

  clientMiddleware(server);

  server.post("/", createDelivery.handle);

  server.get("/", findAllDeliveriesByClient.handle);

  server.patch("/:deliveryId", updateDelivery.handle);
  done();
};
