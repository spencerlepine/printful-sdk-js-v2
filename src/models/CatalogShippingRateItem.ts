/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type CatalogShippingRateItem = {
    /**
     * Catalog source
     */
    source: CatalogShippingRateItem.source;
    /**
     * Item quantity
     */
    quantity: number;
    /**
     * ID of catalog variant
     */
    catalog_variant_id: number;
};
export namespace CatalogShippingRateItem {
    /**
     * Catalog source
     */
    export enum source {
        CATALOG = 'catalog',
    }
}

