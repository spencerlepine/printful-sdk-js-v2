/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ItemWithoutPlacements } from './ItemWithoutPlacements';
export type WarehouseItem = ({
    /**
     * Warehouse source
     */
    source?: WarehouseItem.source;
    /**
     * ID of warehouse variant
     */
    warehouse_product_variant_id?: number;
} & ItemWithoutPlacements);
export namespace WarehouseItem {
    /**
     * Warehouse source
     */
    export enum source {
        WAREHOUSE = 'warehouse',
    }
}

