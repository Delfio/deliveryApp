import { IGerenicAsyncUseCaseInterface } from "@domain/shared/generic/usecase";

interface IValidateClientPasswordRequest {
  clientRequestPassword: string;
  clientHashedPassword: string;
}

type IValidateClientPassword = IGerenicAsyncUseCaseInterface<
  boolean,
  IValidateClientPasswordRequest
>;

export { IValidateClientPasswordRequest };
export default IValidateClientPassword;
