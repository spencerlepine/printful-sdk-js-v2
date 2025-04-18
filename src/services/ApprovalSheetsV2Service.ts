/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ApprovalSheetsV2Service {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Retrieve a list of approval sheets
     * Retrieve a list of approval sheets confirming suggested changes to files of on hold orders.
     * @param xPfStoreId Use this to specify which store you want to use (required only for account level token).
     *
     * The store IDs can be retrieved with the [Get basic information about stores](#tag/Stores-v2/operation/getStores) endpoint.
     *
     * @param orderId Order ID.
     * @returns any OK
     * @throws ApiError
     */
    public getApprovalSheets(
        xPfStoreId?: string,
        orderId?: number,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v2/approval-sheets',
            headers: {
                'X-PF-Store-Id': xPfStoreId,
            },
            query: {
                'order_id': orderId,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }
}
