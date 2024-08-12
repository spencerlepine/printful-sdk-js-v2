/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * This parameter only is used if sort_type is also present and it changes the order of the returned products.
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
 */
export enum SortDirection {
    ASCENDING = 'ascending',
    DESCENDING = 'descending',
}
