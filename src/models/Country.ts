/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type Country = {
    /**
     * Country code
     */
    code?: string;
    /**
     * Country name
     */
    name?: string;
    /**
     * This array contains all states available for a country. If states are not required or not applicable for a given country this array will be empty.
     */
    states?: Array<{
        /**
         * State code
         */
        code?: string;
        /**
         * State name
         */
        name?: string;
    }>;
};

