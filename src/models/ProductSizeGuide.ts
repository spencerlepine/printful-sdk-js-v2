/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SizeTable } from './SizeTable';
/**
 * Size Guide information for the Product
 */
export type ProductSizeGuide = {
    /**
     * Product ID
     */
    catalog_product_id: number;
    /**
     * The sizes available for the Product
     */
    available_sizes: Array<string>;
    /**
     * Size tables for the product
     */
    size_tables: Array<SizeTable>;
};

