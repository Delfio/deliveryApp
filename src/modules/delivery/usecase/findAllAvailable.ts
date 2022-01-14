import IDelivery from "@domain/delivery/entity/IDelivery";
import IFindAllAvailable from "@domain/delivery/usecase/IFindAllAvailable";
import database from "@infra/database";

class FindAllAvailable implements IFindAllAvailable {
  private bdConnection;
  constructor() {
    this.bdConnection = database();
  }
  async handle(req: null): Promise<IDelivery[]> {
    const deliveries = await this.bdConnection.delivery.findMany({
      where: {
        end_at: null,
        id_deliveryman: null,
      },
    });

    return deliveries as IDelivery[];
  }
}

export default FindAllAvailable;
