/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AvailabilityStatus } from './AvailabilityStatus';
import type { HateoasLink_2 } from './HateoasLink_2';
export type Variant = {
    /**
     * Variant ID, use this to specify the product when creating orders
     */
    id?: number;
    /**
     * ID of the product that this variant belongs to
     */
    catalog_product_id?: number;
    /**
     * Display name
     */
    name?: string;
    /**
     * Item size
     */
    size?: string;
    /**
     * Item color
     */
    color?: string | null;
    /**
     * Hexadecimal RGB color code. May not exactly reflect the real-world color
     */
    color_code?: string | null;
    /**
     * Secondary hexadecimal RGB color code. May not exactly reflect the real-world color
     */
    color_code2?: string | null;
    /**
     * URL of a preview image for this variant
     */
    image?: string;
    /**
     * ~~Detailed stock status per region~~ _[Retrieve product stock availability](#operation/getProductStockAvailabilityById)_ should be used instead.
     * @deprecated
     */
    availability?: Array<AvailabilityStatus>;
    /**
     * HATEOAS links
     */
    _links?: {
        /**
         * Link to same resource
         */
        self?: HateoasLink_2;
    };
};

