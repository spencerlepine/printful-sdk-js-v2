/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { InternalId } from '../models/InternalId';
import type { StoreStatistics } from '../models/StoreStatistics';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class StoresV2Service {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Retrieve a single store
     * Get information about a single store.
     * @param storeId Store ID
     * @param xPfStoreId Use this to specify which store you want to use.
     *
     * The store IDs can be retrieved with the [Get basic information about stores](#tag/Stores-v2/operation/getStores) endpoint.
     *
     * @returns any OK
     * @throws ApiError
     */
    public getStoreById(
        storeId: InternalId,
        xPfStoreId?: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v2/stores/{store_id}',
            path: {
                'store_id': storeId,
            },
            headers: {
                'X-PF-Store-Id': xPfStoreId,
            },
            errors: {
                401: `Unauthorized`,
                404: `Not found`,
            },
        });
    }
    /**
     * Retrieves a list of stores
     * Retrieves a list of all stores available to the token. If the token is a store level token it will return only the one store, if it is an account level token it will return all stores available to the account.
     * @param xPfStoreId Use this to specify which store you want to use.
     *
     * The store IDs can be retrieved with the [Get basic information about stores](#tag/Stores-v2/operation/getStores) endpoint.
     *
     * @returns any OK
     * @throws ApiError
     */
    public getStores(
        xPfStoreId?: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v2/stores',
            headers: {
                'X-PF-Store-Id': xPfStoreId,
            },
            errors: {
                401: `Unauthorized`,
                404: `Not found`,
            },
        });
    }
    /**
     * Retrieve statistics for a single store
     * Returns statistics for specified report types.
     *
     * You need to specify the report types you want to retrieve in the `report_types` query parameter as a comma-separated list,
     * e.g. `report_types=sales_and_costs,profit`.
     *
     * **Note**: You cannot get statistics for a period longer than 6 months.
     *
     * #### Example
     *
     * To get statistics in the default currency of a store for `sales_and_costs` and `profit` reports for August 2022, you can use the
     * following
     * URL: https://api.printful.com/v2/stores/{id}/statistics?report_types=sales_and_costs,profit&date_from=2022-08-01&date_to=2022-08-31.
     *
     * ### Report types
     *
     * Currently, the following report types are available:
     *
     * | Report type                | Description                                              |
     * |----------------------------|----------------------------------------------------------|
     * | `sales_and_costs`          | Detailed information on sales and costs grouped by date. |
     * | `sales_and_costs_summary`  | Short information on sales and costs grouped by date.    |
     * | `printful_costs`           | Amount paid to Printful for fulfillment and shipping.    |
     * | `profit`                   | Profit in the specified period.                          |
     * | `total_paid_orders`        | The number of paid orders in the specified period.       |
     * | `costs_by_amount`          | Information on costs by amount grouped by date.          |
     * | `costs_by_product`         | Information on costs grouped by product.                 |
     * | `costs_by_variant`         | Information on costs grouped by variant.                 |
     * | `average_fulfillment_time` | Average time it took Printful to fulfill your orders.    |
     *
     * The response structure for the specific reports is documented in the response schema (`result.store_statistics.[reportName]`).
     *
     * @param storeId Use this to specify which store you want to use.
     * The store IDs can be retrieved with the [Get basic information about stores](#tag/Stores-v2/operation/getStores) endpoint.
     *
     * @param dateFrom The beginning of the period to get the statistics from (date in `Y-m-d` format).
     * @param dateTo The end of the period to get the statistics from (date in `Y-m-d` format).
     * @param reportTypes A comma-separated list of report types to be retrieved.
     * @param currency The currency (3-letter code) to return the statistics in.
     * The store currency will be used by default.
     *
     * @returns any OK
     * @throws ApiError
     */
    public getReports(
        storeId: number,
        dateFrom: string,
        dateTo: string,
        reportTypes: 'sales_and_costs' | 'profit' | 'average_fulfillment_type' | 'costs_by_amount' | 'costs_by_product' | 'costs_by_variant' | 'printful_costs' | 'sales_and_costs_summary' | 'total_paid_orders',
        currency?: string,
    ): CancelablePromise<{
        data: StoreStatistics;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v2/stores/{store_id}/statistics',
            path: {
                'store_id': storeId,
            },
            query: {
                'date_from': dateFrom,
                'date_to': dateTo,
                'currency': currency,
                'report_types': reportTypes,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not found`,
            },
        });
    }
}
