import { FastifyInstance, FastifyPluginOptions } from "fastify";
import ClientRoutes from "@modules/client/bootstrap/router";
import AuthrRoutes from "@modules/auth/bootstrap/router";
import DeliverymanRoutes from "@modules/deliveryman/bootstrap/router";
import DeliveryRoutes from "@modules/delivery/bootstrap/router";

function setApiModuleRoutes(
  server: FastifyInstance,
  options: FastifyPluginOptions,
  done: () => void
) {
  server.register(ClientRoutes, {
    prefix: "/client",
  });

  server.register(AuthrRoutes, {
    prefix: "/auth",
  });

  server.register(DeliverymanRoutes, {
    prefix: "/deliveryman",
  });

  server.register(DeliveryRoutes, {
    prefix: "/delivery",
  });

  server.get("/", (req, rep) => {
    rep.send("asdfasdf")
  })

  done();
}

export default (server: FastifyInstance) => {
  // Setando versão da API
  server.register(setApiModuleRoutes, {
    prefix: "/api/v1",
  });
};
