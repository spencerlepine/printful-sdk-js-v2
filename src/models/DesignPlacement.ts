/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CatalogOption } from './CatalogOption';
import type { FileLayer } from './FileLayer';
/**
 * Information about the product placements that can be used to specify the design placement
 */
export type DesignPlacement = {
    /**
     * Name of placement that can be used to place design in a correct spot on a product
     */
    placement: string;
    /**
     * Indicates technique for which the placements are available
     */
    technique: string;
    /**
     * Available layers for that product
     */
    layers: Array<FileLayer>;
    /**
     * Possible placement options
     */
    placement_options?: Array<CatalogOption>;
};

