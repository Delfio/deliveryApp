import clientAuth from "@modules/shared/middleware/clientAuth";
import { FastifyInstance } from "fastify";
const middlewareClient = clientAuth("client");

export default (server: FastifyInstance) => {
    server.addHook("preHandler", middlewareClient);
}
