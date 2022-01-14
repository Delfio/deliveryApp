import IDelivery from "@domain/delivery/entity/IDelivery";
import IFindAllDeliveryByDeliverymanID, {
  IFindAllDeliveryByDeliverymanIDRequest,
} from "@domain/delivery/usecase/IFindAllDeliveriesByDeliveryman";
import database from "@infra/database";

class FindAllDeliveryByDeliveryman implements IFindAllDeliveryByDeliverymanID {
  private bdConnection;

  constructor() {
    this.bdConnection = database();
  }

  async handle(
    req: IFindAllDeliveryByDeliverymanIDRequest
  ): Promise<IDelivery[]> {
    const { deliveryman_id } = req;

    return this.bdConnection.delivery.findMany({
      where: {
        id_deliveryman: deliveryman_id,
      },
    }) as Promise<IDelivery[]>;
  }
}

export default FindAllDeliveryByDeliveryman;
