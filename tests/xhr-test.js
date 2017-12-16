import test from 'tape';
import XHR from '../src/xhr';

test('Tests - xhr.js - GET 200 String', t => {
    const request = new XHR('GET');
    t.equal(request._method, 'GET', 'Method is get');
    t.equal(request._timeout, 3000, 'Timeout defaults to 3000 milliseconds');
    t.equal(request._uri, null, 'uri is null');
    t.equal(request._body, null, 'body is null');

    request.timeout(5000);
    t.equal(request._timeout, 5000, 'Timeout is now 5000');

    request.body('');
    t.equal(request._body, '', 'Body is now empty string');

    request.uri('http://localhost/api/string');
    t.equal(request._uri, 'http://localhost/api/string', 'uri is now string');

    request.send().then(res => {
        t.equal(res, '<html><head></head><body></body></html>');
        t.end();
    });
});

test('Tests - xhr.js - GET 200 JSON', t => {
    const request = new XHR('GET');
    request.uri('http://localhost/api/json');
    request.send().then(res => {
        t.equal(res.a, 1, 'res.a === 1');
        t.equal(res.b, 2, 'res.b === 2');
        t.end();
    });
});

test('Tests - xhr.js - GET 500', t => {
    const request = new XHR('GET');
    request.uri('http://localhost/api/error');
    request.send().catch(err => {
        t.equal(err.message, 'Request Error', 'Correct error message');
        t.equal(err.code, 500, 'Correct status code is 500');
        t.end();
    });
});

test('Tests - xhr.js - GET 404', t => {
    const request = new XHR('GET');
    request.uri('http://localhost/api/notfound');
    request.send().catch(err => {
        t.equal(err.message, 'Request Error', 'Correct error message');
        t.equal(err.code, 404, 'Correct status code is 404');
        t.equal(err.body, '404 ERROR', 'Correct body - 404 Error');
        t.end();
    });
});

test('Tests - xhr.js - POST 200 Object', t => {
    const request = new XHR('POST');
    request
        .uri('http://localhost/api/post')
        .body({ foo: 'bar' });
    request.send().then(res => {
        t.equal(res.foo, 'bar', 'POST received JSON body');
        t.end();
    });
});

test('Tests - xhr.js - POST Error', t => {
    const request = new XHR('POST');
    request
        .uri('http://localhost/api/error')
        .body({ foo: 'bar' });
    request.send().catch(err => {
        t.equal(err.message, 'Request Error', 'Correct error message');
        t.equal(err.code, 500, 'Correct status code is 500');
        t.equal(err.body, '500 Error', 'Body is correct -- 500 Error');
        t.end();
    });
});

test('Tests - Allowed Methods', t => {
    const request1 = new XHR('get');
    const request2 = new XHR('post');
    const request3 = new XHR('put');
    const request4 = new XHR('delete');
    const request5 = new XHR('patch');

    t.equal(request1._method, 'GET', 'get is GET');
    t.equal(request2._method, 'POST', 'post is POST');
    t.equal(request3._method, 'PUT', 'put is PUT');
    t.equal(request4._method, 'DELETE', 'delete is delete');
    t.equal(request5._method, 'GET', 'patch is not allowed, becomes GET');
    t.end();
});
