/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Item } from './Item';
export type CatalogItem = ({
    /**
     * Catalog source
     */
    source: CatalogItem.source;
    /**
     * ID of catalog variant
     */
    catalog_variant_id: number;
} & Item);
export namespace CatalogItem {
    /**
     * Catalog source
     */
    export enum source {
        CATALOG = 'catalog',
    }
}

