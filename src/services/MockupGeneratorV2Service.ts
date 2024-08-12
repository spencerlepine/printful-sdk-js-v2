/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MockupTaskCreation } from '../models/MockupTaskCreation';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class MockupGeneratorV2Service {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Create Mockup Generator tasks
     * Create Mockup Generator tasks
     * @param xPfStoreId Use this to specify which store you want to use (required only for account level token).
     *
     * The store IDs can be retrieved with the [Get basic information about stores](/docs/#operation/getStores) endpoint.
     *
     * @param requestBody This action schedules asynchronous mockup generation tasks. In the response of this request `id` will be returned which can be used to retrieve the result of the tasks _[Retrieve mockup generator tasks](#operation/getMockupGeneratorTasks)_. In addition, the webhook event will be sent informing about the task completion, if the correct webhook has been subscribed to _[Mockup generator task finished event](#operation/mockupTaskFinished)_. You can subscribe to webhook events by using _[Set up event configuration](#operation/createWebhookEventConfiguration)_.
     * @returns any OK
     * @throws ApiError
     */
    public createMockupGeneratorTasks(
        xPfStoreId?: string,
        requestBody?: MockupTaskCreation,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v2/mockup-tasks',
            headers: {
                'X-PF-Store-Id': xPfStoreId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not found`,
            },
        });
    }
    /**
     * Retrieve Mockup Generator tasks
     * Returns result of Mockup Generator tasks
     * @param id One or more mockup generator task IDs to return only specified tasks. The IDs can be found in the response of the operation _[Create mockup generator tasks](#operation/createMockupGeneratorTasks)_.
     * @param limit The number of results to return per page.
     * @param offset The number of results to not include in the response starting from the beginning of the list.
     *
     * This can be used to return results after the initial 100. For example, sending offset 100
     *
     * @returns any OK
     * @throws ApiError
     */
    public getMockupGeneratorTasks(
        id: Array<string>,
        limit: number = 20,
        offset?: number,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v2/mockup-tasks',
            query: {
                'id': id,
                'limit': limit,
                'offset': offset,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not found`,
            },
        });
    }
}
