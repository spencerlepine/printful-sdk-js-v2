/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class OAuthScopesV2Service {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Retrieve OAuth scopes
     * This endpoint will retrieve all OAuth scopes associated with the used token
     * @returns any OK
     * @throws ApiError
     */
    public getOAuthScopes(): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v2/oauth-scopes',
            errors: {
                401: `Unauthorized`,
            },
        });
    }
}
