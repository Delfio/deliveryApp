import { FastifyInstance, FastifyPluginOptions } from "fastify";
import AuthenticateClientController from "../controller/AuthenticateClientController";
import AuthenticateDeliverymanController from "../controller/AuthenticateDeliverymanController";

type done = (err?: Error | undefined) => void;

export default (
  server: FastifyInstance,
  options: FastifyPluginOptions,
  done: done
) => {
  const authenticateClientController = new AuthenticateClientController();
  const authenticateDeliverymanController =
    new AuthenticateDeliverymanController();

  server.post("/client", authenticateClientController.handle);
  server.post("/deliveryman", authenticateDeliverymanController.handle);

  done();
};
