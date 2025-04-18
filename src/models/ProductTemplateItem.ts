/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ItemWithoutPlacements } from './ItemWithoutPlacements';
export type ProductTemplateItem = ({
    /**
     * Product Template source.
     */
    source: ProductTemplateItem.source;
    /**
     * ID of Product Template. Allows external ID.
     */
    product_template_id: (number | string);
    /**
     * ID of Catalog variant. Must correspond to Product Template.
     */
    catalog_variant_id: number;
} & ItemWithoutPlacements);
export namespace ProductTemplateItem {
    /**
     * Product Template source.
     */
    export enum source {
        PRODUCT_TEMPLATE = 'product_template',
    }
}

