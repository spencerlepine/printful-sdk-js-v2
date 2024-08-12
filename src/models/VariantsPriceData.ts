/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { VariantTechniquePrice } from './VariantTechniquePrice';
/**
 * Variant with the pricing information
 */
export type VariantsPriceData = {
    /**
     * Variant id
     */
    id?: number;
    /**
     * Array containing pricing information about available techniques per variant
     */
    techniques?: Array<VariantTechniquePrice>;
};

