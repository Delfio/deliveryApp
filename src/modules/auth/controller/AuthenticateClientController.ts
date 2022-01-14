import { FastifyReply, FastifyRequest } from "fastify";
import ValidateClientExistsByName from "@modules/client/usecase/validateClientExistsByName";
import AuthenticateClient from "../usecase/clientAuthenticate";
import ValidateClientPassword from "../usecase/validateClientPassword";

export type CreateClientRequest = FastifyRequest<{
  Body: { username: string; password: string };
}>;

class AuthenticateClientController {
  async handle(
    request: CreateClientRequest,
    response: FastifyReply
  ): Promise<void> {
    const { password, username } = request.body;
    const validateClientPassword = new ValidateClientPassword();
    const validateClientExistsByName = new ValidateClientExistsByName();
    const authenticateClient = new AuthenticateClient(
      validateClientPassword,
      validateClientExistsByName
    );

    return authenticateClient
      .handle({
        password,
        username,
      })
      .then((_sucess) => {
        response.statusCode = 200;
        response.send({
          acess_token: _sucess,
        });
        return;
      })
      .catch((_error) => {
        response.statusCode = 401;
        response.send({
          error: _error,
        });
        return;
      });
  }
}

export default AuthenticateClientController;
