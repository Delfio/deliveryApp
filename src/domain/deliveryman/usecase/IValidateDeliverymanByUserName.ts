import IClient from "../entity/IDeliveryman";
import { IGerenicAsyncUseCaseInterface } from "@domain/shared/generic/usecase";

type IValidateDeliverymanExistsByName = IGerenicAsyncUseCaseInterface<
  IClient | null,
  string
>;

export default IValidateDeliverymanExistsByName;
