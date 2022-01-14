

interface IGerenicAsyncUseCaseInterface<RESPONSE, REQUEST> {
    handle: (req: REQUEST) => Promise<RESPONSE>
}

interface IGerenicSyncUseCase<RESPONSE,REQUEST> {
    handle: (req: REQUEST) => RESPONSE
}

export {
    IGerenicAsyncUseCaseInterface,
    IGerenicSyncUseCase
}