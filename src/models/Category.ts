/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { HateoasLink_2 } from './HateoasLink_2';
/**
 * Information about the Category
 */
export type Category = {
    /**
     * Category ID
     */
    id?: number;
    /**
     * ID of the parent Category. If there is no parent Category, null is returned.
     */
    parent_id?: number | null;
    /**
     * The URL of the Category image
     */
    image_url?: string;
    /**
     * Category title
     */
    title?: string;
    /**
     * HATEOAS links
     */
    _links?: {
        /**
         * Link to single category
         */
        self?: HateoasLink_2;
    };
};

