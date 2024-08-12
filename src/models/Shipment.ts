/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ShipmentItem } from './ShipmentItem';
import type { TrackingEvent } from './TrackingEvent';
export type Shipment = {
    id?: number;
    order_id?: number;
    order_external_id?: string | null;
    /**
     * The carrier that will fulfill the shipment.
     */
    carrier?: string | null;
    /**
     * The service being used to fulfill the shipment.
     */
    service?: string | null;
    shipment_status?: Shipment.shipment_status;
    shipped_at?: string | null;
    delivery_status?: Shipment.delivery_status;
    delivered_at?: string | null;
    departure_address?: {
        country_name?: string;
        country_code?: string;
        state_code?: string;
    };
    /**
     * If there is an issue with items in a shipment, a reshipment might be necessary. This property will be false if it is the original shipment and true if it is a reshipment
     */
    is_reshipment?: boolean;
    tracking_url?: string;
    tracking_events?: Array<TrackingEvent>;
    estimated_delivery?: {
        /**
         * Earliest estimated date the shipment will arrive
         */
        from_date?: string;
        /**
         * Latest estimated date the shipment will arrive
         */
        to_date?: string;
        calculated_at?: string;
    } | null;
    shipment_items?: Array<ShipmentItem>;
    _links?: {
        self?: {
            href?: string;
        };
        order?: {
            href?: string;
        };
    };
};
export namespace Shipment {
    export enum shipment_status {
        PENDING = 'pending',
        ONHOLD = 'onhold',
        CANCELED = 'canceled',
        PACKAGED = 'packaged',
        SHIPPED = 'shipped',
        RETURNED = 'returned',
        OUTSTOCK = 'outstock',
    }
    export enum delivery_status {
        UNKNOWN = 'unknown',
        DELIVERED = 'delivered',
        PRE_TRANSIT = 'pre_transit',
        IN_TRANSIT = 'in_transit',
        OUT_FOR_DELIVERY = 'out_for_delivery',
        AVAILABLE_FOR_PICKUP = 'available_for_pickup',
        RETURN_TO_SENDER = 'return_to_sender',
        FAILURE = 'failure',
        CANCELED = 'canceled',
    }
}

