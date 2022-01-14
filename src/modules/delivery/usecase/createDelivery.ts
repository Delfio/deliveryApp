import ICreateDelivery, {
  ICreateDeliveryRequest,
} from "@domain/delivery/usecase/ICreateDelivery";
import database from "@infra/database";

class CreateDelivery implements ICreateDelivery {
  private bdConnection;
  constructor() {
    this.bdConnection = database();
  }
  async handle(req: ICreateDeliveryRequest): Promise<string> {
    const { id_client, item_name } = req;

    const newDelivery = await this.bdConnection.delivery.create({
      data: {
        item_name,
        id_client,
      },
    });

    return newDelivery.id;
  }
}

export default CreateDelivery;
