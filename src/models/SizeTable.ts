/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Measurement } from './Measurement';
/**
 * Size table for the Product
 */
export type SizeTable = {
    /**
     * Size table type
     */
    type: SizeTable.type;
    /**
     * The unit the size table values are in
     */
    unit?: SizeTable.unit;
    /**
     * The size table description (HTML)
     */
    description?: string;
    /**
     * The URL of an image showing the measurements
     */
    image_url?: string;
    /**
     * The description of the measurement image (HTML)
     */
    image_description?: string;
    /**
     * The size table measurements
     */
    measurements: Array<Measurement>;
};
export namespace SizeTable {
    /**
     * Size table type
     */
    export enum type {
        MEASURE_YOURSELF = 'measure_yourself',
        PRODUCT_MEASURE = 'product_measure',
        INTERNATIONAL = 'international',
    }
    /**
     * The unit the size table values are in
     */
    export enum unit {
        INCHES = 'inches',
        CM = 'cm',
    }
}

