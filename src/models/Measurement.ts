/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MeasurementValue } from './MeasurementValue';
/**
 * The information about a single size table measurement
 */
export type Measurement = {
    /**
     * Measurement type
     */
    type_label?: string;
    /**
     * The measurement unit if it's not defined on the size table level or is different
     */
    unit?: string;
    /**
     * The measurement values for each size
     */
    values: Array<MeasurementValue>;
};

