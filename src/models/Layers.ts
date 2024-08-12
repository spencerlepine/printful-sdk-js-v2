/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { LayerOptionPrices } from './LayerOptionPrices';
/**
 * Information about the layer prices
 */
export type Layers = {
    /**
     * Type of layer
     */
    type?: string;
    /**
     * Additional price for layer
     */
    additional_price?: string;
    /**
     * Layer options prices
     */
    layer_options?: Array<LayerOptionPrices>;
};

