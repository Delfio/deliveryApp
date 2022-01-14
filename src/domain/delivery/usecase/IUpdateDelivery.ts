import { IGerenicAsyncUseCaseInterface } from "@domain/shared/generic/usecase";
import IDelivery from "../entity/IDelivery";

export type IUpdateDeliveryRequest = Partial<
  Pick<IDelivery, "id_deliveryman" | "end_at" | "item_name" | "id">
>;

type IUpdateDelivery = IGerenicAsyncUseCaseInterface<
  IDelivery,
  IUpdateDeliveryRequest
>;

export default IUpdateDelivery;
