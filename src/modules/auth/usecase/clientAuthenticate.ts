import IClientAuthenticate, {
  IClientAuthenticateRequest,
} from "@domain/auth/usecase/IClientAuthenticate";
import IValidateClientPassword from "@domain/auth/usecase/IValidateClientPassword";
import IValidateClientExistsByName from "@domain/client/usecase/IValidateClientExistsByName";
import generateJwt from "@modules/shared/functions/generate-jwt";

class AuthenticateClient implements IClientAuthenticate {
  constructor(
    private validateClientPassword: IValidateClientPassword,
    private validateClientExists: IValidateClientExistsByName
  ) {}

  async handle(req: IClientAuthenticateRequest): Promise<any> {
    const userExists = await this.validateClientExists.handle(req.username);
    if (!userExists) {
      throw "username or password wrong";
    }

    const generateTokenWithClient = generateJwt("client");

    const somePassword = await this.validateClientPassword.handle({
      clientHashedPassword: userExists.password,
      clientRequestPassword: req.password,
    });

    if (!somePassword) {
      throw "username or password wrong";
    }

    const { id, username } = userExists;

    const token = generateTokenWithClient({
      id: String(id),
      username,
      type: "Client",
    });

    return token;
  }
}

export default AuthenticateClient;
