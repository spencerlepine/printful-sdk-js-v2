/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PlacementOptions } from './PlacementOptions';
/**
 * A placement is used to represent the physical area in which a design will be printed, and the technique used.
 */
export type Placement_2 = {
    /**
     * Name of the placement
     */
    placement: string;
    /**
     * Placement's technique
     */
    technique: string;
    /**
     * Type of the print area. Defaults to simple. Advanced type might be specified only for some specific products
     * for example All-over Tote bag. In that case both sides of the product will be designed.
     * Advanced designs are often more complicated so it's advised to refer to the [mockup templates endpoint](#tag/Catalog-v2/operation/getMockupTemplatesByProductId) when using advanced designs.
     * Available print area types for a specific product can be found in [Mockup Styles endpoint](/docs/#operation/createMockupGeneratorTasks).
     *
     */
    print_area_type?: Placement_2.print_area_type;
    /**
     * Status of the placement design
     */
    placement_options?: PlacementOptions;
};
export namespace Placement_2 {
    /**
     * Type of the print area. Defaults to simple. Advanced type might be specified only for some specific products
     * for example All-over Tote bag. In that case both sides of the product will be designed.
     * Advanced designs are often more complicated so it's advised to refer to the [mockup templates endpoint](#tag/Catalog-v2/operation/getMockupTemplatesByProductId) when using advanced designs.
     * Available print area types for a specific product can be found in [Mockup Styles endpoint](/docs/#operation/createMockupGeneratorTasks).
     *
     */
    export enum print_area_type {
        SIMPLE = 'simple',
        ADVANCED = 'advanced',
    }
}

