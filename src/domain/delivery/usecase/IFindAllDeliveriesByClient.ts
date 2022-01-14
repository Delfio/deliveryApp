import { IGerenicAsyncUseCaseInterface } from "@domain/shared/generic/usecase";
import IDelivery from "../entity/IDelivery";

export type IFindAllDeliveryByClientIDRequest = {
    client_id: string
};

type IFindAllDeliveryByClientID = IGerenicAsyncUseCaseInterface<IDelivery[], IFindAllDeliveryByClientIDRequest>


export default IFindAllDeliveryByClientID;
