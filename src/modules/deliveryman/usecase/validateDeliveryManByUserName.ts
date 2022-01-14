import IValidateDeliverymanExistsByName from "@domain/deliveryman/usecase/IValidateDeliverymanByUserName";
import IDeliveryman from "@domain/deliveryman/entity/IDeliveryman";
import database from "@infra/database";

class ValidateDeliverymanExistsByName
  implements IValidateDeliverymanExistsByName
{
  private bdConnection;

  constructor() {
    this.bdConnection = database();
  }

  async handle(deliverymanName: string): Promise<IDeliveryman | null> {
    const clientExists = await this.bdConnection.deliveryman.findFirst({
      where: {
        username: {
          mode: "insensitive",
          equals: deliverymanName,
        },
      },
    });

    return clientExists;
  }
}

export default ValidateDeliverymanExistsByName;
