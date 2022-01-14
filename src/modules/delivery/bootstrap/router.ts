import { FastifyInstance, FastifyPluginOptions } from "fastify";
import ClientRoute from './clientRoute'
import DeliverymanRoute from './deliverymanRoute'

type done = (err?: Error | undefined) => void;

export default (
  server: FastifyInstance,
  _: FastifyPluginOptions,
  done: done
) => {
  server.register(DeliverymanRoute, {prefix: "/deliveryman"})
  server.register(ClientRoute, {prefix: "/client"});
  done();
};
