import { IGerenicAsyncUseCaseInterface } from "@domain/shared/generic/usecase";

export type IFinishDeliveryRequest = {
  delivery_id: string;
};

type IFinishDelivery = IGerenicAsyncUseCaseInterface<
  void,
  IFinishDeliveryRequest
>;

export default IFinishDelivery;
