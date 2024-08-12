/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type BaseMockupProduct = {
    /**
     * Mockup product source
     */
    source?: string;
    /**
     * Used to specify style of mockups that should be generated. For example:
     * * On the hanger
     * * On the Male/Female model
     * * Flat on the table
     * * etc.
     * Available mockup styles for catalog product can be found under _[Retrieve catalog product mockup styles](#operation/retrieveMockupStylesByProductId)_.
     *
     */
    mockup_style_ids?: Array<number>;
};

