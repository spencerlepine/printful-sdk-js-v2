/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Info about additional product item option prices
 */
export type LayerOptionPrices = {
    /**
     * Option name
     */
    name?: string;
    /**
     * Option value type
     */
    type?: string;
    /**
     * Possible option values
     */
    values?: any[];
    /**
     * Option description
     */
    description?: string;
    /**
     * Additional price expressed in the region currency
     */
    price?: Record<string, string>;
};

