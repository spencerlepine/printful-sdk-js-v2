/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AdditionalPlacements } from './AdditionalPlacements';
import type { VariantsPriceData } from './VariantsPriceData';
/**
 * Product prices information
 */
export type ProductPrices = {
    /**
     * Abbreviation from the store currency or currency specified
     */
    currency?: string;
    /**
     * Product related with the pricing information
     */
    product?: {
        /**
         * Product Identifier
         */
        id?: number;
        /**
         * Array containing the pricing information about the placement prices
         */
        placements?: Array<AdditionalPlacements>;
    };
    variants?: Array<VariantsPriceData>;
};

