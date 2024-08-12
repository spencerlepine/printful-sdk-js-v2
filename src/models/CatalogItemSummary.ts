/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { HateoasLink } from './HateoasLink';
/**
 * Simplified information about the Catalog Item
 */
export type CatalogItemSummary = {
    /**
     * Item ID
     */
    readonly id?: number;
    /**
     * The item type
     */
    type?: CatalogItemSummary.type;
    /**
     * Item source
     */
    source?: CatalogItemSummary.source;
    /**
     * Catalog Variant ID associated with the Item
     */
    catalog_variant_id?: number;
    /**
     * Item user specified external ID
     */
    external_id?: string | null;
    /**
     * Item quantity
     */
    quantity?: number;
    /**
     * Item custom name
     */
    name?: string;
    /**
     * The price Printful charges for the Item
     */
    price?: string;
    /**
     * Item retail price
     */
    retail_price?: string;
    /**
     * The price currency
     */
    currency?: string;
    /**
     * The retail price currency
     */
    retail_currency?: string;
    /**
     * HATEOAS links
     */
    readonly _links?: {
        self?: HateoasLink;
    };
};
export namespace CatalogItemSummary {
    /**
     * The item type
     */
    export enum type {
        ORDER_ITEM = 'order_item',
        BRANDING_ITEM = 'branding_item',
    }
    /**
     * Item source
     */
    export enum source {
        CATALOG = 'catalog',
    }
}

