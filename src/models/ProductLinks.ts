/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { HateoasLink_2 } from './HateoasLink_2';
/**
 * HATEOAS links
 */
export type ProductLinks = {
    /**
     * Link to same resource
     */
    self?: HateoasLink_2;
    /**
     * Link to product variants
     */
    variants?: HateoasLink_2;
    /**
     * Link to product categories
     */
    categories?: HateoasLink_2;
    /**
     * Link to product prices
     */
    product_prices?: HateoasLink_2;
    /**
     * Link product size guides
     */
    product_sizes?: HateoasLink_2;
    /**
     * Link product images
     */
    product_images?: HateoasLink_2;
    /**
     * Link to product stock availability endpoint
     */
    availability?: HateoasLink_2;
};

