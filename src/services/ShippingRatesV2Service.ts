/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CatalogShippingRateItem } from '../models/CatalogShippingRateItem';
import type { ShippingRatesAddress } from '../models/ShippingRatesAddress';
import type { WarehouseShippingRateItem } from '../models/WarehouseShippingRateItem';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ShippingRatesV2Service {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Calculate Shipping Rates
     * Returns available shipping options and rates for the given list of products.
     * @param xPfStoreId Use this to specify which store you want to use (required only for account level token).
     *
     * The store IDs can be retrieved with the [Get basic information about stores](/docs/#operation/getStores) endpoint.
     *
     * @param xPfLanguage Use this to specify which locale you would like to use in the responses, for some endpoints this can affect translations.
     *
     * @param requestBody POST request body
     * @returns any OK
     * @throws ApiError
     */
    public calculateShppingRates(
        xPfStoreId?: string,
        xPfLanguage?: string,
        requestBody?: {
            /**
             * The recipient data.
             */
            recipient: ShippingRatesAddress;
            /**
             * Array of order items
             */
            order_items: Array<(CatalogShippingRateItem | WarehouseShippingRateItem)>;
            /**
             * Currency code in which the rate is returned. If not provided will use the default currency for the store.
             */
            currency?: string;
        },
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v2/shipping-rates',
            headers: {
                'X-PF-Store-Id': xPfStoreId,
                'X-PF-Language': xPfLanguage,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
            },
        });
    }
}
