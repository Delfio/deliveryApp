import { IGerenicAsyncUseCaseInterface } from "@domain/shared/generic/usecase";

export type IValidateDeliverymanIsOwnerRequest = {
  deliveryman_id: string;
  delivery_id: string;
};

type IValidateDeliverymanIsOwner = IGerenicAsyncUseCaseInterface<
  boolean,
  IValidateDeliverymanIsOwnerRequest
>;

export default IValidateDeliverymanIsOwner;
