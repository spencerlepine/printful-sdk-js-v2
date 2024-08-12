/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type ProblemDetails = {
    /**
     * A URL that can be followed to get to our [documentation](#section/Errors) for the problem type.
     */
    type?: string;
    /**
     * The HTTP status code.
     */
    status?: number;
    /**
     * A human-readable summary of the problem type.
     */
    title?: string;
    /**
     * A human-readable explanation specific to the occurrence of the problem.
     */
    details?: string;
    /**
     * Optional. A URI that uniquely identifies the specific occurence of the problem
     */
    instance?: string;
};

