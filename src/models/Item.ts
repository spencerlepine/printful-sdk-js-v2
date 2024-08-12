/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { HateoasLink } from './HateoasLink';
import type { ItemExternalId } from './ItemExternalId';
import type { PlacementsList } from './PlacementsList';
import type { ProductOptions } from './ProductOptions';
/**
 * Information about the Item
 */
export type Item = {
    /**
     * Item ID
     */
    readonly id?: number;
    external_id?: ItemExternalId;
    /**
     * Item quantity
     */
    quantity?: number;
    /**
     * Item retail price
     */
    retail_price?: string;
    /**
     * Item custom name
     */
    name?: string;
    placements?: PlacementsList;
    product_options?: ProductOptions;
    /**
     * HATEOAS links
     */
    readonly _links?: {
        self?: HateoasLink;
    };
};

