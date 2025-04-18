/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { HateoasLink } from './HateoasLink';
import type { ItemExternalId } from './ItemExternalId';
/**
 * Information about the Item
 */
export type ItemWithoutPlacements = {
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
    /**
     * HATEOAS links
     */
    readonly _links?: {
        self?: HateoasLink;
    };
};

