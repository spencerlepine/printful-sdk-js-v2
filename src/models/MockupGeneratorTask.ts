/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Error } from './Error';
import type { HateoasLink } from './HateoasLink';
import type { Mockup } from './Mockup';
/**
 * Result of mockup generator task
 */
export type MockupGeneratorTask = {
    /**
     * Unique task identifier used to check status of the task and retrieve the results once the task is ready.
     */
    id?: number;
    /**
     * Task status:
     * * `completed` – Mockup Generator task was successfully processed
     * * `pending` – Mockup Generator task is still being processed
     * * `failed` – Mockup Generator task failed
     *
     */
    status?: MockupGeneratorTask.status;
    /**
     * A list of mockups grouped by variant. Note that the same list of mockups can appear under multiple variants, this happens in cases where the variants have the same mockups, for example if the only difference is the size of the variant.
     */
    catalog_variant_mockups?: Array<{
        /**
         * ID of a catalog variant for which the mockup was generated.
         */
        catalog_variant_id?: number;
        /**
         * List of generated mockups
         */
        mockups?: Array<Mockup>;
    }>;
    failure_reasons?: Array<Error>;
    /**
     * HATEOAS links
     */
    readonly _links?: {
        /**
         * Link to the Generator Task details
         */
        self?: HateoasLink;
    };
};
export namespace MockupGeneratorTask {
    /**
     * Task status:
     * * `completed` – Mockup Generator task was successfully processed
     * * `pending` – Mockup Generator task is still being processed
     * * `failed` – Mockup Generator task failed
     *
     */
    export enum status {
        COMPLETED = 'completed',
        PENDING = 'pending',
        FAILED = 'failed',
    }
}

