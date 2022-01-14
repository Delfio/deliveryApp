import { FastifyReply, FastifyRequest } from "fastify";
import ValidateDeliverymanExistsByName from "@modules/deliveryman/usecase/validateDeliveryManByUserName";
import ValidateClientPassword from "../usecase/validateClientPassword";
import DeliverymanAuthenticate from "../usecase/deliverymanAuthenticate";

export type CreateClientRequest = FastifyRequest<{
  Body: { username: string; password: string };
}>;

class AuthenticateDeliverymanController {
  async handle(
    request: CreateClientRequest,
    response: FastifyReply
  ): Promise<void> {
    const { password, username } = request.body;
    console.log(password, username)

    const validateDeliverymanPassword = new ValidateClientPassword();
    const validateClientExistsByName = new ValidateDeliverymanExistsByName();
    const authenticateDeliveryman = new DeliverymanAuthenticate(
      validateDeliverymanPassword,
      validateClientExistsByName
    );

    return authenticateDeliveryman
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

export default AuthenticateDeliverymanController;
