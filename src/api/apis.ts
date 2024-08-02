export * from './catalogV2Api';
import { CatalogV2Api } from './catalogV2Api';
export * from './countriesV2Api';
import { CountriesV2Api } from './countriesV2Api';
export * from './mockupGeneratorV2Api';
import { MockupGeneratorV2Api } from './mockupGeneratorV2Api';
export * from './oAuthScopesV2Api';
import { OAuthScopesV2Api } from './oAuthScopesV2Api';
export * from './ordersV2Api';
import { OrdersV2Api } from './ordersV2Api';
export * from './shippingRatesV2Api';
import { ShippingRatesV2Api } from './shippingRatesV2Api';
export * from './webhookV2Api';
import { WebhookV2Api } from './webhookV2Api';
import * as http from 'http';

export class HttpError extends Error {
    constructor (public response: http.IncomingMessage, public body: any, public statusCode?: number) {
        super('HTTP request failed');
        this.name = 'HttpError';
    }
}

export { RequestFile } from '../model/models';

export const APIS = [CatalogV2Api, CountriesV2Api, MockupGeneratorV2Api, OAuthScopesV2Api, OrdersV2Api, ShippingRatesV2Api, WebhookV2Api];
