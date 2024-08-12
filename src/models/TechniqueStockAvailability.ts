/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SellingRegionStockAvailability } from './SellingRegionStockAvailability';
import type { TechniqueEnum } from './TechniqueEnum';
export type TechniqueStockAvailability = {
    technique?: TechniqueEnum;
    /**
     * List of selling regions with stock availability
     */
    selling_regions?: Array<SellingRegionStockAvailability>;
};

