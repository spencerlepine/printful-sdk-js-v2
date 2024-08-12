/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type AvailabilityStatus = {
    /**
     * Region name
     */
    region?: string;
    /**
     * Stock status. Possible values include: 'in_stock' - available for fulfillment, 'stocked_on_demand' - available for fulfillment, 'discontinued' - permanently unavailable, 'out_of_stock' - temporarily unavailable
     */
    status?: string;
};

