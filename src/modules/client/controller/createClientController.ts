import { FastifyReply, FastifyRequest } from "fastify";
import { CreateClientUseCase } from "../usecase/createClient";
import ValidateClientExistsByName from "../usecase/validateClientExistsByName";
import HashPassword from "@modules/shared/usecase/hashPassword";

//RouteHandlerMethod<Server, IncomingMessage, ServerResponse, RouteGenericInterface, unknown>

export type CreateClientRequest = FastifyRequest<{
  Body: { username: string; password: string };
}>;

class CreateClientController {
  async handle(
    request: CreateClientRequest,
    response: FastifyReply
  ): Promise<void> {
    const { username, password } = request.body;
    const hashPassword = new HashPassword();
    const createClienteUseCase = new CreateClientUseCase(hashPassword);
    const validateClientExistsByName = new ValidateClientExistsByName();

    const clientExists = await validateClientExistsByName.handle(username);

    if (clientExists) {
      response.statusCode = 400;
      response.send({
        error: "username already used",
      });

      return;
    }

    await createClienteUseCase.handle({
      password,
      username,
    });

    response.statusCode = 201;
    response.send();
    return;
  }
}

export default CreateClientController;
