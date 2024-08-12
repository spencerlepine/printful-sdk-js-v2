/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The values for customized packing slip
 */
export type PackingSlip = {
    /**
     * Customer service email
     */
    email?: string;
    /**
     * Customer service phone
     */
    phone?: string;
    /**
     * Custom packing slip message
     */
    message?: string;
    /**
     * URL address to a sticker we will put on a package
     */
    logo_url?: string;
    /**
     * Store name override for the return address
     */
    store_name?: string;
    /**
     * Your own Order ID that will be printed instead of Printful's Order ID
     */
    custom_order_id?: string;
};

