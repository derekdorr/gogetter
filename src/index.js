import {
    NULL,
    STR_METHOD_DELETE,
    STR_METHOD_GET,
    STR_METHOD_POST,
    STR_METHOD_PUT,
} from 'permanent';
import {
    defaultTo,
    toObject,
} from 'skald';
import XHR from './xhr';

const defaultTo3000 = defaultTo(3000);
const defaultToNull = defaultTo(NULL);

/**
 * Exposes GoGetter request methods
 *
 * @namespace GoGetter
 * @class
 * @classdesc The GoGetter class exposes methods for GET, POST, PUT, DELETE
 * @hideconstructor
 * @since 1.0.0
 */

class GoGetter {
    constructor(method) {
        return new XHR(method);
    }

    /**
     * @func get
     * @memberOf GoGetter
     * @static
     * @param {string} uri
     * @param {Object} options
     * @return {Promise}
     */
    static get(uri, options) {
        const { timeout } = toObject(options);
        return new XHR(STR_METHOD_GET)
            .uri(uri)
            .timeout(defaultTo3000(timeout))
            .send();
    }

    /**
     * @func post
     * @memberOf GoGetter
     * @static
     * @param {string} uri
     * @param {Object|string} body
     * @param {Object} options
     * @return {Promise}
     */
    static post(uri, body, options) {
        const { timeout } = toObject(options);
        return new XHR(STR_METHOD_POST)
            .uri(uri)
            .body(defaultToNull(body))
            .timeout(defaultTo3000(timeout))
            .send();
    }

    /**
     * @func put
     * @memberOf GoGetter
     * @static
     * @param {string} uri
     * @param {Object|string} body
     * @param {Object} options
     * @return {Promise}
     */
    static put(uri, body, options) {
        const { timeout } = toObject(options);
        return new XHR(STR_METHOD_PUT)
            .uri(uri)
            .body(defaultToNull(body))
            .timeout(defaultTo3000(timeout))
            .send();
    }

    /**
     * @func delete
     * @memberOf GoGetter
     * @static
     * @param {string} uri
     * @param {Object} options
     * @return {Promise}
     */
    static delete(uri, options) {
        const { timeout } = toObject(options);
        return new XHR(STR_METHOD_DELETE)
            .uri(uri)
            .timeout(defaultTo3000(timeout))
            .send();
    }
}

export default GoGetter;
