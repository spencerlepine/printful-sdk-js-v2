/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ApprovalSheetStatuses } from './ApprovalSheetStatuses';
import type { HateoasLink } from './HateoasLink';
/**
 * Approval sheet
 */
export type ApprovalSheet = {
    /**
     * Confirmation hash value.
     */
    confirm_hash: string;
    /**
     * Common identifier used to group all approval sheets that relate to the same design.
     */
    group_hash: string;
    status: ApprovalSheetStatuses;
    /**
     * URL to submitted design.
     */
    submitted_design: string;
    /**
     * URL to recommended design.
     */
    recommended_design: string;
    /**
     * URL to Approval sheet.
     */
    approval_sheet: string;
    /**
     * Link to the PDF version of approval sheet that can be programmatically downloaded.
     */
    pdf_download_url?: string;
    /**
     * Order ID.
     */
    order_id: number;
    /**
     * Item ID.
     */
    order_item_id: number;
    /**
     * Placement of the design on the product.
     */
    placement?: string;
    /**
     * Human readable label of the placement.
     */
    placement_label?: string;
    /**
     * Name of the product the design is placed on, including the variant.
     */
    product_name?: string;
    /**
     * URL to an image of the product.
     */
    product_image_url?: string;
    /**
     * Name of the product variant's color.
     */
    variant_color?: string;
    /**
     * Hex code of the product variant's color.
     */
    variant_color_code?: string;
    /**
     * URL to the original artwork submitted by the customer.
     */
    original_artwork_url?: string;
    /**
     * Thread colors recommended for the design, grouped by placement-specific thread color option.
     */
    thread_colors?: Array<Record<string, Array<string>>>;
    /**
     * Recommended rotation, in degrees, to apply to the design.
     */
    recommended_design_rotation?: string;
    /**
     * Additional details for advanced embroidery placements. Null if not applicable.
     */
    advanced_embroidery_details?: {
        /**
         * Comment left by the digitiser.
         */
        digitiser_comment?: string;
        /**
         * URLs to additional design files.
         */
        additional_design_urls?: Array<string>;
        /**
         * Whether the design uses unlimited thread colors.
         */
        is_unlimited_color?: boolean;
    } | null;
    /**
     * Number of other approval sheets for the same design that are still waiting for action.
     */
    related_pending_approval_sheet_count?: number;
    /**
     * Time when the approval sheet was created.
     */
    created_at?: string;
    /**
     * Time when the approval sheet was last updated.
     */
    updated_at?: string;
    /**
     * List of issues detected with the submitted design.
     */
    issues?: Array<{
        /**
         * Issue code.
         */
        code?: number;
        /**
         * Topic the issue relates to.
         */
        topic?: string;
        /**
         * Description of the issue.
         */
        description?: string;
    }>;
    /**
     * Recommended option changes for the item. May be returned as null when there are no recommended changes.
     */
    recommended_options?: Record<string, any>;
    /**
     * Options selected for the order item, such as thread colors used for embroidery. Additional placement-specific thread color options (e.g. "thread_colors_<placement>", "text_thread_colors_<placement>") may be present depending on the product's placements.
     */
    item_options?: Record<string, Array<string>>;
    /**
     * HATEOAS links
     */
    _links: {
        order: HateoasLink;
        order_item: HateoasLink;
        approval_sheets?: HateoasLink;
    };
};

