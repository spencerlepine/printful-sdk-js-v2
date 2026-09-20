/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Approval sheet status:<br />
 * **waiting_for_action** - Approval sheet requires user action e.g. `Approval` or `Request changes`.<br />
 * **approval_pending** - Intermediate status between `waiting_for_action` and `approved`. Happens when user has approved the approval sheet but the approval was not yet processed.<br />
 * **approved** - The approval sheet has been approved.<br />
 * **changes_requested** - User has requested minor changes to the approval sheet.<br />
 * **files_changed** - Happens when the original design file was replaced e.g. user has changed the design. In that case the approval sheet is no longer relevant.<br />
 * **withdrawn** - The order hold status has been lifted and the corresponding approval sheet got removed.<br />
 * **replaced** - The approval sheet got replaced with the new suggestions.<br />
 * **refused** - The changes to the approval sheet from the user got rejected by the customer support. Such case requires a complete design change by the user.<br />
 *
 */
export type ApprovalSheetStatuses = string;
