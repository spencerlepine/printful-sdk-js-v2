/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Data containing information about the available mockup templates which can be used for user-side positioning. For example for intention of generating mockups without the use of Printful's mockup generator.
 */
export type MockupTemplates = {
    /**
     * A list of variant IDs for which the positions apply
     */
    catalog_variant_ids?: Array<number>;
    /**
     * Catalog product placement that is used for the design
     */
    placement?: string;
    /**
     * Catalog product technique that is used for the design
     */
    technique?: string;
    /**
     * Semi-transparent main template image URL.
     */
    image_url?: string;
    /**
     * Background image URL (optional). Used for certain mockups e.g. a wall behind hanged poster. If it's defined it is intended to be layered under the image defined in `image_url`.
     */
    background_url?: string | null;
    /**
     * HEX color code that should be used as a background color of `image_url`.
     */
    background_color?: number | null;
    /**
     * Width of the whole template in pixels.
     */
    template_width?: number;
    /**
     * Height of the whole template in pixels.
     */
    template_height?: number;
    /**
     * Print area width (image is positioned in this area).
     */
    print_area_width?: number;
    /**
     * Print area height (image is positioned in this area).
     */
    print_area_height?: number;
    /**
     * Print area top offset (offset in template).
     */
    print_area_top?: number;
    /**
     * Print area left offset (offset in template).
     */
    print_area_left?: number;
    /**
     * Should the main template image (image_url) be used as an overlay or as a background.
     */
    template_positioning?: MockupTemplates.template_positioning;
    /**
     * Wall art product orientation. Possible values: horizontal, vertical, any
     */
    orientation?: MockupTemplates.orientation;
};
export namespace MockupTemplates {
    /**
     * Should the main template image (image_url) be used as an overlay or as a background.
     */
    export enum template_positioning {
        OVERLAY = 'overlay',
        BACKGROUND = 'background',
    }
    /**
     * Wall art product orientation. Possible values: horizontal, vertical, any
     */
    export enum orientation {
        HORIZONTAL = 'horizontal',
        VERTICAL = 'vertical',
        ANY = 'any',
    }
}

