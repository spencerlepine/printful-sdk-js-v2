/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CalculationStatus } from './CalculationStatus';
/**
 * The Order's retail costs
 */
export type RetailCosts = {
    calculation_status?: CalculationStatus;
    /**
     * The code of the currency in which the retail costs are returned.
     */
    currency?: string;
    /**
     * Total cost of all items.
     */
    subtotal?: string | null;
    /**
     * Discount sum.
     */
    discount?: string;
    /**
     * Shipping costs.
     */
    shipping?: string;
    /**
     * Sum of VAT (not included in the item price).
     */
    vat?: string;
    /**
     * Sum of taxes (not included in the item price).
     */
    tax?: string;
    /**
     * Grand Total (subtotal-discount+tax+vat+shipping).
     */
    total?: string | null;
};

