/**
 * IMPORTANT: Encapsulate all styles into components itself. As components are modular too, we do not need to
 * make styles there modular too! This would only have the drawback that we might get styling bugs when changing it
 * for a components.
 *
 * Therefore, only place really universal variables here but not one single class or id!
 * E.g. Colors might be a good choice, everything else should be discussed!
 *
 * Please be aware that no or an empty typescript-declaration file might be generated for this stylesheet as it should not contain
 * any classes or other explicit definitions (only variables).
 */

/** Primary color of application */
export const primaryColor = "#0275d8"
export const primaryBackgroundColor = "#fff"

/** E.g. used by nav bar. */
export const secondaryColor = primaryBackgroundColor
export const secondaryBackgroundColor = primaryColor

/** E.g. used by tab bar. */
export const inactiveColor = "#333"
export const inactiveBackgroundColor = "#999"
