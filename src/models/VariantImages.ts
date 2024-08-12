/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { VariantImage } from './VariantImage';
export type VariantImages = {
    /**
     * Variant ID
     */
    catalog_variant_id?: number;
    /**
     * Variant color
     */
    color?: string | null;
    /**
     * Primary variant hex color used. Use this hex color to fill the mockup.
     */
    primary_hex_color?: string | null;
    /**
     * Secondary variant hex color used. Use this hex color to fill the mockup.
     */
    secondary_hex_color?: string | null;
    /**
     * Variant's images
     */
    images?: Array<VariantImage>;
};

