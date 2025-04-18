/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { HateoasLink } from '../models/HateoasLink';
import type { Paging } from '../models/Paging';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class WarehouseProductsV2Service {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Retrieve a list of warehouse products
     * This endpoint returns paginated results containing detailed information about warehouse products, including their variants, stock levels, and dimensions.
     * @param filterName Wildcard match of the name value. Note that the value will be matched if the name property contains the value anywhere in the string.
     * @param xPfStoreId Use this to specify which store you want to use (required only for account level token).
     *
     * The store IDs can be retrieved with the [Get basic information about stores](#tag/Stores-v2/operation/getStores) endpoint.
     *
     * @param limit The number of results to return per page.
     * @param offset The number of results to not include in the response starting from the beginning of the list.
     *
     * This can be used to return results after the initial 100. For example, sending offset 100
     *
     * @returns any OK
     * @throws ApiError
     */
    public getWarehouseProducts(
        filterName?: string,
        xPfStoreId?: string,
        limit: number = 20,
        offset?: number,
    ): CancelablePromise<{
        data: Array<{
            /**
             * Unique identifier of the warehouse product
             */
            id: number;
            /**
             * Name of the warehouse product
             */
            name: string;
            /**
             * Current status of the warehouse product
             */
            status: 'draft' | 'awaiting_approval' | 'approved' | 'declined' | 'suspended';
            /**
             * Currency code for the product's pricing (e.g., "USD")
             */
            currency: string;
            /**
             * URL of the product's image
             */
            image_url: string;
            /**
             * Retail price of the product (base variant)
             */
            retail_price: string;
            /**
             * Array of variant details for the product
             */
            warehouse_variants: Array<{
                /**
                 * Unique identifier of the variant
                 */
                id: number;
                /**
                 * Name of the variant
                 */
                name: string;
                /**
                 * Stock Keeping Unit (SKU) of the variant
                 */
                sku: string;
                /**
                 * URL of the variant's image
                 */
                image_url: string;
                /**
                 * Retail price of the variant
                 */
                retail_price: string;
                /**
                 * Available quantity of the variant
                 */
                quantity: number;
                /**
                 * Dimensions of the variant
                 */
                dimensions: {
                    /**
                     * The system of measurement used for the dimensions.
                     */
                    measurement_system: 'imperial' | 'metric';
                    /**
                     * Width of the variant.
                     */
                    width: number;
                    /**
                     * Height of the variant.
                     */
                    height: number;
                    /**
                     * Length of the variant. (NEW)
                     */
                    length: number;
                    /**
                     * Weight of the variant.
                     */
                    weight: number;
                };
                _links: {
                    /**
                     * Link to same resource
                     */
                    self?: HateoasLink;
                };
            }>;
            /**
             * Links to related resources
             */
            _links: {
                /**
                 * Link to same resource
                 */
                self?: HateoasLink;
                /**
                 * Link to warehouse variants of the warehouse product
                 */
                warehouse_variants?: HateoasLink;
            };
        }>;
        paging: Paging;
        /**
         * HATEOAS links
         */
        _links: {
            /**
             * Link to same resource
             */
            self?: HateoasLink;
            /**
             * Link to the next page (absent if the current page is the last one or if there is only one page)
             */
            next?: HateoasLink;
            /**
             * Link to the previous page (absent if the current page is the first one or if there is only one page)
             */
            previous?: HateoasLink;
            /**
             * Link to the first page (absent if there is only one page)
             */
            first?: HateoasLink;
            /**
             * Link to the last page (absent if there is only one page)
             */
            last?: HateoasLink;
        };
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v2/warehouse-products',
            headers: {
                'X-PF-Store-Id': xPfStoreId,
            },
            query: {
                'filter[name*]': filterName,
                'limit': limit,
                'offset': offset,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }
    /**
     * Retrieve a single warehouse product
     * Get information about a single warehouse product with it's stock location.
     * @param warehouseProductId Warehouse Product ID.
     * @param xPfStoreId Use this to specify which store you want to use (required only for account level token).
     *
     * The store IDs can be retrieved with the [Get basic information about stores](#tag/Stores-v2/operation/getStores) endpoint.
     *
     * @returns any OK
     * @throws ApiError
     */
    public getWarehouseProductById(
        warehouseProductId: number,
        xPfStoreId?: string,
    ): CancelablePromise<{
        data: {
            /**
             * Unique identifier of the warehouse product
             */
            id: number;
            /**
             * Name of the warehouse product
             */
            name: string;
            /**
             * Current status of the warehouse product
             */
            status: 'draft' | 'awaiting_approval' | 'approved' | 'declined' | 'suspended';
            /**
             * Currency code for the product's pricing (e.g., "USD")
             */
            currency: string;
            /**
             * URL of the product's image
             */
            image_url: string;
            /**
             * Retail price of the product (base variant)
             */
            retail_price: string;
            /**
             * Array of variant details for the product
             */
            warehouse_variants: Array<{
                /**
                 * Unique identifier of the warehouse variant
                 */
                id: number;
                /**
                 * Name of the variant
                 */
                name: string;
                /**
                 * Stock Keeping Unit (SKU) of the warehouse variant
                 */
                sku: string;
                /**
                 * URL of the variant's image
                 */
                image_url: string;
                /**
                 * Retail price of the variant
                 */
                retail_price: string;
                /**
                 * Available quantity of the variant
                 */
                quantity: number;
                /**
                 * Stock location of the variant
                 */
                stock_location: Array<{
                    /**
                     * Name of the warehouse facility
                     */
                    facility: string;
                    /**
                     * Total quantity of product variant in our stock
                     */
                    stocked: number;
                    /**
                     * Available quantity of product variant in our stock
                     */
                    available: number;
                }>;
                /**
                 * Dimensions of the variant
                 */
                dimensions: {
                    /**
                     * The system of measurement used for the dimensions.
                     */
                    measurement_system: 'imperial' | 'metric';
                    /**
                     * Width of the variant.
                     */
                    width: number;
                    /**
                     * Height of the variant.
                     */
                    height: number;
                    /**
                     * Length of the variant. (NEW)
                     */
                    length: number;
                    /**
                     * Weight of the variant.
                     */
                    weight: number;
                };
                _links: {
                    /**
                     * Link to same resource
                     */
                    self?: HateoasLink;
                };
            }>;
            /**
             * Links to related resources
             */
            _links: {
                /**
                 * Link to same resource
                 */
                self?: HateoasLink;
                /**
                 * Link to warehouse variants of the warehouse product
                 */
                warehouse_variants?: HateoasLink;
            };
        };
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v2/warehouse-products/{warehouse_product_id}',
            path: {
                'warehouse_product_id': warehouseProductId,
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
