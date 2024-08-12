/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { HeaderSource } from './HeaderSource';
import type { ParameterSource } from './ParameterSource';
import type { PointerSource } from './PointerSource';
export type Error = {
    /**
     * a URI that uniquely identifies the validation rule that failed. If it’s a URL, it should point to an explanation of the constraint in the documentation.
     */
    type?: string;
    /**
     * A human-readable explanation of the error
     */
    detail?: string;
    /**
     * Source of the value that caused the issue
     */
    source?: (HeaderSource | ParameterSource | PointerSource);
    /**
     * List of valid values that could be used instead to avoid the error
     */
    valid_values?: Array<string>;
};

