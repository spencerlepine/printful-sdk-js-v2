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
    products?: Array<(CatalogMockupProduct | TemplateMockupProduct)>;
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

