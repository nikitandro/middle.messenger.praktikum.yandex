import { expect, use } from 'chai';
import { describe, it, afterEach } from 'mocha';
import * as sinonChai from 'sinon-chai';
import { SinonStub, createSandbox } from 'sinon';
import HTTPTransport from './HTTPTransport';
import { METHODS } from './types';

describe('HTTP Transport', () => {
    use(sinonChai);
    const sandbox = createSandbox();
    let http: HTTPTransport;
    let request: SinonStub<any>;

    beforeEach(() => {
        http = new HTTPTransport({});
        request = sandbox.stub(http, 'request').callsFake(() => Promise.resolve() as Promise<any>);
    });

    afterEach(() => {
        sandbox.restore();
    });

    it('GET method should pass request options correctly', () => {
        const requestOptions = { queryData: { a: 1, b: 2 }, timeout: 5000 };

        http.get('', requestOptions);
        expect(request.args[0]).to.be.deep.eq([
            '',
            { ...requestOptions, method: METHODS.GET },
            5000,
        ]);
    });

    it('POST method should pass request options correctly', () => {
        const requestOptions = { data: JSON.stringify({ a: 1, b: 2 }), timeout: 5000 };

        http.post('', requestOptions);
        expect(request.args[0]).to.be.deep.eq([
            '',
            { ...requestOptions, method: METHODS.POST },
            5000,
        ]);
    });

    it('PUT method should pass request options correctly', () => {
        const requestOptions = { data: JSON.stringify({ a: 1, b: 2 }), timeout: 5000 };

        http.put('', requestOptions);
        expect(request.args[0]).to.be.deep.eq([
            '',
            { ...requestOptions, method: METHODS.PUT },
            5000,
        ]);
    });

    it('DELETE method should pass request options correctly', () => {
        const requestOptions = { data: JSON.stringify({ a: 1, b: 2 }), timeout: 5000 };

        http.delete('', requestOptions);
        expect(request.args[0]).to.be.deep.eq([
            '',
            { ...requestOptions, method: METHODS.DELETE },
            5000,
        ]);
    });
});
