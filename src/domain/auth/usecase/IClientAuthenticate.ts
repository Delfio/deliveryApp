import { IGerenicAsyncUseCaseInterface } from "@domain/shared/generic/usecase";

interface IClientAuthenticateRequest {
  username: string;
  password: string;
}

type IClientAuthenticate = IGerenicAsyncUseCaseInterface<
  string,
  IClientAuthenticateRequest
>;

export { IClientAuthenticateRequest };
export default IClientAuthenticate;
