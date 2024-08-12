/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AdditionalPlacements } from './AdditionalPlacements';
import type { VariantsPriceData } from './VariantsPriceData';
/**
 * Variant prices information
 */
export type VariantPrices = {
    /**
     * Currency in which prices are returned
     */
    currency?: string;
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
    variant?: VariantsPriceData;
};

