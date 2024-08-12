/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TechniqueEnum } from '../models/TechniqueEnum';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class CatalogV2Service {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Retrieve a list of catalog products
     * This endpoint retrieves a list of the products available in Printful's catalog. The list is paginated and can be filtered using various filters. The information returned includes details on how each product can be designed, such as the available placements, techniques, and additional options.
     * For a visual representation of the design data, please see the following diagram:
     * [<img src="images/catalog/design_data_diagram.png#center" width="700"/>](images/catalog/design_data_diagram.png)
     *
     * @param categoryIds One or more category IDs to return only products in those categories. The IDs can be found in the response of the
     * operation _[Get Categories](#operation/getCategories)_.
     *
     * @param colors One or more color names to return only products with variants of one the those colors.
     *
     * @param limit The number of results to return per page.
     * @param _new If true only new Products will be returned.
     * @param offset The number of results to not include in the response starting from the beginning of the list.
     *
     * This can be used to return results after the initial 100. For example, sending offset 100
     *
     * @param placements One or more identifiers of a placement to return only products with variants that have that placement. The complete list of placements can be found [here](https://developers.printful.com/docs/#section/Placements).
     * @param sellingRegionName Only returns the products that can be sold in the specified region.
     * @param sortDirection This parameter only is used if sort_type is also present and it changes the order of the returned products.
     * The exact meaning varies depending on the value of `sort_type`:
     * * `sort_type=new`
     * * ascending sorts from newest to oldest.
     * * descending sorts from oldest to newest.
     * * `sort_type=rating`
     * * ascending from lowest to highest rated.
     * * descending from highest to lowest rated.
     * * `sort_type=price`
     * * ascending from lowest to highest price.
     * * descending from highest to lowest price.
     *
     * @param sortType The sorting strategy to use when sorting the result. When it's not present, no specific order is guaranteed.
     *
     * @param techniques One or more techniques to return only products with variants that can be printed using one of the techniques.
     * @returns any OK
     * @throws ApiError
     */
    public getProducts(
        categoryIds?: Array<number>,
        colors?: Array<string>,
        limit: number = 20,
        _new: boolean = false,
        offset?: number,
        placements?: Array<string>,
        sellingRegionName: 'worldwide' | 'north_america' | 'canada' | 'europe' | 'spain' | 'latvia' | 'uk' | 'france' | 'australia' | 'japan' | 'new_zealand' | 'italy' | 'brazil' | 'southeast_asia' | 'republic_of_korea' | 'english_speaking_regions' = 'worldwide',
        sortDirection: 'ascending' | 'descending' = 'descending',
        sortType?: 'new' | 'rating' | 'price',
        techniques?: Array<TechniqueEnum>,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v2/catalog-products',
            query: {
                'category_ids': categoryIds,
                'colors': colors,
                'limit': limit,
                'new': _new,
                'offset': offset,
                'placements': placements,
                'selling_region_name': sellingRegionName,
                'sort_direction': sortDirection,
                'sort_type': sortType,
                'techniques': techniques,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }
    /**
     * Retrieve a single catalog product
     * Returns information about a single specified catalog product. [See catalog product](#tag/Catalog-v2/What-is-a-catalog-product)
     *
     * @param id Product ID.
     * @param sellingRegionName Only returns the products that can be sold in the specified region.
     * @returns any OK
     * @throws ApiError
     */
    public getProductById(
        id: number,
        sellingRegionName: 'worldwide' | 'north_america' | 'canada' | 'europe' | 'spain' | 'latvia' | 'uk' | 'france' | 'australia' | 'japan' | 'new_zealand' | 'italy' | 'brazil' | 'southeast_asia' | 'republic_of_korea' | 'english_speaking_regions' = 'worldwide',
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v2/catalog-products/{id}',
            path: {
                'id': id,
            },
            query: {
                'selling_region_name': sellingRegionName,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }
    /**
     * Retrieve information about specific catalog variant
     * Returns information about single specified catalog variant. [See catalog variant](#tag/Catalog-v2/What-is-a-catalog-variant)
     *
     * @param id Variant ID
     * @returns any OK
     * @throws ApiError
     */
    public getVariantById(
        id: number,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v2/catalog-variants/{id}',
            path: {
                'id': id,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }
    /**
     * Retrieve information about catalog product variants
     * Returns information about all catalog variants associated with the specified
     * catalog product. [See catalog variant](#tag/Catalog-v2/What-is-a-catalog-variant)
     *
     * @param id Product ID.
     * @returns any OK
     * @throws ApiError
     */
    public getProductVariantsById(
        id: number,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v2/catalog-products/{id}/catalog-variants',
            path: {
                'id': id,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }
    /**
     * Retrieve a list of catalog categories
     * Returns list of all categories that are present in the catalog. The categories specify the type of the product that is associated with it. For example, the category "Men’s T-shirts" indicates that the product is a subgroup of T-shirts specifically targeted at Men.
     * Categories can be used to filter the product list by specific tags [See categories_ids](#operation/getProducts)
     *
     * @returns any OK
     * @throws ApiError
     */
    public getCategories(): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v2/catalog-categories',
            errors: {
                401: `Unauthorized`,
            },
        });
    }
    /**
     * Retrieve information about specific category
     * Returns information about a specific catalog category. The categories specify the type of the product that is associated with it. For example, the category "Men’s T-shirts" indicates that the product is a subgroup of T-shirts specifically targeted at Men.
     * Categories can be used to filter the product list by specific tags [See categories_ids](#operation/getProducts)
     *
     * @param id Category ID
     * @returns any OK
     * @throws ApiError
     */
    public getCategoryById(
        id: number,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v2/catalog-categories/{id}',
            path: {
                'id': id,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }
    /**
     * Retrieve a list of catalog product categories
     * To retrieve information about a particular products categories, use this feature. It returns details about the catalog categories associated with the catalog product. Categories help identify the type of product associated with them. For instance, the category "Men's T-shirts" denotes that the product is a subgroup of T-shirts intended for men.
     *
     * @param id Product ID.
     * @returns any OK
     * @throws ApiError
     */
    public getCategoriesByProductId(
        id: number,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v2/catalog-products/{id}/catalog-categories',
            path: {
                'id': id,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }
    /**
     * Retrieve size guide for a catalog product
     * Returns information about the size guide for a specific product.
     * @param id Product ID.
     * @param unit A comma-separated list of measurement unit in which size tables are to be returned (`inches` or `cm`).
     * The default value is determined based on the locale country. The inches are used for United States, Liberia
     * and Myanmar, for other countries the unit defaults to centimeters.
     *
     * @returns any OK
     * @throws ApiError
     */
    public getProductSizeGuideById(
        id: number,
        unit?: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v2/catalog-products/{id}/sizes',
            path: {
                'id': id,
            },
            query: {
                'unit': unit,
            },
            errors: {
                404: `Not found`,
            },
        });
    }
    /**
     * Retrieve catalog product prices
     * Calculates prices for specific catalog product based on selling region and specified currency. Calculations also include Store discounts. Selling region is used to specify product production currency, that is the price that the product is natively manufactured in. Different selling regions might affect the overall price amount. Currency parameter is used only to define the currency that the prices will be displayed in.
     *
     * @param id Product ID.
     * @param sellingRegionName Specifies the region production currency that the product prices will be calculated in
     * @param currency The currency (3-letter code) used to determine currency in which the prices will be displayed. The store currency will be used by default. The format is compliant with ISO 4217 standard.
     * @returns any OK
     * @throws ApiError
     */
    public getProductPricesById(
        id: number,
        sellingRegionName?: string,
        currency?: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v2/catalog-products/{id}/prices',
            path: {
                'id': id,
            },
            query: {
                'selling_region_name': sellingRegionName,
                'currency': currency,
            },
            errors: {
                404: `Not found`,
            },
        });
    }
    /**
     * Retrieve pricing information for the catalog variant
     * Return pricing information from a single variant and the parent product
     * @param id Variant ID
     * @param sellingRegionName Specifies the region production currency that the product prices will be calculated in
     * @param currency The currency (3-letter code) used to determine currency in which the prices will be displayed. The store currency will be used by default. The format is compliant with ISO 4217 standard.
     * @returns any OK
     * @throws ApiError
     */
    public getVariantPricesById(
        id: number,
        sellingRegionName?: string,
        currency?: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v2/catalog-variants/{id}/prices',
            path: {
                'id': id,
            },
            query: {
                'selling_region_name': sellingRegionName,
                'currency': currency,
            },
            errors: {
                404: `Not found`,
            },
        });
    }
    /**
     * Retrieve blank images for a catalog product
     * This feature helps to fetch blank images for a catalog product. These blank images are always white and semi-transparent and can be colored by the user on the client-side as per the specified color in the `data.color` field. The endpoint allows filtering of the result based on the type of the mockup, the placement, and the color of the product.
     *
     * @param id Product ID.
     * @param mockupStyleIds Used to specify style of images For example:
     * * On the hanger
     * * On the Male/Female model
     * * Flat on the table
     * * etc.
     * Available mockup styles for catalog product can be found under _[Retrieve catalog product mockup styles](#operation/retrieveMockupStylesByProductId)_.
     *
     * @param colors String values separated by comma. You can specify multiple variant colors filters.
     * @param placement Filters result by specified placement
     * @returns any OK
     * @throws ApiError
     */
    public getProductImagesById(
        id: number,
        mockupStyleIds?: number,
        colors?: string,
        placement?: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v2/catalog-products/{id}/images',
            path: {
                'id': id,
            },
            query: {
                'mockup_style_ids': mockupStyleIds,
                'colors': colors,
                'placement': placement,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }
    /**
     * Retrieve blank images for a catalog variant
     * Returns images for a specified Variant.
     * @param id Variant ID
     * @param mockupStyleIds Used to specify style of images For example:
     * * On the hanger
     * * On the Male/Female model
     * * Flat on the table
     * * etc.
     * Available mockup styles for catalog product can be found under _[Retrieve catalog product mockup styles](#operation/retrieveMockupStylesByProductId)_.
     *
     * @param placement Filters result by specified placement
     * @returns any OK
     * @throws ApiError
     */
    public getVariantImagesById(
        id: number,
        mockupStyleIds?: number,
        placement?: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v2/catalog-variants/{id}/images',
            path: {
                'id': id,
            },
            query: {
                'mockup_style_ids': mockupStyleIds,
                'placement': placement,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }
    /**
     * Retrieve catalog product mockup styles
     * Returns information about available mockup styles for specified catalog product.
     *
     * @param id Product ID.
     * @param placements One or more placement idenitifiers used to filter in mockup styles that match a given placement. The complete list of placements can be found [here](https://developers.printful.com/docs/#section/Placements).
     * @param sellingRegionName Only returns the products that can be sold in the specified region.
     * @param offset Result set offset
     * @param limit Number of items per page (max 100)
     * @returns any OK
     * @throws ApiError
     */
    public retrieveMockupStylesByProductId(
        id: number,
        placements?: Array<string>,
        sellingRegionName: 'worldwide' | 'north_america' | 'canada' | 'europe' | 'spain' | 'latvia' | 'uk' | 'france' | 'australia' | 'japan' | 'new_zealand' | 'italy' | 'brazil' | 'southeast_asia' | 'republic_of_korea' | 'english_speaking_regions' = 'worldwide',
        offset?: number,
        limit?: number,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v2/catalog-products/{id}/mockup-styles',
            path: {
                'id': id,
            },
            query: {
                'placements': placements,
                'selling_region_name': sellingRegionName,
                'offset': offset,
                'limit': limit,
            },
            errors: {
                401: `Unauthorized`,
                404: `Not found`,
            },
        });
    }
    /**
     * Retrieve catalog product mockup templates
     * Returns positional data for specified catalog product mockups. The data from this endpoint could be used
     * to generate your own mockups without the need to use Printful's mockup generator.
     * ![Mockup template](images/mockups/mockup_template.png)
     *
     * @param id Product ID.
     * @param placements One or more identifiers of a placement to return only products with variants that have that placement. The complete list of placements can be found [here](https://developers.printful.com/docs/#section/Placements).
     * @param sellingRegionName Only returns the products that can be sold in the specified region.
     * @param limit The number of results to return per page.
     * @param offset The number of results to not include in the response starting from the beginning of the list.
     *
     * This can be used to return results after the initial 100. For example, sending offset 100
     *
     * @returns any OK
     * @throws ApiError
     */
    public getMockupTemplatesByProductId(
        id: number,
        placements?: Array<string>,
        sellingRegionName: 'worldwide' | 'north_america' | 'canada' | 'europe' | 'spain' | 'latvia' | 'uk' | 'france' | 'australia' | 'japan' | 'new_zealand' | 'italy' | 'brazil' | 'southeast_asia' | 'republic_of_korea' | 'english_speaking_regions' = 'worldwide',
        limit: number = 20,
        offset?: number,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v2/catalog-products/{id}/mockup-templates',
            path: {
                'id': id,
            },
            query: {
                'placements': placements,
                'selling_region_name': sellingRegionName,
                'limit': limit,
                'offset': offset,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }
    /**
     * Retrieve catalog product stock availability
     * Provides information about the catalog product stock status. Stock availability is grouped by variants &rarr; techniques &rarr; selling regions.
     *
     * @param id Product ID.
     * @param techniques One or more techniques to return only products with variants that can be printed using one of the techniques.
     * @param sellingRegionName Only returns the products that can be sold in the specified region.
     * @param limit The number of results to return per page.
     * @param offset The number of results to not include in the response starting from the beginning of the list.
     *
     * This can be used to return results after the initial 100. For example, sending offset 100
     *
     * @returns any OK
     * @throws ApiError
     */
    public getProductStockAvailabilityById(
        id: number,
        techniques?: Array<TechniqueEnum>,
        sellingRegionName: 'worldwide' | 'north_america' | 'canada' | 'europe' | 'spain' | 'latvia' | 'uk' | 'france' | 'australia' | 'japan' | 'new_zealand' | 'italy' | 'brazil' | 'southeast_asia' | 'republic_of_korea' | 'english_speaking_regions' = 'worldwide',
        limit: number = 20,
        offset?: number,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v2/catalog-products/{id}/availability',
            path: {
                'id': id,
            },
            query: {
                'techniques': techniques,
                'selling_region_name': sellingRegionName,
                'limit': limit,
                'offset': offset,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not found`,
            },
        });
    }
    /**
     * Retrieve catalog variant stock availability
     * Provides information about the catalog variant stock status. Stock availability is grouped by variants &rarr; techniques &rarr; selling regions.
     *
     * @param id Variant ID
     * @param techniques One or more techniques to return only products with variants that can be printed using one of the techniques.
     * @param sellingRegionName Only returns the products that can be sold in the specified region.
     * @returns any OK
     * @throws ApiError
     */
    public getVariantStockAvailabilityById(
        id: number,
        techniques?: Array<TechniqueEnum>,
        sellingRegionName: 'worldwide' | 'north_america' | 'canada' | 'europe' | 'spain' | 'latvia' | 'uk' | 'france' | 'australia' | 'japan' | 'new_zealand' | 'italy' | 'brazil' | 'southeast_asia' | 'republic_of_korea' | 'english_speaking_regions' = 'worldwide',
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v2/catalog-variants/{id}/availability',
            path: {
                'id': id,
            },
            query: {
                'techniques': techniques,
                'selling_region_name': sellingRegionName,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not found`,
            },
        });
    }
}
