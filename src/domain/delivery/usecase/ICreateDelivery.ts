import IClient from "@domain/client/entity/IClient";
import IDeliveryMan from "@domain/deliveryman/entity/IDeliveryman";
import { IGerenicAsyncUseCaseInterface } from "@domain/shared/generic/usecase";

/**
  id             String      @id @default(uuid())
  id_client      String
  client         Client      @relation(fields: [id_client], references: [id])
  id_deliveryman String
  deliveryman    Deliveryman @relation(fields: [id_deliveryman], references: [id])
  item_name      String
  created_at     DateTime    @default(now())
  end_at         DateTime
 */

interface ICreateDeliveryRequest {
  id_client: string;
  client?: IClient;
  id_deliveryman?: string;
  deliveryman?: IDeliveryMan;
  item_name: string;
}

type ICreateDelivery = IGerenicAsyncUseCaseInterface<
  string,
  ICreateDeliveryRequest
>;

export { ICreateDeliveryRequest };

export default ICreateDelivery;
