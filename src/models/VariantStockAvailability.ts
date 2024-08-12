/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { HateoasLink } from './HateoasLink';
import type { TechniqueStockAvailability } from './TechniqueStockAvailability';
/**
 * Stock availability data for a specific catalog variant
 */
export type VariantStockAvailability = {
    /**
     * Catalog variant ID for which the the stock availability data apply
     */
    catalog_variant_id?: number;
    /**
     * Stock availability data for specific techniques of a catalog variant
     */
    techniques?: Array<TechniqueStockAvailability>;
    /**
     * HATEOAS links
     */
    _links?: {
        /**
         * Link to the catalog variant details
         */
        variant?: HateoasLink;
    };
};

