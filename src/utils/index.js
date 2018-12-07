/**
 * FEATURE: re-exporting
 * Use index.js as gathering function for several other files
 *
 * Alltogether exposes:
 * {
 *   util1,
 *   util2,
 *   util3,
 * }
 */
export { default as util1 } from './util1'
export * from './moreUtils'


