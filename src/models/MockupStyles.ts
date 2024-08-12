/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Data containing information about the available mockup styles
 */
export type MockupStyles = {
    /**
     * Catalog product placement for which the mockup styles defined in `mockup_style_ids` could be used.
     */
    placement?: string;
    /**
     * Placement display name that can be shown to end-customers.
     */
    display_name?: string;
    /**
     * Technique name
     */
    technique?: string;
    /**
     * Print area width of a placement defined in inches
     */
    print_area_width?: number;
    /**
     * Print area height of a placement defined in inches
     */
    print_area_height?: number;
    /**
     * Print area DPI
     */
    dpi?: number;
    /**
     * A list of available mockup styles for example:
     * * On the hanger
     * * On the Male/Female model
     * * Flat on the table
     * * etc.
     */
    mockup_styles?: Array<{
        /**
         * Identifier of mockup style. This value is intended to be used when specifying the mockup styles during mockup generator task creation _[Create mockup generator tasks](#operation/createMockupGeneratorTasks)_.
         */
        id?: number;
        /**
         * The category name of the mockup style
         */
        category_name?: string;
        /**
         * Display name of mockup view. View determines a point of view of the camera. E.g to the right or left to the mockup.
         */
        view_name?: string;
    }>;
};

