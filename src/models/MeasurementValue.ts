/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The measurement value for a specific size
 */
export type MeasurementValue = {
    /**
     * The size with which the value is associated
     */
    size: string;
    /**
     * The single value associated with a size (whether this or `min_value` and `max_value` will be present)
     */
    value?: string;
    /**
     * The lower boundary of the value range (whether this and `max_value` or `value` will be present)
     */
    min_value?: string;
    /**
     * The upper boundary of the value range (whether this and `min_value` or `value` will be present)
     */
    max_value?: string;
};

