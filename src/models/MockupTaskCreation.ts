/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CatalogMockupProduct } from './CatalogMockupProduct';
import type { TemplateMockupProduct } from './TemplateMockupProduct';
export type MockupTaskCreation = {
    /**
     * Generated file format. PNG will have a transparent background, JPG will have a smaller file size.
     */
    format?: MockupTaskCreation.format;
    /**
     * Width of the mockup image in pixels. If not specified, the default value will be used. The default value is 1000px.
     * If the value is specified as 2000 that means that resulting mockups will be 2000x2000px.
     *
     */
    mockup_width_px?: number;
    products: Array<(CatalogMockupProduct | TemplateMockupProduct)>;
};
export namespace MockupTaskCreation {
    /**
     * Generated file format. PNG will have a transparent background, JPG will have a smaller file size.
     */
    export enum format {
        JPG = 'jpg',
        PNG = 'png',
    }
}

