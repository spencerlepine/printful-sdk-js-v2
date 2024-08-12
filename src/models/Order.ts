/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Address } from './Address';
import type { CatalogItemSummary } from './CatalogItemSummary';
import type { Costs } from './Costs';
import type { Customization } from './Customization';
import type { HateoasLink } from './HateoasLink';
import type { RetailCosts } from './RetailCosts';
import type { WarehouseItemSummary } from './WarehouseItemSummary';
/**
 * Order
 */
export type Order = {
    /**
     * Order ID
     */
    id?: number;
    /**
     * Order ID from the external system
     */
    external_id?: string | null;
    /**
     * Store ID
     */
    store_id?: number;
    /**
     * Shipping method. Defaults to 'STANDARD'
     */
    shipping?: string;
    /**
     * Order status:<br />
     * **draft** - order is not submitted for fulfillment<br />
     * **failed** - order was submitted for fulfillment but was not accepted because of an error (problem with address, printfiles, charging, etc.)<br />
     * **pending** - order has been submitted for fulfillment<br />
     * **canceled** - order is canceled<br />
     * **onhold** - order has encountered a problem during the fulfillment that needs to be resolved together with the Printful customer service<br />
     * **inprocess** - order is being fulfilled and is no longer cancellable<br />
     * **partial** - order is partially fulfilled (some items are shipped already, the rest will follow)<br />
     * **fulfilled** - all items are shipped
     *
     */
    status?: string;
    /**
     * Time when the order was created
     */
    created_at?: string;
    /**
     * Time when the order was updated
     */
    updated_at?: string;
    /**
     * The recipient data.
     */
    recipient?: Address;
    costs?: Costs;
    retail_costs?: RetailCosts;
    /**
     * Simplified order item list. For a full list of all items use the [Get Order Items](#operation/getItemsByOrderId) endpoint.
     */
    order_items?: Array<(CatalogItemSummary | WarehouseItemSummary)>;
    customization?: Customization;
    /**
     * HATEOAS links
     */
    _links?: {
        /**
         * Link to the order details
         */
        self?: HateoasLink;
        /**
         * Link to the order confirmation
         */
        order_confirmation?: HateoasLink;
        /**
         * Link to the order invoice
         */
        order_invoices?: HateoasLink;
        /**
         * Link to all order items associated with the order
         */
        order_items?: HateoasLink;
        /**
         * Link to the shipments associated with the order
         */
        shipments?: HateoasLink;
    };
};

