import IClient from "../entity/IClient";
import { IGerenicAsyncUseCaseInterface } from "@domain/shared/generic/usecase";

type IClientID = string;

type IValidateClientExistsByID = IGerenicAsyncUseCaseInterface<
  IClient | null,
  IClientID
>;

export default IValidateClientExistsByID;
