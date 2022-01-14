import { IGerenicAsyncUseCaseInterface } from "@domain/shared/generic/usecase";
import IDelivery from "../entity/IDelivery";

export type IFindAllDeliveryByDeliverymanIDRequest = {
    deliveryman_id: string
};

type IFindAllDeliveryByDeliverymanID = IGerenicAsyncUseCaseInterface<IDelivery[], IFindAllDeliveryByDeliverymanIDRequest>


export default IFindAllDeliveryByDeliverymanID;
