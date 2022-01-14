import { IGerenicAsyncUseCaseInterface } from "@domain/shared/generic/usecase";

interface IDeliverymanAuthenticateRequest {
  username: string;
  password: string;
}

type IDeliverymanAuthenticate = IGerenicAsyncUseCaseInterface<
  string,
  IDeliverymanAuthenticateRequest
>;

export { IDeliverymanAuthenticateRequest };
export default IDeliverymanAuthenticate;
