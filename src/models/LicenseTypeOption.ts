/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Specifies the license types associated with the product design
 */
export type LicenseTypeOption = {
    /**
     * Option identifier
     */
    name: LicenseTypeOption.name;
    /**
     * License types associated with the product design. Possible values:
     * - `CLC` - Collegiate Licensing Company
     * - `AFFINITY` - Affinity
     * - `BR` - BR
     * - `EX` - EX
     * - `NCAA` - NCAA
     * - `FAN` - Fan
     * - `BCOMPLY` - BrandComply
     * - `TAG` - Tag
     * - `DLH` - DLH
     * - `CORE81` - Core81
     *
     */
    value: Array<'CLC' | 'AFFINITY' | 'BR' | 'EX' | 'NCAA' | 'FAN' | 'BCOMPLY' | 'TAG' | 'DLH' | 'CORE81'>;
};
export namespace LicenseTypeOption {
    /**
     * Option identifier
     */
    export enum name {
        LICENSE_TYPE = 'license_type',
    }
}

