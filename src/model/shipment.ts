/**
 * API Documentation v2 | Printful
 * # About the Printful API  <div class=\"alert alert-info\">     <h3>Welcome to API v2 BETA</h3>      <ul>         <li>            We’re excited to inform you that the new major version of our API just went live, and we want to invite you to participate in the Open Beta test.              Please keep in mind that this release is still in BETA, although all presented endpoints can be used in a production environment.              Since this is a BETA release, we are keen on adopting any changes to our API (which we encourage you to pass via <a href=\"https://forms.gle/Yq4t1poQQR8Mwoyt5\">this feedback form</a>).             We do not expect to introduce any breaking changes to the current form of endpoints, although the final form of each endpoint might slightly vary from the current version.         </li>     </ul> </div> <br>  * **What is the plan for the new endpoints V2s.**  * **How to use new endpoints?**     Create or use an already created private token for authorization.      Unless it\'s stated otherwise, the v2 version of Printful API may be used like the v1 version.     All v2 endpoints use **_/v2** prefix and the specifics of each endpoint are explained in a dedicated section.     * **Test and provide feedback:** Explore the new features, experiment with the enhancements, and share your feedback through our dedicated [feedback form](https://forms.gle/Yq4t1poQQR8Mwoyt5).  ### What is new in the V2s  - The flexibility of order creation with itemized order building [(read more)](#tag/Orders-v2). - Simplifying embroidery orders: auto thread color detection as default, simplified thread colors definition on the layer level. - New, powerful design creation with multiple design layers support and positioning for order items and sync variants [(read more)](#tag/Orders-v2). - New, more secure Webhooks by enforcing HTTPS, added expiration date, and request signing. - More flexibility in webhook per event configuration.  - New webhook events – a new event for catalog price change, and the stock update event is now real-time with a refresh rate every 5 minutes (previously every 24h). - More information in the Catalog about the products (images, discounted pricing, placement information). - More flexibility in the catalog (extensive filtering and sorting options, DSR support, pagination). - More information on the order shipment level – more precise EDT, departure country, and shipment tracking events. - Standardization of returned time in API – standardized format according to ISO 8601, UTC time zone. - Standardization of returned price formats in API. Prices are displayed as a string with up to 2 decimal points. - Uniform pagination parameters across all endpoints. - Performance improvements for all endpoints.
 *
 * The version of the OpenAPI document: 2.0.0-beta
 * Contact: devsupport@printful.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { ShipmentDepartureAddress } from './shipmentDepartureAddress';
import { ShipmentEstimatedDelivery } from './shipmentEstimatedDelivery';
import { ShipmentItem } from './shipmentItem';
import { ShipmentLinks } from './shipmentLinks';
import { TrackingEvent } from './trackingEvent';

export class Shipment {
    'id'?: number;
    'orderId'?: number;
    'orderExternalId'?: string | null;
    /**
    * The carrier that will fulfill the shipment.
    */
    'carrier'?: string | null;
    /**
    * The service being used to fulfill the shipment.
    */
    'service'?: string | null;
    'shipmentStatus'?: Shipment.ShipmentStatusEnum;
    'shippedAt'?: Date | null;
    'deliveryStatus'?: Shipment.DeliveryStatusEnum;
    'deliveredAt'?: Date | null;
    'departureAddress'?: ShipmentDepartureAddress;
    /**
    * If there is an issue with items in a shipment, a reshipment might be necessary. This property will be false if it is the original shipment and true if it is a reshipment
    */
    'isReshipment'?: boolean;
    'trackingUrl'?: string;
    'trackingEvents'?: Array<TrackingEvent>;
    'estimatedDelivery'?: ShipmentEstimatedDelivery | null;
    'shipmentItems'?: Array<ShipmentItem>;
    'links'?: ShipmentLinks;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "orderId",
            "baseName": "order_id",
            "type": "number"
        },
        {
            "name": "orderExternalId",
            "baseName": "order_external_id",
            "type": "string"
        },
        {
            "name": "carrier",
            "baseName": "carrier",
            "type": "string"
        },
        {
            "name": "service",
            "baseName": "service",
            "type": "string"
        },
        {
            "name": "shipmentStatus",
            "baseName": "shipment_status",
            "type": "Shipment.ShipmentStatusEnum"
        },
        {
            "name": "shippedAt",
            "baseName": "shipped_at",
            "type": "Date"
        },
        {
            "name": "deliveryStatus",
            "baseName": "delivery_status",
            "type": "Shipment.DeliveryStatusEnum"
        },
        {
            "name": "deliveredAt",
            "baseName": "delivered_at",
            "type": "Date"
        },
        {
            "name": "departureAddress",
            "baseName": "departure_address",
            "type": "ShipmentDepartureAddress"
        },
        {
            "name": "isReshipment",
            "baseName": "is_reshipment",
            "type": "boolean"
        },
        {
            "name": "trackingUrl",
            "baseName": "tracking_url",
            "type": "string"
        },
        {
            "name": "trackingEvents",
            "baseName": "tracking_events",
            "type": "Array<TrackingEvent>"
        },
        {
            "name": "estimatedDelivery",
            "baseName": "estimated_delivery",
            "type": "ShipmentEstimatedDelivery"
        },
        {
            "name": "shipmentItems",
            "baseName": "shipment_items",
            "type": "Array<ShipmentItem>"
        },
        {
            "name": "links",
            "baseName": "_links",
            "type": "ShipmentLinks"
        }    ];

    static getAttributeTypeMap() {
        return Shipment.attributeTypeMap;
    }
}

export namespace Shipment {
    export enum ShipmentStatusEnum {
        Pending = <any> 'pending',
        Onhold = <any> 'onhold',
        Canceled = <any> 'canceled',
        Packaged = <any> 'packaged',
        Shipped = <any> 'shipped',
        Returned = <any> 'returned',
        Outstock = <any> 'outstock'
    }
    export enum DeliveryStatusEnum {
        Unknown = <any> 'unknown',
        Delivered = <any> 'delivered',
        PreTransit = <any> 'pre_transit',
        InTransit = <any> 'in_transit',
        OutForDelivery = <any> 'out_for_delivery',
        AvailableForPickup = <any> 'available_for_pickup',
        ReturnToSender = <any> 'return_to_sender',
        Failure = <any> 'failure',
        Canceled = <any> 'canceled'
    }
}