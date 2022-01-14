import { FastifyReply, FastifyRequest, HookHandlerDoneFunction } from "fastify";
import { verify } from "jsonwebtoken";
import { ENV, IApplicationAuthModule } from "../env";

type IAuthenticationType = IApplicationAuthModule;

function handleApplicationAuthentication(type: IAuthenticationType = "client") {
  const handle = (
    request: FastifyRequest,
    response: FastifyReply,
    next: HookHandlerDoneFunction
  ) => {
    const secret = ENV.SECRET_JSON[type];

    const authorizationExists = request.headers.authorization;

    function returnAnauthorized() {
      response.statusCode = 401;
      response.send({
        error: "Not authorized!",
      });
      next(new Error("Invalid Token"));

      return;
    }

    if (!authorizationExists || !authorizationExists.includes("Bearer")) {
      return returnAnauthorized();
    }

    const [, token] = authorizationExists.split("Bearer ");

    if (!token) {
      return returnAnauthorized();
    }

    try {
      const { sub } = verify(token, secret);

      if (!sub || typeof sub !== "string") {
        console.log("invalid subject");
        return returnAnauthorized();
      }
      if (type === "client") {
        request.id_client = sub;
      } else {
        request.id_deliveryman = sub;
      }

      next();
    } catch (error) {
      console.log("Invalid Token!");
      return returnAnauthorized();
    }
  };

  return handle;
}

export default handleApplicationAuthentication;
