import IDelivery from "@domain/delivery/entity/IDelivery";
import IFindAllDeliveryByClientID, {
  IFindAllDeliveryByClientIDRequest,
} from "@domain/delivery/usecase/IFindAllDeliveriesByClient";
import database from "@infra/database";

class FindAllDeliveryByClientID implements IFindAllDeliveryByClientID {
  private bdConnection;

  constructor() {
    this.bdConnection = database();
  }

  async handle(req: IFindAllDeliveryByClientIDRequest): Promise<IDelivery[]> {
    const { client_id } = req;
    return this.bdConnection.delivery.findMany({
      where: {
        id_client: client_id,
      },
    }) as Promise<IDelivery[]>;
  }
}

export default FindAllDeliveryByClientID;
