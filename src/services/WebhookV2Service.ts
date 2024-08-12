/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EventConfigurationRequest } from '../models/EventConfigurationRequest';
import type { Response200 } from '../models/Response200';
import type { WebhookInfoRequest } from '../models/WebhookInfoRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class WebhookV2Service {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get webhook configuration
     * Returns a configured webhook URL and a list of webhook event types enabled for the store
     * @param xPfStoreId Use this to specify which store you want to use (required only for account level token).
     *
     * The store IDs can be retrieved with the [Get basic information about stores](/docs/#operation/getStores) endpoint.
     *
     * @param showExpired If this parameter is passed with value `true`, expired settings will be returned instead of a 404 warning.
     * @returns any OK
     * @throws ApiError
     */
    public getWebhooks(
        xPfStoreId?: string,
        showExpired?: boolean,
    ): CancelablePromise<Response200> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v2/webhooks',
            headers: {
                'X-PF-Store-Id': xPfStoreId,
            },
            query: {
                'show_expired': showExpired,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }
    /**
     * Set up webhook configuration
     * Use this endpoint to enable a webhook URL for a store and select webhook event types that will be sent to this URL.
     *
     * Note that only one webhook configuration can be active for each private OAuth token or app, calling this method will disable the previous webhook configuration.
     *
     * Setting up the [Catalog stock updated](#operation/catalogStockUpdated) webhook requires passing products (currently only IDs are taken into account).
     *
     * Stock update webhook (`catalog_stock_updated`) will only include information for the products specified in the `products` param.
     *
     * Configuring all other events require the same set of fields with no parameters.
     *
     * @param requestBody POST request body
     * @param xPfStoreId Use this to specify which store you want to use (required only for account level token).
     *
     * The store IDs can be retrieved with the [Get basic information about stores](/docs/#operation/getStores) endpoint.
     *
     * @returns any OK
     * @throws ApiError
     */
    public createWebhook(
        requestBody: WebhookInfoRequest,
        xPfStoreId?: string,
    ): CancelablePromise<Response200> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v2/webhooks',
            headers: {
                'X-PF-Store-Id': xPfStoreId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
            },
        });
    }
    /**
     * Disable webhook support
     * Removes the webhook URL and all event types from the store.
     * @param xPfStoreId Use this to specify which store you want to use (required only for account level token).
     *
     * The store IDs can be retrieved with the [Get basic information about stores](/docs/#operation/getStores) endpoint.
     *
     * @returns void
     * @throws ApiError
     */
    public disableWebhook(
        xPfStoreId?: string,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/v2/webhooks',
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
     * Get event configuration
     * Returns event configuration for store
     * @param eventType Event type
     * @param xPfStoreId Use this to specify which store you want to use (required only for account level token).
     *
     * The store IDs can be retrieved with the [Get basic information about stores](/docs/#operation/getStores) endpoint.
     *
     * @param showExpired If this parameter is passed with value `true`, expired settings will be returned instead of a 404 warning.
     * @returns any OK
     * @throws ApiError
     */
    public getWebhookEventConfiguration(
        eventType: string,
        xPfStoreId?: string,
        showExpired?: boolean,
    ): CancelablePromise<Response200> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v2/webhooks/{eventType}',
            path: {
                'eventType': eventType,
            },
            headers: {
                'X-PF-Store-Id': xPfStoreId,
            },
            query: {
                'show_expired': showExpired,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }
    /**
     * Set up event configuration
     * Use this endpoint to create or replace specific event configuration for a store.
     *
     * Setting up the [Catalog stock updated](#operation/catalogStockUpdated) webhook requires passing products (currently only IDs are taken into account).
     *
     * Stock update webhook will only include information for the products specified in the `products` param.
     *
     * @param eventType Event type
     * @param requestBody POST request body
     * @param xPfStoreId Use this to specify which store you want to use (required only for account level token).
     *
     * The store IDs can be retrieved with the [Get basic information about stores](/docs/#operation/getStores) endpoint.
     *
     * @returns any OK
     * @throws ApiError
     */
    public createWebhookEventConfiguration(
        eventType: string,
        requestBody: EventConfigurationRequest,
        xPfStoreId?: string,
    ): CancelablePromise<Response200> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v2/webhooks/{eventType}',
            path: {
                'eventType': eventType,
            },
            headers: {
                'X-PF-Store-Id': xPfStoreId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
            },
        });
    }
    /**
     * Disable support for event
     * Disables the event for a store and clears its configuration, leaving other webhooks intact.
     *
     * @param eventType Event type
     * @param xPfStoreId Use this to specify which store you want to use (required only for account level token).
     *
     * The store IDs can be retrieved with the [Get basic information about stores](/docs/#operation/getStores) endpoint.
     *
     * @returns void
     * @throws ApiError
     */
    public disableWebhookEvent(
        eventType: string,
        xPfStoreId?: string,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/v2/webhooks/{eventType}',
            path: {
                'eventType': eventType,
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
}
