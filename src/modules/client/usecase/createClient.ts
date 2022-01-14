import ICreateClientUseCase, {
  ICreateClientRequest,
} from "@domain/client/usecase/ICreateClient";
import IHashPassword from "@domain/shared/usecase/IHashPassword";
import database from "@infra/database";

class CreateClientUseCase implements ICreateClientUseCase {
  private bdConnection;

  constructor(private hashPasswordFN: IHashPassword) {
    this.bdConnection = database();
  }
  async handle(req: ICreateClientRequest): Promise<any> {
    const { password, username } = req;

    const passwordHash = await this.hashPasswordFN.handle({
      userPassword: password,
    });

    await this.bdConnection.client.create({
      data: {
        password: passwordHash,
        username,
      },
    });
  }
}

export { CreateClientUseCase };
