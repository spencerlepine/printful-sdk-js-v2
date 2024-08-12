/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CalculationStatus } from './CalculationStatus';
/**
 * The Order costs (Printful prices)
 */
export type Costs = {
    calculation_status?: CalculationStatus;
    /**
     * The code of the currency in which the costs are returned.
     */
    currency?: string | null;
    /**
     * Total cost of all items.
     */
    subtotal?: string | null;
    /**
     * Discount sum.
     */
    discount?: string | null;
    /**
     * Shipping costs.
     */
    shipping?: string | null;
    /**
     * Digitization costs.
     */
    digitization?: string | null;
    /**
     * Additional fee for custom product.
     */
    additional_fee?: string | null;
    /**
     * Custom product fulfillment fee.
     */
    fulfillment_fee?: string | null;
    /**
     * Retail delivery fee.
     */
    retail_delivery_fee?: string | null;
    /**
     * Sum of vat (not included in the item price).
     */
    vat?: string | null;
    /**
     * Sum of taxes (not included in the item price).
     */
    tax?: string | null;
    /**
     * Grand Total (subtotal-discount+tax+vat+shipping).
     */
    total?: string | null;
};

