/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Result of mockup generator tasks.
 */
export type Mockup = {
    /**
     * Placement name for which the mockup was generated
     */
    placement?: string;
    /**
     * This is a name that can be displayed to end customers.
     */
    display_name?: string;
    /**
     * Technique name for which the mockup was generated
     */
    technique?: string;
    /**
     * Mockup style identifier. Available mockup styles can be found under _[Retrieve catalog product mockup styles](#operation/retrieveMockupStylesByProductId)_.
     */
    style_id?: number;
    /**
     * Temporary URL to generated mockup image. Image will be removed from the hosting after a day so make sure to persist a copy if needed.
     */
    mockup_url?: string;
};

