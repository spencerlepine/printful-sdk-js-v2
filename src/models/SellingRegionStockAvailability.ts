/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type SellingRegionStockAvailability = {
    /**
     * Name of the selling region for which the stock availability apply
     */
    name?: SellingRegionStockAvailability.name;
    /**
     * Availability status:
     * * in stock: Product with the specified technique is stocked in this region
     * * out of stock: Product with the specified technique is not stocked in this region
     * * not fulfillable: Printful does not stock this product in this region
     * * unknown: The exact stock status could not be determined
     *
     */
    availability?: SellingRegionStockAvailability.availability;
    /**
     * Availability of a placement options for a catalog variant in a specified selling region. If a placement option is present in this array and availability is set to true it means it is available for this product. If it is set to false it means that the placement option is available for the variant, but not currently fulfillable for the given selling region settings. If an option is not present in the array but is present as an option on the product (see: [Retrieve a single catalog product](#tag/Catalog-v2/operation/getProducts)) it means the option is always available for that product.
     *
     */
    placement_option_availability?: Array<{
        name?: string;
        availability?: boolean;
    }>;
};
export namespace SellingRegionStockAvailability {
    /**
     * Name of the selling region for which the stock availability apply
     */
    export enum name {
        WORLDWIDE = 'worldwide',
        NORTH_AMERICA = 'north_america',
        CANADA = 'canada',
        EUROPE = 'europe',
        SPAIN = 'spain',
        LATVIA = 'latvia',
        UK = 'uk',
        FRANCE = 'france',
        AUSTRALIA = 'australia',
        JAPAN = 'japan',
        NEW_ZEALAND = 'new_zealand',
        ITALY = 'italy',
        BRAZIL = 'brazil',
        SOUTHEAST_ASIA = 'southeast_asia',
        REPUBLIC_OF_KOREA = 'republic_of_korea',
        ENGLISH_SPEAKING_REGIONS = 'english_speaking_regions',
    }
    /**
     * Availability status:
     * * in stock: Product with the specified technique is stocked in this region
     * * out of stock: Product with the specified technique is not stocked in this region
     * * not fulfillable: Printful does not stock this product in this region
     * * unknown: The exact stock status could not be determined
     *
     */
    export enum availability {
        IN_STOCK = 'in stock',
        OUT_OF_STOCK = 'out of stock',
        NOT_FULFILLABLE = 'not fulfillable',
        UNKNOWN = 'unknown',
    }
}

