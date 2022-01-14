import IClient from "../entity/IClient";
import { IGerenicAsyncUseCaseInterface } from "@domain/shared/generic/usecase";

type IValidateClientExistsByName = IGerenicAsyncUseCaseInterface<
  IClient | null,
  string
>;

export default IValidateClientExistsByName;
