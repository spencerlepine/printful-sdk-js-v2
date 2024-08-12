/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { HateoasLink } from './HateoasLink';
/**
 * Simplified information about the Warehouse Item
 */
export type WarehouseItemSummary = {
    /**
     * Item ID
     */
    readonly id?: number;
    /**
     * The item type
     */
    type?: WarehouseItemSummary.type;
    /**
     * Item source
     */
    source?: WarehouseItemSummary.source;
    /**
     * ID of warehouse product associated with the Item
     */
    warehouse_product_variant_id?: number;
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
export namespace WarehouseItemSummary {
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
        WAREHOUSE = 'warehouse',
    }
}

