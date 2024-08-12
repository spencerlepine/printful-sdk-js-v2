/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class CountriesV2Service {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Retrieve a list of countries
     * Get information about all countries where Printful is available
     * @param offset The number of results to not include in the response starting from the beginning of the list.
     *
     * This can be used to return results after the initial 100. For example, sending offset 100
     *
     * @param limit The number of results to return per page.
     * @returns any OK
     * @throws ApiError
     */
    public getCountries(
        offset?: number,
        limit: number = 20,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v2/countries',
            query: {
                'offset': offset,
                'limit': limit,
            },
            errors: {
                400: `Bad Request`,
            },
        });
    }
}
