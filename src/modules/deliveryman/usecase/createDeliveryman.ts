import ICreateDeliveryMan, {
  ICreateDeliveryManRequest,
} from "@domain/deliveryman/usecase/ICreateDeliveryMan";
import database from "@infra/database";
import IHashPassword from "@domain/shared/usecase/IHashPassword";

class CreateDeliveryMan implements ICreateDeliveryMan {
  private bdConnection;

  constructor(private hashPasswordFN: IHashPassword) {
    this.bdConnection = database();
  }

  async handle(req: ICreateDeliveryManRequest): Promise<void> {
    const { password, username } = req;

    const passwordHash = await this.hashPasswordFN.handle({
      userPassword: password,
    });

    await this.bdConnection.deliveryman.create({
      data: {
        password: passwordHash,
        username,
      },
    });
  }
}

export default CreateDeliveryMan;
