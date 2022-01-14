import IDelivery from "@domain/delivery/entity/IDelivery";
import IUpdateDelivery, {
  IUpdateDeliveryRequest,
} from "@domain/delivery/usecase/IUpdateDelivery";
import database from "@infra/database";

class UpdateDelivery implements IUpdateDelivery {
  private bdConnection;
  constructor() {
    this.bdConnection = database();
  }
  async handle(req: IUpdateDeliveryRequest): Promise<IDelivery> {
    const { id } = req;

    const allKeys = Object.keys(req);

    const deliveryExists = await this.bdConnection.delivery.findFirst({
      where: {
        id: id,
      },
    });

    if(allKeys.includes("id_deliveryman")) {
      const deliverymanExists = await this.bdConnection.deliveryman.findFirst({
        where: {
          id: req.id_deliveryman
        }
      });

      if(!deliverymanExists) {
        throw "Deliveryman invalido!";
      }
    }

    if (!deliveryExists) throw new Error("asdf");
    const update = allKeys
      .map((_el) => {
        const key = _el as keyof IUpdateDeliveryRequest;

        const valueReqUpdate = req[key];
        const oldValue = deliveryExists[key];

        if (valueReqUpdate !== oldValue) {
          return {
            [_el]: valueReqUpdate,
          };
        }

        return null;
      })
      .filter((_el) => !!_el)
      .reduce((prev, current) => {
        const key = Object.keys(current as Object)[0];
        const value = Object.values(current as Object)[0];

        prev![key] = value;

        return prev;
      }, {});

    if (!!update && Object.keys(update).length > 0) {
      return (  await this.bdConnection.delivery.update({
        where: {
          id,
        },
        data: update,
        select: {
          created_at: true,
          end_at: true,
          id: true,
          id_client: true,
          id_deliveryman: true,
          item_name: true,
        },
      })) as IDelivery;
    }

    return deliveryExists as IDelivery;
  }
}

export default UpdateDelivery;
