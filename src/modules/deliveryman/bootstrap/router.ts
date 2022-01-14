import { FastifyInstance, FastifyPluginOptions } from "fastify";
import CreateDeliverymanController from "../controller/createDeliveryman";
import FinishDelivery from "../controller/finishDelivery";
import configMiddlewareAuth from "@shared/middleware/clientAuth";

type done = (err?: Error | undefined) => void;
const deliverymanMiddleware = configMiddlewareAuth("deliveryman");

export default (
  server: FastifyInstance,
  options: FastifyPluginOptions,
  done: done
) => {
  const createDeliverymanController = new CreateDeliverymanController();
  const finishDelivery = new FinishDelivery();

  server.post("/", createDeliverymanController.handle);

  // server.addHook("preHandler", )
  server.post(
    "/finish/:deliveryId",
    {
      preHandler: deliverymanMiddleware,
    },
    finishDelivery.handle
  );
  done();
};
