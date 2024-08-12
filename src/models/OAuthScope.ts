/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Information about the OAuth scope
 */
export type OAuthScope = {
    /**
     * Display name of the scope
     */
    name: OAuthScope.name;
    /**
     * The scope value
     */
    value: OAuthScope.value;
};
export namespace OAuthScope {
    /**
     * Display name of the scope
     */
    export enum name {
        VIEW_ORDERS_OF_THE_AUTHORIZED_STORE = 'View orders of the authorized store',
        VIEW_AND_MANAGE_ORDERS_OF_THE_AUTHORIZED_STORE = 'View and manage orders of the authorized store',
        VIEW_STORE_PRODUCTS = 'View store products',
        VIEW_AND_MANAGE_STORE_PRODUCTS = 'View and manage store products',
        VIEW_STORE_FILES = 'View store files',
        VIEW_AND_MANAGE_STORE_FILES = 'View and manage store files',
        VIEW_STORE_WEBHOOKS = 'View store webhooks',
        VIEW_AND_MANAGE_STORE_WEBHOOKS = 'View and manage store webhooks',
    }
    /**
     * The scope value
     */
    export enum value {
        ORDERS_READ = 'orders/read',
        ORDERS = 'orders',
        SYNC_PRODUCTS_READ = 'sync_products/read',
        SYNC_PRODUCTS = 'sync_products',
        FILE_LIBRARY_READ = 'file_library/read',
        FILE_LIBRARY = 'file_library',
        WEBHOOKS_READ = 'webhooks/read',
    }
}

