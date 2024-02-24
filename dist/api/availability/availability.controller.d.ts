import { availabilityDto } from './dtos';
import { IResponse } from 'src/interfaces';
import { AvailabilityProvider } from './availability.provider';
export declare class AvailabilityController {
    private readonly availabilityProvider;
    constructor(availabilityProvider: AvailabilityProvider);
    createAvailability(userAuth: any, AvailabilityDto: availabilityDto): Promise<IResponse>;
}
