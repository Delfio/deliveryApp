import { IGerenicAsyncUseCaseInterface } from "@domain/shared/generic/usecase";

export type IValidateClientIsOwnerRequest = {
    client_id: string,
    delivery_id: string
};

type IValidateClientIsOwner = IGerenicAsyncUseCaseInterface<boolean, IValidateClientIsOwnerRequest>


export default IValidateClientIsOwner;
