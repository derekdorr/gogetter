import mock from 'xhr-mock';

mock.setup();

mock.get('http://localhost/api/string', (req, res) => res
    .status(200)
    .header('Content-Type', 'text/html')
    .body('<html><head></head><body></body></html>'));

mock.get('http://localhost/api/json', (req, res) => res
    .status(200)
    .header('Content-Type', 'application/json')
    .body(JSON.stringify({ a: 1, b: 2 })));

mock.post('http://localhost/api/post', (req, res) => res
    .status(200)
    .header('Content-Type', 'application/json')
    .body(req._body));

mock.get('http://localhost/api/error', (req, res) => res
    .status(500)
    .header('Content-Type', 'text/html')
    .body('500 ERROR'));

mock.get('http://localhost/api/notfound', (req, res) => res
    .status(404)
    .header('Content-Type', 'text/html')
    .body('404 ERROR'));

mock.post('http://localhost/api/error', (req, res) => res
    .status(500)
    .header('Content-Type', 'text/html')
    .body('500 Error'));

mock.put('http://localhost/api/put', (req, res) => res
    .status(200)
    .header('Content-Type', 'application/json')
    .body(req._body));

mock.delete('http://localhost/api/delete', (req, res) => res
    .status(201)
    .header('Content-Type', 'text/plain')
    .body(''));
