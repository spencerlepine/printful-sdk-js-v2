/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Specify the type of inside label
 */
export type InsideLabelTypeOption = {
    /**
     * Option identifier
     */
    name: InsideLabelTypeOption.name;
    /**
     * Specifies type of inside label design that should be used
     */
    value: InsideLabelTypeOption.value;
};
export namespace InsideLabelTypeOption {
    /**
     * Option identifier
     */
    export enum name {
        INSIDE_LABEL_TYPE = 'inside_label_type',
    }
    /**
     * Specifies type of inside label design that should be used
     */
    export enum value {
        NATIVE = 'native',
        CUSTOM = 'custom',
    }
}

