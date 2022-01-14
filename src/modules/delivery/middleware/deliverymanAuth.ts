import clientAuth from "@modules/shared/middleware/clientAuth";
import { FastifyInstance } from "fastify";
const middlewareDeliveryMan = clientAuth("deliveryman");

export default (server: FastifyInstance) => {
    server.addHook("preHandler", middlewareDeliveryMan);
}
