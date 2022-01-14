import { IGerenicAsyncUseCaseInterface } from "@domain/shared/generic/usecase";

interface ICreateDeliveryManRequest {
  username: string;
  password: string;
}

type ICreateDeliveryMan = IGerenicAsyncUseCaseInterface<
  void,
  ICreateDeliveryManRequest
>;

export { ICreateDeliveryManRequest };
export default ICreateDeliveryMan;
