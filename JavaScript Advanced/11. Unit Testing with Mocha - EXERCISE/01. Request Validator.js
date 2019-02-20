function errHand(obj) {
    let validMethod = ['GET', 'POST', 'DELETE', 'CONNECT'];
    let validUri = /^[a-zA-Z0-9.]+$/g;
    let validVersion = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    let validMessage = /^[^<>\\&'"]*$/g;

    if (!obj.hasOwnProperty('method') || !validMethod.includes(obj.method))
        throwE('Method');

    if (!obj.hasOwnProperty('uri') || !validUri.test(obj.uri))
        throwE('URI');

    if (!obj.hasOwnProperty('version') || !validVersion.includes(obj.version))
        throwE('Version');

    if (!obj.hasOwnProperty('message') || !validMessage.test(obj.message))
        throwE('Message');

    return obj;

    function throwE(e) {
        throw new Error(`Invalid request header: Invalid ${e}`);
    }
}