import { FastifyReply, FastifyRequest } from "fastify";
import CreateDeliveryMan from "../usecase/createDeliveryman";
import ValidateDeliveryManByUserName from "../usecase/validateDeliveryManByUserName";
import HashPassword from "@modules/shared/usecase/hashPassword";

export type CreateClientRequest = FastifyRequest<{
  Body: { username: string; password: string };
}>;

class CreateDeliverymanController {
  async handle(
    request: CreateClientRequest,
    response: FastifyReply
  ): Promise<void> {
    const { username, password } = request.body;
    const hashPassword = new HashPassword();
    const createDeliveryMan = new CreateDeliveryMan(hashPassword);
    const validateExistsByName = new ValidateDeliveryManByUserName();

    const clientExists = await validateExistsByName.handle(username);

    if (clientExists) {
      response.statusCode = 400;
      response.send({
        error: "username already used",
      });

      return;
    }

    await createDeliveryMan.handle({
      password,
      username,
    });

    response.statusCode = 201;
    response.send();
    return;
  }
}

export default CreateDeliverymanController;
