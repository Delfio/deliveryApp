import { IGerenicAsyncUseCaseInterface } from "@domain/shared/generic/usecase";
import IDelivery from "../entity/IDelivery";

export type IFindAllAvailableRequest = null;

type IFindAllAvailable = IGerenicAsyncUseCaseInterface<
  IDelivery[],
  IFindAllAvailableRequest
>;

export default IFindAllAvailable;
