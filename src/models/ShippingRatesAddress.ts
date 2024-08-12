/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Information about the address
 */
export type ShippingRatesAddress = {
    /**
     * Address line 1
     */
    address1: string;
    /**
     * Address line 2
     */
    address2?: string | null;
    /**
     * City
     */
    city: string;
    /**
     * State code this property is required for certain countries like the USA, Australia and Japan
     */
    state_code?: string | null;
    /**
     * Country code
     */
    country_code: string;
    /**
     * ZIP/Postal code
     */
    zip?: string | null;
};

