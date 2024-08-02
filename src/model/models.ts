import localVarRequest from 'request';

export * from './additionalPlacements';
export * from './address';
export * from './approvalSheetWebhookFile';
export * from './availabilityStatus';
export * from './baseMockupProduct';
export * from './calculateShppingRates200Response';
export * from './calculateShppingRates200ResponseDataInner';
export * from './calculateShppingRates400Response';
export * from './calculateShppingRatesRequest';
export * from './calculateShppingRatesRequestOrderItemsInner';
export * from './calculationStatus';
export * from './catalogItem';
export * from './catalogItemSummary';
export * from './catalogItemSummaryLinks';
export * from './catalogItemSummaryLinksSelf';
export * from './catalogMockupProduct';
export * from './catalogOption';
export * from './catalogShippingRateItem';
export * from './catalogStockUpdatedEventConfigurationRequest';
export * from './catalogStockUpdatedEventConfigurationRequestAllOfParams';
export * from './category';
export * from './categoryLinks';
export * from './confirmOrder200Response';
export * from './confirmOrder200ResponseLinks';
export * from './costs';
export * from './country';
export * from './createMockupGeneratorTasks200Response';
export * from './createMockupGeneratorTasks200ResponseLinks';
export * from './createOrder200Response';
export * from './createOrderRequest';
export * from './createOrderRequestOrderItemsInner';
export * from './createOrderRequestRetailCosts';
export * from './createWebhook200Response';
export * from './createWebhookRequest';
export * from './customBorderColorOption';
export * from './customization';
export * from './defaultEventConfigurationRequest';
export * from './deleteOrder409Response';
export * from './deleteOrder409ResponseError';
export * from './designPlacement';
export * from './designPlacementLayersInner';
export * from './errorSource';
export * from './eventConfigurationRequest';
export * from './eventConfigurationResponse';
export * from './eventParam';
export * from './fileLayer';
export * from './fileOptionPrices';
export * from './filterSettingsInner';
export * from './getCategories200Response';
export * from './getCategories200ResponseLinks';
export * from './getCategoriesByProductId200Response';
export * from './getCategoriesByProductId200ResponseLinks';
export * from './getCategoryById200Response';
export * from './getCategoryById200ResponseLinks';
export * from './getCountries200Response';
export * from './getCountries200ResponseLinks';
export * from './getInvoiceByOrderId200Response';
export * from './getInvoiceByOrderId200ResponseData';
export * from './getInvoiceByOrderId200ResponseDataLinks';
export * from './getInvoiceByOrderId200ResponseDataLinksSelf';
export * from './getItemById200Response';
export * from './getItemById200ResponseLinks';
export * from './getItemById200ResponseLinksAllItems';
export * from './getItemById200ResponseLinksOrder';
export * from './getItemById200ResponseLinksSelf';
export * from './getItemById200ResponseLinksShipments';
export * from './getItemsByOrderId200Response';
export * from './getItemsByOrderId200ResponseDataInner';
export * from './getItemsByOrderId200ResponseLinks';
export * from './getItemsByOrderId200ResponseLinksOrder';
export * from './getMockupGeneratorTasks200Response';
export * from './getMockupGeneratorTasks200ResponseLinks';
export * from './getMockupTemplatesByProductId200Response';
export * from './getMockupTemplatesByProductId200ResponseLinks';
export * from './getOAuthScopes200Response';
export * from './getOAuthScopes200ResponseLinks';
export * from './getOAuthScopes401Response';
export * from './getOAuthScopes401ResponseError';
export * from './getOrderOrderIdParameter';
export * from './getOrders200Response';
export * from './getOrders200ResponseLinks';
export * from './getProductById200Response';
export * from './getProductImagesById200Response';
export * from './getProductImagesById200ResponseLinks';
export * from './getProductImagesById200ResponseLinksProductDetails';
export * from './getProductPricesById200Response';
export * from './getProductPricesById200ResponseLinks';
export * from './getProductSizeGuideById200Response';
export * from './getProductSizeGuideById200ResponseLinks';
export * from './getProductSizeGuideById404Response';
export * from './getProductSizeGuideById404ResponseError';
export * from './getProductStockAvailabilityById200Response';
export * from './getProductStockAvailabilityById200ResponseLinks';
export * from './getProductStockAvailabilityById400Response';
export * from './getProductStockAvailabilityById400ResponseError';
export * from './getProductStockAvailabilityById403Response';
export * from './getProductStockAvailabilityById403ResponseError';
export * from './getProductVariantsById200Response';
export * from './getProductVariantsById200ResponseLinks';
export * from './getProducts200Response';
export * from './getShipments200Response';
export * from './getShipments200ResponseLinks';
export * from './getShipments200ResponseLinksNext';
export * from './getShipments200ResponseLinksSelf';
export * from './getVariantById200Response';
export * from './getVariantById200ResponseLinks';
export * from './getVariantImagesById200Response';
export * from './getVariantImagesById200ResponseLinks';
export * from './getVariantImagesById200ResponseLinksSelf';
export * from './getVariantImagesById200ResponseLinksVariantDetails';
export * from './getVariantPricesById200Response';
export * from './getVariantPricesById200ResponseLinks';
export * from './getVariantStockAvailabilityById200Response';
export * from './getVariantStockAvailabilityById200ResponseLinks';
export * from './getWebhookEventConfiguration200Response';
export * from './getWebhooks200Response';
export * from './gift';
export * from './hateoasLink';
export * from './hateoasLink2';
export * from './headerSource';
export * from './insideLabelTypeOption';
export * from './insidePocketOption';
export * from './item';
export * from './itemLinks';
export * from './itemLinksSelf';
export * from './itemWithoutPlacements';
export * from './itemWithoutPlacementsLinks';
export * from './itemWithoutPlacementsLinksSelf';
export * from './layer';
export * from './layerOptionPrices';
export * from './layerOptionsInner';
export * from './layerPosition';
export * from './layers';
export * from './lifelikeOption';
export * from './measurement';
export * from './measurementValue';
export * from './mockup';
export * from './mockupGeneratorTask';
export * from './mockupGeneratorTaskCatalogVariantMockupsInner';
export * from './mockupGeneratorTaskLinks';
export * from './mockupProduct';
export * from './mockupStyles';
export * from './mockupStylesMockupStylesInner';
export * from './mockupTaskCreation';
export * from './mockupTemplates';
export * from './model3dPuffOption';
export * from './modelError';
export * from './notesOption';
export * from './oAuthScope';
export * from './order';
export * from './orderLinks';
export * from './orderSummary';
export * from './orderSummaryLinks';
export * from './orderSummaryOrderItemsInner';
export * from './packingSlip';
export * from './paging';
export * from './parameterSource';
export * from './placement';
export * from './placementOptionsInner';
export * from './pointerSource';
export * from './problemDetails';
export * from './product';
export * from './productColorsInner';
export * from './productData';
export * from './productInfo';
export * from './productLinks';
export * from './productOptionsInner';
export * from './productPlacementsInner';
export * from './productPrices';
export * from './productPricesProduct';
export * from './productSizeGuide';
export * from './productsLinks';
export * from './productsParam';
export * from './response200';
export * from './retailCosts';
export * from './retrieveMockupStylesByProductId200Response';
export * from './retrieveMockupStylesByProductId200ResponseLinks';
export * from './retrieveMockupStylesByProductId401Response';
export * from './retrieveMockupStylesByProductId401ResponseError';
export * from './retrieveMockupStylesByProductId404Response';
export * from './sellingRegionStockAvailability';
export * from './sellingRegionStockAvailabilityPlacementOptionAvailabilityInner';
export * from './serverErrorDetails';
export * from './shipment';
export * from './shipmentDepartureAddress';
export * from './shipmentEstimatedDelivery';
export * from './shipmentItem';
export * from './shipmentItemLinks';
export * from './shipmentItemLinksOrderItem';
export * from './shipmentLinks';
export * from './shipmentLinksOrder';
export * from './shipmentLinksSelf';
export * from './shippingRatesAddress';
export * from './sizeTable';
export * from './state';
export * from './stitchColorOption';
export * from './techniqueEnum';
export * from './techniqueStockAvailability';
export * from './techniques';
export * from './templateMockupProduct';
export * from './threadColorsOption';
export * from './trackingEvent';
export * from './unlimitedColorOption';
export * from './updateOrderRequest';
export * from './variant';
export * from './variantImage';
export * from './variantImages';
export * from './variantLinks';
export * from './variantPrices';
export * from './variantPricesProduct';
export * from './variantStockAvailability';
export * from './variantStockAvailabilityLinks';
export * from './variantTechniquePrice';
export * from './variantsPriceData';
export * from './warehouseItem';
export * from './warehouseItemSummary';
export * from './warehouseShippingRateItem';
export * from './webhook';
export * from './webhookCreated';
export * from './webhookInfoRequest';
export * from './webhookInfoResponse';
export * from './webhookOrderData';
export * from './webhookShipmentData';

import * as fs from 'fs';

export interface RequestDetailedFile {
    value: Buffer;
    options?: {
        filename?: string;
        contentType?: string;
    }
}

export type RequestFile = string | Buffer | fs.ReadStream | RequestDetailedFile;


import { AdditionalPlacements } from './additionalPlacements';
import { Address } from './address';
import { ApprovalSheetWebhookFile } from './approvalSheetWebhookFile';
import { AvailabilityStatus } from './availabilityStatus';
import { BaseMockupProduct } from './baseMockupProduct';
import { CalculateShppingRates200Response } from './calculateShppingRates200Response';
import { CalculateShppingRates200ResponseDataInner } from './calculateShppingRates200ResponseDataInner';
import { CalculateShppingRates400Response } from './calculateShppingRates400Response';
import { CalculateShppingRatesRequest } from './calculateShppingRatesRequest';
import { CalculateShppingRatesRequestOrderItemsInner } from './calculateShppingRatesRequestOrderItemsInner';
import { CalculationStatus } from './calculationStatus';
import { CatalogItem } from './catalogItem';
import { CatalogItemSummary } from './catalogItemSummary';
import { CatalogItemSummaryLinks } from './catalogItemSummaryLinks';
import { CatalogItemSummaryLinksSelf } from './catalogItemSummaryLinksSelf';
import { CatalogMockupProduct } from './catalogMockupProduct';
import { CatalogOption } from './catalogOption';
import { CatalogShippingRateItem } from './catalogShippingRateItem';
import { CatalogStockUpdatedEventConfigurationRequest } from './catalogStockUpdatedEventConfigurationRequest';
import { CatalogStockUpdatedEventConfigurationRequestAllOfParams } from './catalogStockUpdatedEventConfigurationRequestAllOfParams';
import { Category } from './category';
import { CategoryLinks } from './categoryLinks';
import { ConfirmOrder200Response } from './confirmOrder200Response';
import { ConfirmOrder200ResponseLinks } from './confirmOrder200ResponseLinks';
import { Costs } from './costs';
import { Country } from './country';
import { CreateMockupGeneratorTasks200Response } from './createMockupGeneratorTasks200Response';
import { CreateMockupGeneratorTasks200ResponseLinks } from './createMockupGeneratorTasks200ResponseLinks';
import { CreateOrder200Response } from './createOrder200Response';
import { CreateOrderRequest } from './createOrderRequest';
import { CreateOrderRequestOrderItemsInner } from './createOrderRequestOrderItemsInner';
import { CreateOrderRequestRetailCosts } from './createOrderRequestRetailCosts';
import { CreateWebhook200Response } from './createWebhook200Response';
import { CreateWebhookRequest } from './createWebhookRequest';
import { CustomBorderColorOption } from './customBorderColorOption';
import { Customization } from './customization';
import { DefaultEventConfigurationRequest } from './defaultEventConfigurationRequest';
import { DeleteOrder409Response } from './deleteOrder409Response';
import { DeleteOrder409ResponseError } from './deleteOrder409ResponseError';
import { DesignPlacement } from './designPlacement';
import { DesignPlacementLayersInner } from './designPlacementLayersInner';
import { ErrorSource } from './errorSource';
import { EventConfigurationRequest } from './eventConfigurationRequest';
import { EventConfigurationResponse } from './eventConfigurationResponse';
import { EventParam } from './eventParam';
import { FileLayer } from './fileLayer';
import { FileOptionPrices } from './fileOptionPrices';
import { FilterSettingsInner } from './filterSettingsInner';
import { GetCategories200Response } from './getCategories200Response';
import { GetCategories200ResponseLinks } from './getCategories200ResponseLinks';
import { GetCategoriesByProductId200Response } from './getCategoriesByProductId200Response';
import { GetCategoriesByProductId200ResponseLinks } from './getCategoriesByProductId200ResponseLinks';
import { GetCategoryById200Response } from './getCategoryById200Response';
import { GetCategoryById200ResponseLinks } from './getCategoryById200ResponseLinks';
import { GetCountries200Response } from './getCountries200Response';
import { GetCountries200ResponseLinks } from './getCountries200ResponseLinks';
import { GetInvoiceByOrderId200Response } from './getInvoiceByOrderId200Response';
import { GetInvoiceByOrderId200ResponseData } from './getInvoiceByOrderId200ResponseData';
import { GetInvoiceByOrderId200ResponseDataLinks } from './getInvoiceByOrderId200ResponseDataLinks';
import { GetInvoiceByOrderId200ResponseDataLinksSelf } from './getInvoiceByOrderId200ResponseDataLinksSelf';
import { GetItemById200Response } from './getItemById200Response';
import { GetItemById200ResponseLinks } from './getItemById200ResponseLinks';
import { GetItemById200ResponseLinksAllItems } from './getItemById200ResponseLinksAllItems';
import { GetItemById200ResponseLinksOrder } from './getItemById200ResponseLinksOrder';
import { GetItemById200ResponseLinksSelf } from './getItemById200ResponseLinksSelf';
import { GetItemById200ResponseLinksShipments } from './getItemById200ResponseLinksShipments';
import { GetItemsByOrderId200Response } from './getItemsByOrderId200Response';
import { GetItemsByOrderId200ResponseDataInner } from './getItemsByOrderId200ResponseDataInner';
import { GetItemsByOrderId200ResponseLinks } from './getItemsByOrderId200ResponseLinks';
import { GetItemsByOrderId200ResponseLinksOrder } from './getItemsByOrderId200ResponseLinksOrder';
import { GetMockupGeneratorTasks200Response } from './getMockupGeneratorTasks200Response';
import { GetMockupGeneratorTasks200ResponseLinks } from './getMockupGeneratorTasks200ResponseLinks';
import { GetMockupTemplatesByProductId200Response } from './getMockupTemplatesByProductId200Response';
import { GetMockupTemplatesByProductId200ResponseLinks } from './getMockupTemplatesByProductId200ResponseLinks';
import { GetOAuthScopes200Response } from './getOAuthScopes200Response';
import { GetOAuthScopes200ResponseLinks } from './getOAuthScopes200ResponseLinks';
import { GetOAuthScopes401Response } from './getOAuthScopes401Response';
import { GetOAuthScopes401ResponseError } from './getOAuthScopes401ResponseError';
import { GetOrderOrderIdParameter } from './getOrderOrderIdParameter';
import { GetOrders200Response } from './getOrders200Response';
import { GetOrders200ResponseLinks } from './getOrders200ResponseLinks';
import { GetProductById200Response } from './getProductById200Response';
import { GetProductImagesById200Response } from './getProductImagesById200Response';
import { GetProductImagesById200ResponseLinks } from './getProductImagesById200ResponseLinks';
import { GetProductImagesById200ResponseLinksProductDetails } from './getProductImagesById200ResponseLinksProductDetails';
import { GetProductPricesById200Response } from './getProductPricesById200Response';
import { GetProductPricesById200ResponseLinks } from './getProductPricesById200ResponseLinks';
import { GetProductSizeGuideById200Response } from './getProductSizeGuideById200Response';
import { GetProductSizeGuideById200ResponseLinks } from './getProductSizeGuideById200ResponseLinks';
import { GetProductSizeGuideById404Response } from './getProductSizeGuideById404Response';
import { GetProductSizeGuideById404ResponseError } from './getProductSizeGuideById404ResponseError';
import { GetProductStockAvailabilityById200Response } from './getProductStockAvailabilityById200Response';
import { GetProductStockAvailabilityById200ResponseLinks } from './getProductStockAvailabilityById200ResponseLinks';
import { GetProductStockAvailabilityById400Response } from './getProductStockAvailabilityById400Response';
import { GetProductStockAvailabilityById400ResponseError } from './getProductStockAvailabilityById400ResponseError';
import { GetProductStockAvailabilityById403Response } from './getProductStockAvailabilityById403Response';
import { GetProductStockAvailabilityById403ResponseError } from './getProductStockAvailabilityById403ResponseError';
import { GetProductVariantsById200Response } from './getProductVariantsById200Response';
import { GetProductVariantsById200ResponseLinks } from './getProductVariantsById200ResponseLinks';
import { GetProducts200Response } from './getProducts200Response';
import { GetShipments200Response } from './getShipments200Response';
import { GetShipments200ResponseLinks } from './getShipments200ResponseLinks';
import { GetShipments200ResponseLinksNext } from './getShipments200ResponseLinksNext';
import { GetShipments200ResponseLinksSelf } from './getShipments200ResponseLinksSelf';
import { GetVariantById200Response } from './getVariantById200Response';
import { GetVariantById200ResponseLinks } from './getVariantById200ResponseLinks';
import { GetVariantImagesById200Response } from './getVariantImagesById200Response';
import { GetVariantImagesById200ResponseLinks } from './getVariantImagesById200ResponseLinks';
import { GetVariantImagesById200ResponseLinksSelf } from './getVariantImagesById200ResponseLinksSelf';
import { GetVariantImagesById200ResponseLinksVariantDetails } from './getVariantImagesById200ResponseLinksVariantDetails';
import { GetVariantPricesById200Response } from './getVariantPricesById200Response';
import { GetVariantPricesById200ResponseLinks } from './getVariantPricesById200ResponseLinks';
import { GetVariantStockAvailabilityById200Response } from './getVariantStockAvailabilityById200Response';
import { GetVariantStockAvailabilityById200ResponseLinks } from './getVariantStockAvailabilityById200ResponseLinks';
import { GetWebhookEventConfiguration200Response } from './getWebhookEventConfiguration200Response';
import { GetWebhooks200Response } from './getWebhooks200Response';
import { Gift } from './gift';
import { HateoasLink } from './hateoasLink';
import { HateoasLink2 } from './hateoasLink2';
import { HeaderSource } from './headerSource';
import { InsideLabelTypeOption } from './insideLabelTypeOption';
import { InsidePocketOption } from './insidePocketOption';
import { Item } from './item';
import { ItemLinks } from './itemLinks';
import { ItemLinksSelf } from './itemLinksSelf';
import { ItemWithoutPlacements } from './itemWithoutPlacements';
import { ItemWithoutPlacementsLinks } from './itemWithoutPlacementsLinks';
import { ItemWithoutPlacementsLinksSelf } from './itemWithoutPlacementsLinksSelf';
import { Layer } from './layer';
import { LayerOptionPrices } from './layerOptionPrices';
import { LayerOptionsInner } from './layerOptionsInner';
import { LayerPosition } from './layerPosition';
import { Layers } from './layers';
import { LifelikeOption } from './lifelikeOption';
import { Measurement } from './measurement';
import { MeasurementValue } from './measurementValue';
import { Mockup } from './mockup';
import { MockupGeneratorTask } from './mockupGeneratorTask';
import { MockupGeneratorTaskCatalogVariantMockupsInner } from './mockupGeneratorTaskCatalogVariantMockupsInner';
import { MockupGeneratorTaskLinks } from './mockupGeneratorTaskLinks';
import { MockupProduct } from './mockupProduct';
import { MockupStyles } from './mockupStyles';
import { MockupStylesMockupStylesInner } from './mockupStylesMockupStylesInner';
import { MockupTaskCreation } from './mockupTaskCreation';
import { MockupTemplates } from './mockupTemplates';
import { Model3dPuffOption } from './model3dPuffOption';
import { ModelError } from './modelError';
import { NotesOption } from './notesOption';
import { OAuthScope } from './oAuthScope';
import { Order } from './order';
import { OrderLinks } from './orderLinks';
import { OrderSummary } from './orderSummary';
import { OrderSummaryLinks } from './orderSummaryLinks';
import { OrderSummaryOrderItemsInner } from './orderSummaryOrderItemsInner';
import { PackingSlip } from './packingSlip';
import { Paging } from './paging';
import { ParameterSource } from './parameterSource';
import { Placement } from './placement';
import { PlacementOptionsInner } from './placementOptionsInner';
import { PointerSource } from './pointerSource';
import { ProblemDetails } from './problemDetails';
import { Product } from './product';
import { ProductColorsInner } from './productColorsInner';
import { ProductData } from './productData';
import { ProductInfo } from './productInfo';
import { ProductLinks } from './productLinks';
import { ProductOptionsInner } from './productOptionsInner';
import { ProductPlacementsInner } from './productPlacementsInner';
import { ProductPrices } from './productPrices';
import { ProductPricesProduct } from './productPricesProduct';
import { ProductSizeGuide } from './productSizeGuide';
import { ProductsLinks } from './productsLinks';
import { ProductsParam } from './productsParam';
import { Response200 } from './response200';
import { RetailCosts } from './retailCosts';
import { RetrieveMockupStylesByProductId200Response } from './retrieveMockupStylesByProductId200Response';
import { RetrieveMockupStylesByProductId200ResponseLinks } from './retrieveMockupStylesByProductId200ResponseLinks';
import { RetrieveMockupStylesByProductId401Response } from './retrieveMockupStylesByProductId401Response';
import { RetrieveMockupStylesByProductId401ResponseError } from './retrieveMockupStylesByProductId401ResponseError';
import { RetrieveMockupStylesByProductId404Response } from './retrieveMockupStylesByProductId404Response';
import { SellingRegionStockAvailability } from './sellingRegionStockAvailability';
import { SellingRegionStockAvailabilityPlacementOptionAvailabilityInner } from './sellingRegionStockAvailabilityPlacementOptionAvailabilityInner';
import { ServerErrorDetails } from './serverErrorDetails';
import { Shipment } from './shipment';
import { ShipmentDepartureAddress } from './shipmentDepartureAddress';
import { ShipmentEstimatedDelivery } from './shipmentEstimatedDelivery';
import { ShipmentItem } from './shipmentItem';
import { ShipmentItemLinks } from './shipmentItemLinks';
import { ShipmentItemLinksOrderItem } from './shipmentItemLinksOrderItem';
import { ShipmentLinks } from './shipmentLinks';
import { ShipmentLinksOrder } from './shipmentLinksOrder';
import { ShipmentLinksSelf } from './shipmentLinksSelf';
import { ShippingRatesAddress } from './shippingRatesAddress';
import { SizeTable } from './sizeTable';
import { State } from './state';
import { StitchColorOption } from './stitchColorOption';
import { TechniqueEnum } from './techniqueEnum';
import { TechniqueStockAvailability } from './techniqueStockAvailability';
import { Techniques } from './techniques';
import { TemplateMockupProduct } from './templateMockupProduct';
import { ThreadColorsOption } from './threadColorsOption';
import { TrackingEvent } from './trackingEvent';
import { UnlimitedColorOption } from './unlimitedColorOption';
import { UpdateOrderRequest } from './updateOrderRequest';
import { Variant } from './variant';
import { VariantImage } from './variantImage';
import { VariantImages } from './variantImages';
import { VariantLinks } from './variantLinks';
import { VariantPrices } from './variantPrices';
import { VariantPricesProduct } from './variantPricesProduct';
import { VariantStockAvailability } from './variantStockAvailability';
import { VariantStockAvailabilityLinks } from './variantStockAvailabilityLinks';
import { VariantTechniquePrice } from './variantTechniquePrice';
import { VariantsPriceData } from './variantsPriceData';
import { WarehouseItem } from './warehouseItem';
import { WarehouseItemSummary } from './warehouseItemSummary';
import { WarehouseShippingRateItem } from './warehouseShippingRateItem';
import { Webhook } from './webhook';
import { WebhookCreated } from './webhookCreated';
import { WebhookInfoRequest } from './webhookInfoRequest';
import { WebhookInfoResponse } from './webhookInfoResponse';
import { WebhookOrderData } from './webhookOrderData';
import { WebhookShipmentData } from './webhookShipmentData';

/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];

let enumsMap: {[index: string]: any} = {
        "CalculateShppingRatesRequestOrderItemsInner.SourceEnum": CalculateShppingRatesRequestOrderItemsInner.SourceEnum,
        "CalculationStatus": CalculationStatus,
        "CatalogItem.SourceEnum": CatalogItem.SourceEnum,
        "CatalogItemSummary.TypeEnum": CatalogItemSummary.TypeEnum,
        "CatalogItemSummary.SourceEnum": CatalogItemSummary.SourceEnum,
        "CatalogMockupProduct.OrientationEnum": CatalogMockupProduct.OrientationEnum,
        "CatalogShippingRateItem.SourceEnum": CatalogShippingRateItem.SourceEnum,
        "CatalogStockUpdatedEventConfigurationRequestAllOfParams.NameEnum": CatalogStockUpdatedEventConfigurationRequestAllOfParams.NameEnum,
        "CreateOrderRequestOrderItemsInner.SourceEnum": CreateOrderRequestOrderItemsInner.SourceEnum,
        "CustomBorderColorOption.NameEnum": CustomBorderColorOption.NameEnum,
        "GetItemsByOrderId200ResponseDataInner.SourceEnum": GetItemsByOrderId200ResponseDataInner.SourceEnum,
        "InsideLabelTypeOption.NameEnum": InsideLabelTypeOption.NameEnum,
        "InsideLabelTypeOption.ValueEnum": InsideLabelTypeOption.ValueEnum,
        "InsidePocketOption.NameEnum": InsidePocketOption.NameEnum,
        "LayerOptionsInner.NameEnum": LayerOptionsInner.NameEnum,
        "LifelikeOption.NameEnum": LifelikeOption.NameEnum,
        "MockupGeneratorTask.StatusEnum": MockupGeneratorTask.StatusEnum,
        "MockupProduct.OrientationEnum": MockupProduct.OrientationEnum,
        "MockupTaskCreation.FormatEnum": MockupTaskCreation.FormatEnum,
        "MockupTemplates.TemplatePositioningEnum": MockupTemplates.TemplatePositioningEnum,
        "MockupTemplates.OrientationEnum": MockupTemplates.OrientationEnum,
        "Model3dPuffOption.NameEnum": Model3dPuffOption.NameEnum,
        "NotesOption.NameEnum": NotesOption.NameEnum,
        "OAuthScope.NameEnum": OAuthScope.NameEnum,
        "OAuthScope.ValueEnum": OAuthScope.ValueEnum,
        "OrderSummaryOrderItemsInner.TypeEnum": OrderSummaryOrderItemsInner.TypeEnum,
        "OrderSummaryOrderItemsInner.SourceEnum": OrderSummaryOrderItemsInner.SourceEnum,
        "Placement.StatusEnum": Placement.StatusEnum,
        "PlacementOptionsInner.NameEnum": PlacementOptionsInner.NameEnum,
        "PlacementOptionsInner.ValueEnum": PlacementOptionsInner.ValueEnum,
        "ProductOptionsInner.NameEnum": ProductOptionsInner.NameEnum,
        "ProductsParam.NameEnum": ProductsParam.NameEnum,
        "SellingRegionStockAvailability.NameEnum": SellingRegionStockAvailability.NameEnum,
        "SellingRegionStockAvailability.AvailabilityEnum": SellingRegionStockAvailability.AvailabilityEnum,
        "Shipment.ShipmentStatusEnum": Shipment.ShipmentStatusEnum,
        "Shipment.DeliveryStatusEnum": Shipment.DeliveryStatusEnum,
        "SizeTable.TypeEnum": SizeTable.TypeEnum,
        "SizeTable.UnitEnum": SizeTable.UnitEnum,
        "StitchColorOption.NameEnum": StitchColorOption.NameEnum,
        "TechniqueEnum": TechniqueEnum,
        "ThreadColorsOption.NameEnum": ThreadColorsOption.NameEnum,
        "UnlimitedColorOption.NameEnum": UnlimitedColorOption.NameEnum,
        "WarehouseItem.SourceEnum": WarehouseItem.SourceEnum,
        "WarehouseItemSummary.TypeEnum": WarehouseItemSummary.TypeEnum,
        "WarehouseItemSummary.SourceEnum": WarehouseItemSummary.SourceEnum,
        "WarehouseShippingRateItem.SourceEnum": WarehouseShippingRateItem.SourceEnum,
}

let typeMap: {[index: string]: any} = {
    "AdditionalPlacements": AdditionalPlacements,
    "Address": Address,
    "ApprovalSheetWebhookFile": ApprovalSheetWebhookFile,
    "AvailabilityStatus": AvailabilityStatus,
    "BaseMockupProduct": BaseMockupProduct,
    "CalculateShppingRates200Response": CalculateShppingRates200Response,
    "CalculateShppingRates200ResponseDataInner": CalculateShppingRates200ResponseDataInner,
    "CalculateShppingRates400Response": CalculateShppingRates400Response,
    "CalculateShppingRatesRequest": CalculateShppingRatesRequest,
    "CalculateShppingRatesRequestOrderItemsInner": CalculateShppingRatesRequestOrderItemsInner,
    "CatalogItem": CatalogItem,
    "CatalogItemSummary": CatalogItemSummary,
    "CatalogItemSummaryLinks": CatalogItemSummaryLinks,
    "CatalogItemSummaryLinksSelf": CatalogItemSummaryLinksSelf,
    "CatalogMockupProduct": CatalogMockupProduct,
    "CatalogOption": CatalogOption,
    "CatalogShippingRateItem": CatalogShippingRateItem,
    "CatalogStockUpdatedEventConfigurationRequest": CatalogStockUpdatedEventConfigurationRequest,
    "CatalogStockUpdatedEventConfigurationRequestAllOfParams": CatalogStockUpdatedEventConfigurationRequestAllOfParams,
    "Category": Category,
    "CategoryLinks": CategoryLinks,
    "ConfirmOrder200Response": ConfirmOrder200Response,
    "ConfirmOrder200ResponseLinks": ConfirmOrder200ResponseLinks,
    "Costs": Costs,
    "Country": Country,
    "CreateMockupGeneratorTasks200Response": CreateMockupGeneratorTasks200Response,
    "CreateMockupGeneratorTasks200ResponseLinks": CreateMockupGeneratorTasks200ResponseLinks,
    "CreateOrder200Response": CreateOrder200Response,
    "CreateOrderRequest": CreateOrderRequest,
    "CreateOrderRequestOrderItemsInner": CreateOrderRequestOrderItemsInner,
    "CreateOrderRequestRetailCosts": CreateOrderRequestRetailCosts,
    "CreateWebhook200Response": CreateWebhook200Response,
    "CreateWebhookRequest": CreateWebhookRequest,
    "CustomBorderColorOption": CustomBorderColorOption,
    "Customization": Customization,
    "DefaultEventConfigurationRequest": DefaultEventConfigurationRequest,
    "DeleteOrder409Response": DeleteOrder409Response,
    "DeleteOrder409ResponseError": DeleteOrder409ResponseError,
    "DesignPlacement": DesignPlacement,
    "DesignPlacementLayersInner": DesignPlacementLayersInner,
    "ErrorSource": ErrorSource,
    "EventConfigurationRequest": EventConfigurationRequest,
    "EventConfigurationResponse": EventConfigurationResponse,
    "EventParam": EventParam,
    "FileLayer": FileLayer,
    "FileOptionPrices": FileOptionPrices,
    "FilterSettingsInner": FilterSettingsInner,
    "GetCategories200Response": GetCategories200Response,
    "GetCategories200ResponseLinks": GetCategories200ResponseLinks,
    "GetCategoriesByProductId200Response": GetCategoriesByProductId200Response,
    "GetCategoriesByProductId200ResponseLinks": GetCategoriesByProductId200ResponseLinks,
    "GetCategoryById200Response": GetCategoryById200Response,
    "GetCategoryById200ResponseLinks": GetCategoryById200ResponseLinks,
    "GetCountries200Response": GetCountries200Response,
    "GetCountries200ResponseLinks": GetCountries200ResponseLinks,
    "GetInvoiceByOrderId200Response": GetInvoiceByOrderId200Response,
    "GetInvoiceByOrderId200ResponseData": GetInvoiceByOrderId200ResponseData,
    "GetInvoiceByOrderId200ResponseDataLinks": GetInvoiceByOrderId200ResponseDataLinks,
    "GetInvoiceByOrderId200ResponseDataLinksSelf": GetInvoiceByOrderId200ResponseDataLinksSelf,
    "GetItemById200Response": GetItemById200Response,
    "GetItemById200ResponseLinks": GetItemById200ResponseLinks,
    "GetItemById200ResponseLinksAllItems": GetItemById200ResponseLinksAllItems,
    "GetItemById200ResponseLinksOrder": GetItemById200ResponseLinksOrder,
    "GetItemById200ResponseLinksSelf": GetItemById200ResponseLinksSelf,
    "GetItemById200ResponseLinksShipments": GetItemById200ResponseLinksShipments,
    "GetItemsByOrderId200Response": GetItemsByOrderId200Response,
    "GetItemsByOrderId200ResponseDataInner": GetItemsByOrderId200ResponseDataInner,
    "GetItemsByOrderId200ResponseLinks": GetItemsByOrderId200ResponseLinks,
    "GetItemsByOrderId200ResponseLinksOrder": GetItemsByOrderId200ResponseLinksOrder,
    "GetMockupGeneratorTasks200Response": GetMockupGeneratorTasks200Response,
    "GetMockupGeneratorTasks200ResponseLinks": GetMockupGeneratorTasks200ResponseLinks,
    "GetMockupTemplatesByProductId200Response": GetMockupTemplatesByProductId200Response,
    "GetMockupTemplatesByProductId200ResponseLinks": GetMockupTemplatesByProductId200ResponseLinks,
    "GetOAuthScopes200Response": GetOAuthScopes200Response,
    "GetOAuthScopes200ResponseLinks": GetOAuthScopes200ResponseLinks,
    "GetOAuthScopes401Response": GetOAuthScopes401Response,
    "GetOAuthScopes401ResponseError": GetOAuthScopes401ResponseError,
    "GetOrderOrderIdParameter": GetOrderOrderIdParameter,
    "GetOrders200Response": GetOrders200Response,
    "GetOrders200ResponseLinks": GetOrders200ResponseLinks,
    "GetProductById200Response": GetProductById200Response,
    "GetProductImagesById200Response": GetProductImagesById200Response,
    "GetProductImagesById200ResponseLinks": GetProductImagesById200ResponseLinks,
    "GetProductImagesById200ResponseLinksProductDetails": GetProductImagesById200ResponseLinksProductDetails,
    "GetProductPricesById200Response": GetProductPricesById200Response,
    "GetProductPricesById200ResponseLinks": GetProductPricesById200ResponseLinks,
    "GetProductSizeGuideById200Response": GetProductSizeGuideById200Response,
    "GetProductSizeGuideById200ResponseLinks": GetProductSizeGuideById200ResponseLinks,
    "GetProductSizeGuideById404Response": GetProductSizeGuideById404Response,
    "GetProductSizeGuideById404ResponseError": GetProductSizeGuideById404ResponseError,
    "GetProductStockAvailabilityById200Response": GetProductStockAvailabilityById200Response,
    "GetProductStockAvailabilityById200ResponseLinks": GetProductStockAvailabilityById200ResponseLinks,
    "GetProductStockAvailabilityById400Response": GetProductStockAvailabilityById400Response,
    "GetProductStockAvailabilityById400ResponseError": GetProductStockAvailabilityById400ResponseError,
    "GetProductStockAvailabilityById403Response": GetProductStockAvailabilityById403Response,
    "GetProductStockAvailabilityById403ResponseError": GetProductStockAvailabilityById403ResponseError,
    "GetProductVariantsById200Response": GetProductVariantsById200Response,
    "GetProductVariantsById200ResponseLinks": GetProductVariantsById200ResponseLinks,
    "GetProducts200Response": GetProducts200Response,
    "GetShipments200Response": GetShipments200Response,
    "GetShipments200ResponseLinks": GetShipments200ResponseLinks,
    "GetShipments200ResponseLinksNext": GetShipments200ResponseLinksNext,
    "GetShipments200ResponseLinksSelf": GetShipments200ResponseLinksSelf,
    "GetVariantById200Response": GetVariantById200Response,
    "GetVariantById200ResponseLinks": GetVariantById200ResponseLinks,
    "GetVariantImagesById200Response": GetVariantImagesById200Response,
    "GetVariantImagesById200ResponseLinks": GetVariantImagesById200ResponseLinks,
    "GetVariantImagesById200ResponseLinksSelf": GetVariantImagesById200ResponseLinksSelf,
    "GetVariantImagesById200ResponseLinksVariantDetails": GetVariantImagesById200ResponseLinksVariantDetails,
    "GetVariantPricesById200Response": GetVariantPricesById200Response,
    "GetVariantPricesById200ResponseLinks": GetVariantPricesById200ResponseLinks,
    "GetVariantStockAvailabilityById200Response": GetVariantStockAvailabilityById200Response,
    "GetVariantStockAvailabilityById200ResponseLinks": GetVariantStockAvailabilityById200ResponseLinks,
    "GetWebhookEventConfiguration200Response": GetWebhookEventConfiguration200Response,
    "GetWebhooks200Response": GetWebhooks200Response,
    "Gift": Gift,
    "HateoasLink": HateoasLink,
    "HateoasLink2": HateoasLink2,
    "HeaderSource": HeaderSource,
    "InsideLabelTypeOption": InsideLabelTypeOption,
    "InsidePocketOption": InsidePocketOption,
    "Item": Item,
    "ItemLinks": ItemLinks,
    "ItemLinksSelf": ItemLinksSelf,
    "ItemWithoutPlacements": ItemWithoutPlacements,
    "ItemWithoutPlacementsLinks": ItemWithoutPlacementsLinks,
    "ItemWithoutPlacementsLinksSelf": ItemWithoutPlacementsLinksSelf,
    "Layer": Layer,
    "LayerOptionPrices": LayerOptionPrices,
    "LayerOptionsInner": LayerOptionsInner,
    "LayerPosition": LayerPosition,
    "Layers": Layers,
    "LifelikeOption": LifelikeOption,
    "Measurement": Measurement,
    "MeasurementValue": MeasurementValue,
    "Mockup": Mockup,
    "MockupGeneratorTask": MockupGeneratorTask,
    "MockupGeneratorTaskCatalogVariantMockupsInner": MockupGeneratorTaskCatalogVariantMockupsInner,
    "MockupGeneratorTaskLinks": MockupGeneratorTaskLinks,
    "MockupProduct": MockupProduct,
    "MockupStyles": MockupStyles,
    "MockupStylesMockupStylesInner": MockupStylesMockupStylesInner,
    "MockupTaskCreation": MockupTaskCreation,
    "MockupTemplates": MockupTemplates,
    "Model3dPuffOption": Model3dPuffOption,
    "ModelError": ModelError,
    "NotesOption": NotesOption,
    "OAuthScope": OAuthScope,
    "Order": Order,
    "OrderLinks": OrderLinks,
    "OrderSummary": OrderSummary,
    "OrderSummaryLinks": OrderSummaryLinks,
    "OrderSummaryOrderItemsInner": OrderSummaryOrderItemsInner,
    "PackingSlip": PackingSlip,
    "Paging": Paging,
    "ParameterSource": ParameterSource,
    "Placement": Placement,
    "PlacementOptionsInner": PlacementOptionsInner,
    "PointerSource": PointerSource,
    "ProblemDetails": ProblemDetails,
    "Product": Product,
    "ProductColorsInner": ProductColorsInner,
    "ProductData": ProductData,
    "ProductInfo": ProductInfo,
    "ProductLinks": ProductLinks,
    "ProductOptionsInner": ProductOptionsInner,
    "ProductPlacementsInner": ProductPlacementsInner,
    "ProductPrices": ProductPrices,
    "ProductPricesProduct": ProductPricesProduct,
    "ProductSizeGuide": ProductSizeGuide,
    "ProductsLinks": ProductsLinks,
    "ProductsParam": ProductsParam,
    "Response200": Response200,
    "RetailCosts": RetailCosts,
    "RetrieveMockupStylesByProductId200Response": RetrieveMockupStylesByProductId200Response,
    "RetrieveMockupStylesByProductId200ResponseLinks": RetrieveMockupStylesByProductId200ResponseLinks,
    "RetrieveMockupStylesByProductId401Response": RetrieveMockupStylesByProductId401Response,
    "RetrieveMockupStylesByProductId401ResponseError": RetrieveMockupStylesByProductId401ResponseError,
    "RetrieveMockupStylesByProductId404Response": RetrieveMockupStylesByProductId404Response,
    "SellingRegionStockAvailability": SellingRegionStockAvailability,
    "SellingRegionStockAvailabilityPlacementOptionAvailabilityInner": SellingRegionStockAvailabilityPlacementOptionAvailabilityInner,
    "ServerErrorDetails": ServerErrorDetails,
    "Shipment": Shipment,
    "ShipmentDepartureAddress": ShipmentDepartureAddress,
    "ShipmentEstimatedDelivery": ShipmentEstimatedDelivery,
    "ShipmentItem": ShipmentItem,
    "ShipmentItemLinks": ShipmentItemLinks,
    "ShipmentItemLinksOrderItem": ShipmentItemLinksOrderItem,
    "ShipmentLinks": ShipmentLinks,
    "ShipmentLinksOrder": ShipmentLinksOrder,
    "ShipmentLinksSelf": ShipmentLinksSelf,
    "ShippingRatesAddress": ShippingRatesAddress,
    "SizeTable": SizeTable,
    "State": State,
    "StitchColorOption": StitchColorOption,
    "TechniqueStockAvailability": TechniqueStockAvailability,
    "Techniques": Techniques,
    "TemplateMockupProduct": TemplateMockupProduct,
    "ThreadColorsOption": ThreadColorsOption,
    "TrackingEvent": TrackingEvent,
    "UnlimitedColorOption": UnlimitedColorOption,
    "UpdateOrderRequest": UpdateOrderRequest,
    "Variant": Variant,
    "VariantImage": VariantImage,
    "VariantImages": VariantImages,
    "VariantLinks": VariantLinks,
    "VariantPrices": VariantPrices,
    "VariantPricesProduct": VariantPricesProduct,
    "VariantStockAvailability": VariantStockAvailability,
    "VariantStockAvailabilityLinks": VariantStockAvailabilityLinks,
    "VariantTechniquePrice": VariantTechniquePrice,
    "VariantsPriceData": VariantsPriceData,
    "WarehouseItem": WarehouseItem,
    "WarehouseItemSummary": WarehouseItemSummary,
    "WarehouseShippingRateItem": WarehouseShippingRateItem,
    "Webhook": Webhook,
    "WebhookCreated": WebhookCreated,
    "WebhookInfoRequest": WebhookInfoRequest,
    "WebhookInfoResponse": WebhookInfoResponse,
    "WebhookOrderData": WebhookOrderData,
    "WebhookShipmentData": WebhookShipmentData,
}

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap[expectedType]) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if(typeMap[discriminatorType]){
                        return discriminatorType; // use the type given in the discriminator
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string) {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.serialize(datum, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return data.toISOString();
        } else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }

            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.deserialize(datum, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap[type]) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type);
            }
            return instance;
        }
    }
}

export interface Authentication {
    /**
    * Apply authentication settings to header and query params.
    */
    applyToRequest(requestOptions: localVarRequest.Options): Promise<void> | void;
}

export class HttpBasicAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        requestOptions.auth = {
            username: this.username, password: this.password
        }
    }
}

export class HttpBearerAuth implements Authentication {
    public accessToken: string | (() => string) = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            const accessToken = typeof this.accessToken === 'function'
                            ? this.accessToken()
                            : this.accessToken;
            requestOptions.headers["Authorization"] = "Bearer " + accessToken;
        }
    }
}

export class ApiKeyAuth implements Authentication {
    public apiKey: string = '';

    constructor(private location: string, private paramName: string) {
    }

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (this.location == "query") {
            (<any>requestOptions.qs)[this.paramName] = this.apiKey;
        } else if (this.location == "header" && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        } else if (this.location == 'cookie' && requestOptions && requestOptions.headers) {
            if (requestOptions.headers['Cookie']) {
                requestOptions.headers['Cookie'] += '; ' + this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
            else {
                requestOptions.headers['Cookie'] = this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
        }
    }
}

export class OAuth implements Authentication {
    public accessToken: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
        }
    }
}

export class VoidAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(_: localVarRequest.Options): void {
        // Do nothing
    }
}

export type Interceptor = (requestOptions: localVarRequest.Options) => (Promise<void> | void);
