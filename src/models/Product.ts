/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CatalogOption } from './CatalogOption';
import type { DesignPlacement } from './DesignPlacement';
import type { Techniques } from './Techniques';
/**
 * Information about the Product
 */
export type Product = {
    /**
     * Product ID
     */
    id?: number;
    /**
     * Main category of product
     */
    main_category_id?: number;
    /**
     * Product type
     */
    type?: string;
    /**
     * Product name
     */
    name?: string;
    /**
     * Brand name
     */
    brand?: string | null;
    /**
     * Model name
     */
    model?: string | null;
    /**
     * URL of a sample image for this product
     */
    image?: string;
    /**
     * Number of available variants for this product
     */
    variant_count?: number;
    /**
     * Product is discontinued and can no longer be ordered
     */
    is_discontinued?: boolean;
    /**
     * Product description
     */
    description?: string;
    /**
     * Product sizes
     */
    sizes?: Array<string>;
    /**
     * Product colors
     */
    colors?: Array<{
        /**
         * Name of the color
         */
        name?: string;
        /**
         * Value of the color in HEX
         */
        value?: string;
    }>;
    /**
     * Product's techniques
     */
    techniques?: Array<Techniques>;
    /**
     * Product's design placements
     */
    placements?: Array<DesignPlacement>;
    /**
     * Possible product options
     */
    product_options?: Array<CatalogOption>;
};

