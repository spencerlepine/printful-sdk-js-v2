/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { LayerOptions } from './LayerOptions';
import type { LayerPosition } from './LayerPosition';
/**
 * Information about the Layer
 */
export type Layer = {
    /**
     * Type of layer (e.g. file, text)
     */
    type?: string;
    /**
     * File image URL if layer type is file
     */
    url?: string;
    layer_options?: LayerOptions;
    position?: LayerPosition;
};

