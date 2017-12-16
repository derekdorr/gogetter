/* global window */

/**
 * Returns window, global, or object if exists (in that order);
 *
 * @module win
 * @func
 * @since 1.0.0
 * @return {Window|Object}
 */

import {
    STR_UNDEFINED,
} from 'permanent';
import {
    equals,
    ternary,
} from 'skald';

const equalsStringUndefined = equals(STR_UNDEFINED);

const win = () => ternary(
    () => window,
    () => ternary(
        () => global,
        {},
        equalsStringUndefined(typeof global),
    ),
    equalsStringUndefined(typeof window),
);

export default win;
