/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Information about the address
 */
export type Address = {
    /**
     * Full name
     */
    name?: string;
    /**
     * Company name
     */
    company?: string;
    /**
     * Address line 1
     */
    address1?: string;
    /**
     * Address line 2
     */
    address2?: string;
    /**
     * City
     */
    city?: string;
    /**
     * State code
     */
    state_code?: string;
    /**
     * State name
     */
    state_name?: string;
    /**
     * Country code
     */
    country_code?: string;
    /**
     * Country name
     */
    country_name?: string;
    /**
     * ZIP/Postal code
     */
    zip?: string;
    /**
     * Phone number
     */
    phone?: string;
    /**
     * Email address
     */
    email?: string;
    /**
     * TAX number (`optional`, but in case of Brazil country this field becomes `required` and will be used as CPF/CNPJ number)<br> CPF format is 000.000.000-00 (14 characters);<br> CNPJ format is 00.000.000/0000-00 (18 characters).
     */
    tax_number?: string;
};

