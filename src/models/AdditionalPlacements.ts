/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FileOptionPrices } from './FileOptionPrices';
import type { Layers } from './Layers';
/**
 * Info about additional product placements prices
 */
export type AdditionalPlacements = {
    /**
     * ID or key of placement
     */
    id?: string;
    /**
     * Title of the placement related
     */
    title?: string;
    /**
     * Placement type
     */
    type?: string;
    /**
     * Key associated to the available technique
     */
    technique_key?: string;
    /**
     * Price converted to the region currency
     */
    price?: string;
    /**
     * Discounted price per region
     */
    discounted_price?: string;
    /**
     * Array containing the pricing information about the file options used
     */
    placement_options?: Array<FileOptionPrices>;
    /**
     * Array containing the pricing information about the layers
     */
    layers?: Array<Layers>;
};

