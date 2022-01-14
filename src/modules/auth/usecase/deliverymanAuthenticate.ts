import IDeliverymanAuthenticate, {
  IDeliverymanAuthenticateRequest,
} from "@domain/auth/usecase/IDeliverymanAuthenticate";
import IValidateClientPassword from "@domain/auth/usecase/IValidateClientPassword";
import IValidateDeliverymanByUserName from "@domain/deliveryman/usecase/IValidateDeliverymanByUserName";
import generateJwt from "@modules/shared/functions/generate-jwt";

class DeliverymanAuthenticate implements IDeliverymanAuthenticate {
  constructor(
    private validateClientPassword: IValidateClientPassword,
    private validateDeliverymanExists: IValidateDeliverymanByUserName
  ) {}
  async handle(req: IDeliverymanAuthenticateRequest): Promise<string> {
    const userExists = await this.validateDeliverymanExists.handle(
      req.username
    );
    if (!userExists) {
      throw "username or password wrong";
    }

    const generateTokenWithDeliveryman = generateJwt("deliveryman");

    const somePassword = await this.validateClientPassword.handle({
      clientHashedPassword: userExists.password,
      clientRequestPassword: req.password,
    });

    if (!somePassword) {
      throw "username or password wrong";
    }

    const { id, username } = userExists;

    const token = generateTokenWithDeliveryman({
      id: String(id),
      username,
      type: "Deliveryman",
    });

    return token;
  }
}

export default DeliverymanAuthenticate;
