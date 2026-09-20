/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Information about the address.
 *
 * **Required fields:**
 * - `country_code`: Always required
 *
 * **Conditionally required fields:**
 * - `state_code`: Required for United States (US), Australia (AU), and Canada (CA)
 *
 * **Optional fields:**
 * - All other fields are optional but providing more information may produce more precise results and more shipping options.
 *
 */
export type ShippingRatesAddress = {
    /**
     * Address line 1
     */
    address1?: string;
    /**
     * Address line 2
     */
    address2?: string | null;
    /**
     * City
     */
    city?: string;
    /**
     * State/province code. Required for United States (US), Australia (AU), and Canada (CA).
     * For other countries, this field is optional.
     *
     */
    state_code?: string | null;
    /**
     * Country code
     */
    country_code: string;
    /**
     * ZIP/Postal code
     */
    zip?: string | null;
};

