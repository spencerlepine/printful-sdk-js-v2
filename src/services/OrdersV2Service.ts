/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Address } from '../models/Address';
import type { CatalogItem } from '../models/CatalogItem';
import type { Customization } from '../models/Customization';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class OrdersV2Service {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Retrieve a list of orders
     * Retrieve a list of orders from a specific store. The order list will be paginated with twenty items per page by default.
     * @param limit The number of results to return per page.
     * @param offset The number of results to not include in the response starting from the beginning of the list.
     *
     * This can be used to return results after the initial 100. For example, sending offset 100
     *
     * @param xPfStoreId Use this to specify which store you want to use (required only for account level token).
     *
     * The store IDs can be retrieved with the [Get basic information about stores](/docs/#operation/getStores) endpoint.
     *
     * @returns any OK
     * @throws ApiError
     */
    public getOrders(
        limit: number = 20,
        offset?: number,
        xPfStoreId?: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v2/orders',
            headers: {
                'X-PF-Store-Id': xPfStoreId,
            },
            query: {
                'limit': limit,
                'offset': offset,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }
    /**
     * Create a new order
     * This endpoint allows the creation of a new order in which the default status will be `draft`.
     * @param xPfStoreId Use this to specify which store you want to use (required only for account level token).
     *
     * The store IDs can be retrieved with the [Get basic information about stores](/docs/#operation/getStores) endpoint.
     *
     * @param requestBody POST request body
     * @returns any OK
     * @throws ApiError
     */
    public createOrder(
        xPfStoreId?: string,
        requestBody?: {
            /**
             * Order ID from the external system
             */
            external_id?: string;
            /**
             * Shipping method. Defaults to 'STANDARD'
             */
            shipping?: string;
            /**
             * The recipient data.
             */
            recipient: Address;
            /**
             * Array of order items
             */
            order_items: Array<CatalogItem>;
            customization?: Customization;
            /**
             * Retail costs
             */
            retail_costs?: {
                /**
                 * The code of the currency in which the retail costs are returned.
                 */
                currency?: string;
                /**
                 * Discount sum.
                 */
                discount?: string;
                /**
                 * Shipping costs.
                 */
                shipping?: string;
                /**
                 * Sum of taxes (not included in the item price).
                 */
                tax?: string;
            };
        },
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v2/orders',
            headers: {
                'X-PF-Store-Id': xPfStoreId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
            },
        });
    }
    /**
     * Retrieve a single order
     * Retrieve a single order from the specified store. The result object will contain links to the same resource, order items, and shipments.
     * @param orderId Order ID (integer) or Order External ID (string prepended with "@" symbol)
     * @param xPfStoreId Use this to specify which store you want to use (required only for account level token).
     *
     * The store IDs can be retrieved with the [Get basic information about stores](/docs/#operation/getStores) endpoint.
     *
     * @returns any OK
     * @throws ApiError
     */
    public getOrder(
        orderId: (number | string),
        xPfStoreId?: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v2/orders/{order_id}',
            path: {
                'order_id': orderId,
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
     * Delete an order
     * <div class="alert alert-danger">
     * <strong>Warning:</strong> The DELETE HTTP method in version 2 of order in the
     * API will delete the order if the order can be deleted. This is distinct from
     * version 1 where the DELETE method will actually cancel the order rather than
     * delete it. Please, keep this in mind if you are migrating to version 2 from
     * version 1
     * </div>
     *
     * Delete the order if it can be deleted. An order can be deleted if it's status is
     * `draft`, `failed` or `cancelled`. The order must also have not been charged yet
     * and there must be no payments pending.
     *
     * @param orderId Order ID (integer) or Order External ID (string prepended with "@" symbol)
     * @param xPfStoreId Use this to specify which store you want to use (required only for account level token).
     *
     * The store IDs can be retrieved with the [Get basic information about stores](/docs/#operation/getStores) endpoint.
     *
     * @returns void
     * @throws ApiError
     */
    public deleteOrder(
        orderId: (number | string),
        xPfStoreId?: string,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/v2/orders/{order_id}',
            path: {
                'order_id': orderId,
            },
            headers: {
                'X-PF-Store-Id': xPfStoreId,
            },
            errors: {
                401: `Unauthorized`,
                404: `Not found`,
                409: `Conflict`,
            },
        });
    }
    /**
     * Update an order
     * Make a partial update of an order.
     * @param orderId Order ID (integer) or Order External ID (string prepended with "@" symbol)
     * @param xPfStoreId Use this to specify which store you want to use (required only for account level token).
     *
     * The store IDs can be retrieved with the [Get basic information about stores](/docs/#operation/getStores) endpoint.
     *
     * @param requestBody PATCH request body
     * @returns any OK
     * @throws ApiError
     */
    public updateOrder(
        orderId: (number | string),
        xPfStoreId?: string,
        requestBody?: {
            /**
             * Order ID from the external system
             */
            external_id?: string;
            /**
             * Shipping method. Defaults to 'STANDARD'
             */
            shipping?: string;
            /**
             * The recipient data.
             */
            recipient?: Address;
            /**
             * Array of order items
             */
            order_items?: Array<CatalogItem>;
            customization?: Customization;
            /**
             * Retail costs
             */
            retail_costs?: {
                /**
                 * The code of the currency in which the retail costs are returned.
                 */
                currency?: string;
                /**
                 * Discount sum.
                 */
                discount?: string;
                /**
                 * Shipping costs.
                 */
                shipping?: string;
                /**
                 * Sum of taxes (not included in the item price).
                 */
                tax?: string;
            };
        },
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/v2/orders/{order_id}',
            path: {
                'order_id': orderId,
            },
            headers: {
                'X-PF-Store-Id': xPfStoreId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
            },
        });
    }
    /**
     * Confirm an order
     * This endpoint allows customers to confirm the order and start the fulfillment in the production facility.
     * @param orderId Order ID (integer) or Order External ID (string prepended with "@" symbol)
     * @param xPfStoreId Use this to specify which store you want to use (required only for account level token).
     *
     * The store IDs can be retrieved with the [Get basic information about stores](/docs/#operation/getStores) endpoint.
     *
     * @returns any OK
     * @throws ApiError
     */
    public confirmOrder(
        orderId: (number | string),
        xPfStoreId?: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v2/orders/{order_id}/confirmation',
            path: {
                'order_id': orderId,
            },
            headers: {
                'X-PF-Store-Id': xPfStoreId,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }
    /**
     * Retrieve a list of order items
     * This endpoint retrieves the list of items that belong to the order.
     * @param orderId Order ID (integer) or Order External ID (string prepended with "@" symbol)
     * @param type Type of items returned (order_item, branding_item). By default all items are returned.
     * @param limit The number of results to return per page.
     * @param offset The number of results to not include in the response starting from the beginning of the list.
     *
     * This can be used to return results after the initial 100. For example, sending offset 100
     *
     * @param xPfStoreId Use this to specify which store you want to use (required only for account level token).
     *
     * The store IDs can be retrieved with the [Get basic information about stores](/docs/#operation/getStores) endpoint.
     *
     * @returns any OK
     * @throws ApiError
     */
    public getItemsByOrderId(
        orderId: (number | string),
        type?: string,
        limit: number = 20,
        offset?: number,
        xPfStoreId?: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v2/orders/{order_id}/order-items',
            path: {
                'order_id': orderId,
            },
            headers: {
                'X-PF-Store-Id': xPfStoreId,
            },
            query: {
                'type': type,
                'limit': limit,
                'offset': offset,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not found`,
            },
        });
    }
    /**
     * Create a new order item
     * This endpoint allows the creation of a new item that will be added to an existing order.
     * @param orderId Order ID (integer) or Order External ID (string prepended with "@" symbol)
     * @param requestBody POST request body
     * @param xPfStoreId Use this to specify which store you want to use (required only for account level token).
     *
     * The store IDs can be retrieved with the [Get basic information about stores](/docs/#operation/getStores) endpoint.
     *
     * @returns any OK
     * @throws ApiError
     */
    public createItemByOrderId(
        orderId: (number | string),
        requestBody: CatalogItem,
        xPfStoreId?: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v2/orders/{order_id}/order-items',
            path: {
                'order_id': orderId,
            },
            headers: {
                'X-PF-Store-Id': xPfStoreId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not found`,
            },
        });
    }
    /**
     * Retrieve a single order item
     * This endpoint will retrieve a single order item specified in the request.
     * @param orderItemId Item ID (integer) or Item External ID (string prepended with "@" symbol)
     * @param orderId Order ID (integer) or Order External ID (string prepended with "@" symbol)
     * @param xPfStoreId Use this to specify which store you want to use (required only for account level token).
     *
     * The store IDs can be retrieved with the [Get basic information about stores](/docs/#operation/getStores) endpoint.
     *
     * @returns any OK
     * @throws ApiError
     */
    public getItemById(
        orderItemId: (number | string),
        orderId: (number | string),
        xPfStoreId?: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v2/orders/{order_id}/order-items/{order_item_id}',
            path: {
                'order_item_id': orderItemId,
                'order_id': orderId,
            },
            headers: {
                'X-PF-Store-Id': xPfStoreId,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }
    /**
     * Update an order item
     * Make a partial update of an order item. NOTE that the source of the order item can't be changed via a PATCH request, to create an order item from another source you must delete the current one and add a new one.
     * @param orderItemId Item ID (integer) or Item External ID (string prepended with "@" symbol)
     * @param orderId Order ID (integer) or Order External ID (string prepended with "@" symbol)
     * @param requestBody PATCH request body
     * @param xPfStoreId Use this to specify which store you want to use (required only for account level token).
     *
     * The store IDs can be retrieved with the [Get basic information about stores](/docs/#operation/getStores) endpoint.
     *
     * @returns any OK
     * @throws ApiError
     */
    public updateItem(
        orderItemId: (number | string),
        orderId: (number | string),
        requestBody: CatalogItem,
        xPfStoreId?: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/v2/orders/{order_id}/order-items/{order_item_id}',
            path: {
                'order_item_id': orderItemId,
                'order_id': orderId,
            },
            headers: {
                'X-PF-Store-Id': xPfStoreId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not found`,
            },
        });
    }
    /**
     * Delete Order Item
     * Remove a single item from the order.
     * @param orderItemId Item ID (integer) or Item External ID (string prepended with "@" symbol)
     * @param orderId Order ID (integer) or Order External ID (string prepended with "@" symbol)
     * @param xPfStoreId Use this to specify which store you want to use (required only for account level token).
     *
     * The store IDs can be retrieved with the [Get basic information about stores](/docs/#operation/getStores) endpoint.
     *
     * @returns void
     * @throws ApiError
     */
    public deleteItemById(
        orderItemId: (number | string),
        orderId: (number | string),
        xPfStoreId?: string,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/v2/orders/{order_id}/order-items/{order_item_id}',
            path: {
                'order_item_id': orderItemId,
                'order_id': orderId,
            },
            headers: {
                'X-PF-Store-Id': xPfStoreId,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not found`,
            },
        });
    }
    /**
     * Retrieve a list of shipments
     * Shipments contain information about how and when your orders items will be delivered and fulfilled.
     * @param orderId Order ID (integer) or Order External ID (string prepended with "@" symbol)
     * @param xPfStoreId Use this to specify which store you want to use (required only for account level token).
     *
     * The store IDs can be retrieved with the [Get basic information about stores](/docs/#operation/getStores) endpoint.
     *
     * @param limit The number of results to return per page.
     * @param offset The number of results to not include in the response starting from the beginning of the list.
     *
     * This can be used to return results after the initial 100. For example, sending offset 100
     *
     * @returns any OK
     * @throws ApiError
     */
    public getShipments(
        orderId: (number | string),
        xPfStoreId?: string,
        limit: number = 20,
        offset?: number,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v2/orders/{order_id}/shipments',
            path: {
                'order_id': orderId,
            },
            headers: {
                'X-PF-Store-Id': xPfStoreId,
            },
            query: {
                'limit': limit,
                'offset': offset,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }
    /**
     * Retrieve an invoice
     * Returns the invoice for an order as a base64 encoded document. Decoding the base64 content can be different depending on the client, for most browsers this format will alow you to view and display the invoice `data:application/pdf;base64,{the_base_64_content_string}`.
     * @param orderId Order ID (integer) or Order External ID (string prepended with "@" symbol)
     * @param xPfStoreId Use this to specify which store you want to use (required only for account level token).
     *
     * The store IDs can be retrieved with the [Get basic information about stores](/docs/#operation/getStores) endpoint.
     *
     * @returns any OK
     * @throws ApiError
     */
    public getInvoiceByOrderId(
        orderId: (number | string),
        xPfStoreId?: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v2/orders/{order_id}/invoices',
            path: {
                'order_id': orderId,
            },
            headers: {
                'X-PF-Store-Id': xPfStoreId,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }
}
