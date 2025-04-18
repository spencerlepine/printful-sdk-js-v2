/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AddFile } from '../models/AddFile';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class FilesV2Service {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Add a new file
     * Adds a new File to the library by providing URL of the file.
     *
     * If a file with identical URL already exists, then the original file is returned. If a file does not exist, a new file is created.
     *
     * [See examples](#tag/Examples/File-Library-API-examples/Add-a-new-file)
     *
     * @param requestBody POST request body
     * @param xPfStoreId Use this to specify which store you want to use (required only for account level token).
     *
     * The store IDs can be retrieved with the [Get basic information about stores](#tag/Stores-v2/operation/getStores) endpoint.
     *
     * @returns any OK
     * @throws ApiError
     */
    public addFile(
        requestBody: AddFile,
        xPfStoreId?: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v2/files',
            headers: {
                'X-PF-Store-Id': xPfStoreId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                404: `Not found`,
            },
        });
    }
    /**
     * Retrieve a single file from the file library
     * Get basic information about the file stored in the file library
     * @param id File ID.
     * @returns any OK
     * @throws ApiError
     */
    public getFileById(
        id: number,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v2/files/{id}',
            path: {
                'id': id,
            },
            errors: {
                400: `Bad Request`,
                404: `Not found`,
            },
        });
    }
}
