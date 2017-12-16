/**
 * Manages XHRs
 *
 * @namespace XHR
 * @class
 * @classdesc Generate an XHR of type GET, POST, PUT, DELETE
 * @since 1.0.0
 * @param {string} method
 */
import {
    INT_ZERO,
    STR_METHOD_DELETE,
    STR_METHOD_GET,
    STR_METHOD_POST,
    STR_METHOD_PUT,
} from 'permanent';
import {
    and,
    compose,
    defaultTo,
    gt,
    includes,
    isNull,
    isString,
    noop,
    notEquals,
    or,
    ternary,
    toNumber,
    toString,
} from 'skald';
import win from './win';

const STR_LOAD = 'load';
const STR_ERROR = 'error';
const STR_ERROR_MESSAGE = 'Request Error';
const defaultToNoop = defaultTo(noop);
const defaultToGET = defaultTo(STR_METHOD_GET);
const stringifyMethod = compose(defaultToGET, toString);
const allowedMethods = [STR_METHOD_DELETE, STR_METHOD_GET, STR_METHOD_POST, STR_METHOD_PUT];
const isMethodAllowed = method => includes(method, allowedMethods);
const failsToGET = ternary(STR_METHOD_GET);
const sanitizeMethod = method => {
    const sanitized = stringifyMethod(method).toUpperCase();
    const isSanitizedAllowed = isMethodAllowed(sanitized);
    return failsToGET(sanitized, isSanitizedAllowed);
};
const lessThan400 = gt(400);
const notEqualsZero = notEquals(INT_ZERO);
const { XMLHttpRequest: winXHR } = win();
const XMLHttpRequest = defaultToNoop(winXHR);
const parseJson = data => {
    try {
        return JSON.parse(data.toString());
    } catch (e) {
        return data;
    }
};

class XHR {
    constructor(method) {
        this._request = new XMLHttpRequest();
        this._method = sanitizeMethod(method);
        this._uri = null;
        this._body = null;
        this._timeout = 3000;
    }

    /**
     * Update body for request
     *
     * @func
     * @memberOf XHR
     * @param {Object|string} message
     * @return {XHR}
     */
    body(message) {
        this._body = ternary(
            () => JSON.stringify(message),
            message,
            or(isString(message), isNull(message)),
        );
        return this;
    }

    /**
     * Update uri for request
     *
     * @func
     * @memberOf XHR
     * @param {string} url
     * @return {XHR}
     */
    uri(url) {
        this._uri = toString(url);
        return this;
    }

    /**
     * Update timeout for request
     *
     * @func
     * @memberOf XHR
     * @param {number} time
     * @return {XHR}
     */
    timeout(time) {
        this._timeout = toNumber(time);
        return this;
    }

    /**
     * Make XHR request
     *
     * @func
     * @memberOf XHR
     * @return {Promise}
     */
    send() {
        return new Promise((resolve, reject) => {
            const request = this._request;
            const onError = () => {
                const { responseText, status, statusText } = request;
                const rejection = new Error(STR_ERROR_MESSAGE);
                rejection.code = status;
                rejection.status = statusText;
                rejection.body = parseJson(responseText);
                reject(rejection);
            };
            const onLoad = () => {
                const { status, responseText } = request;
                return ternary(
                    onError,
                    () => resolve(parseJson(responseText)),
                    and(lessThan400(status), notEqualsZero(status)),
                );
            };
            request.addEventListener(STR_LOAD, onLoad);
            request.addEventListener(STR_ERROR, onError);
            request.timeout = this._timeout;
            request.open(this._method, this._uri);
            request.send(this._body);
        });
    }
}

export default XHR;
