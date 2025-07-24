/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { HateoasLink } from './HateoasLink';
export type Variant = {
    /**
     * Variant ID, use this to specify the product when creating orders
     */
    id: number;
    /**
     * ID of the product that this variant belongs to
     */
    catalog_product_id: number;
    /**
     * Display name
     */
    name: string;
    /**
     * Item size
     */
    size: string;
    /**
     * Item color
     */
    color: string | null;
    /**
     * Hexadecimal RGB color code. May not exactly reflect the real-world color
     */
    color_code: string | null;
    /**
     * Secondary hexadecimal RGB color code. May not exactly reflect the real-world color
     */
    color_code2: string | null;
    /**
     * A list of placement configuration objects, each specifying the layout details for a particular placement.
     */
    placement_dimensions?: any;
    /**
     * URL of a preview image for this variant
     */
    image: string;
    /**
     * HATEOAS links
     */
    _links: {
        /**
         * Link to same resource
         */
        self: HateoasLink;
        /**
         * Link to details about the product
         */
        product_details: HateoasLink;
        /**
         * Link to a list of all catalog variants that are siblings of this catalog variant, relating to the same catalog product
         */
        product_variants: HateoasLink;
        /**
         * Link to pricing information about this catalog variant
         */
        variant_prices: HateoasLink;
        /**
         * Link to images related to this variant and details about those images
         */
        variant_images: HateoasLink;
        /**
         * Link to information about the availability of this variant
         */
        variant_availability: HateoasLink;
    };
};

