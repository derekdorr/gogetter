import test from 'tape';
import GoGetter from '../src';

test('GoGetter - GET 200', t => {
    GoGetter.get('http://localhost/api/json').then(res => {
        t.equal(res.a, 1, 'res.a === 1');
        t.equal(res.b, 2, 'res.b === 2');
        t.end();
    });
});

test('GoGetter - GET 500', t => {
    GoGetter.get('http://localhost/api/error').catch(err => {
        t.equal(err.code, 500, 'Error code is 500');
        t.equal(err.body, '500 ERROR', 'Error body is correct');
        t.end();
    });
});

test('GoGetter - POST 200', t => {
    GoGetter.post('http://localhost/api/post', { c: 3, d: 4 }).then(res => {
        t.equal(res.body.c, 3, 'res.body.c is 3');
        t.equal(res.body.d, 4, 'res.body.d is 4');
        t.end();
    });
});

test('GoGetter - PUT 200', t => {
    GoGetter.put('http://localhost/api/put', { c: 4, d: 5 }).then(res => {
        t.equal(res.c, 4, 'res.c is 4');
        t.equal(res.d, 5, 'res.d is 5');
        t.end();
    });
});

test('GoGetter - DELETE 200', t => {
    GoGetter.delete('http://localhost/api/delete').then(res => {
        t.equal(res, '', 'res is empty string');
        t.end();
    });
});

test('GoGetter - Generic Request', t => {
    const request = new GoGetter('GET');
    t.equal(request._method, 'GET', 'Request method is correct');
    t.end();
});
