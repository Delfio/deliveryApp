import IClient from "@domain/client/entity/IClient";
import IDeliveryMan from "@domain/deliveryman/entity/IDeliveryman";

interface IDelivery {
  id: string;
  id_client: string;
  client?: IClient;
  id_deliveryman?: string;
  deliveryman?: IDeliveryMan;
  item_name: string;
  created_at: Date;
  end_at?: Date;
}

export default IDelivery;
