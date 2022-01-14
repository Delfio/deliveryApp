import { FastifyInstance, FastifyPluginOptions } from "fastify";
import CreateClientController from "../controller/createClientController";
import HandleApplicationAuthentication from "@shared/middleware/clientAuth";

type done = (err?: Error | undefined) => void;
const clientMiddleware = HandleApplicationAuthentication("client");

export default (
  server: FastifyInstance,
  options: FastifyPluginOptions,
  done: done
) => {
  const createClientController = new CreateClientController();

  server.get("/", (req, rep) => {
    rep.send("eai!!");
  });
  server.post("/", createClientController.handle);
  done();
};
