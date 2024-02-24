import { availabilityDto } from './dtos';
import { IResponse } from 'src/interfaces';
import { Helpers } from 'src/helpers/general.helpers';
import { AvailabilityService } from './availability.service';
export declare class AvailabilityProvider {
    private readonly availabilityService;
    private readonly helper;
    constructor(availabilityService: AvailabilityService, helper: Helpers);
    createAvailability(AvailabilityDto: availabilityDto): Promise<IResponse>;
}
