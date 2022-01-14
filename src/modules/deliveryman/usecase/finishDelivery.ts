import IFinishDelivery, {
  IFinishDeliveryRequest,
} from "@domain/deliveryman/usecase/IFinishDelivery";
import database from "@infra/database";

class FinishDelivery implements IFinishDelivery {
  private bdConnection;

  constructor() {
    this.bdConnection = database();
  }

  async handle(req: IFinishDeliveryRequest): Promise<void> {
    const { delivery_id } = req;

    const deliveryExists = await this.bdConnection.delivery.findFirst({
      where: {
        id: delivery_id,
      },
    });

    if (!deliveryExists) {
      throw "Delivery not found";
    }

    await this.bdConnection.delivery.update({
      where: {
        id: delivery_id,
      },
      data: {
        end_at: new Date(),
      },
    });
  }
}

export default FinishDelivery;
