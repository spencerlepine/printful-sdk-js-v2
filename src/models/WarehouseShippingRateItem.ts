/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type WarehouseShippingRateItem = {
    /**
     * Warehouse source
     */
    source: WarehouseShippingRateItem.source;
    /**
     * Item quantity
     */
    quantity: number;
    /**
     * ID of catalog variant
     */
    warehouse_variant_id: number;
};
export namespace WarehouseShippingRateItem {
    /**
     * Warehouse source
     */
    export enum source {
        CATALOG = 'catalog',
    }
}

