import { beforeEach, describe, it } from 'mocha';
import Router from './router';
import { expect } from 'chai';

// function createEntity<T extends { new (...args: ConstructorParameters<T>): InstanceType<T> }>(
//     _class: T,
//     args: ConstructorParameters<T>,
// ) {
//     return new _class(...args);
// }

describe('Router', () => {
    let router: Router;

    beforeEach(() => {
        router = new Router('#app');
    });

    it('window history length should be 2 after one redirect after initializing the router', () => {
        router.go('/test');
        expect(window.history.length).to.eq(2);
    });

    it(
        'new router instance should ' +
            'refer to the same router that was created for the first time (singleton)',
        () => {
            const newRouter = new Router('#app');
            expect(newRouter).to.eq(router);
        },
    );

    it('method "back" should not change the length of window history', () => {
        const historyLength = window.history.length;
        router.back();
        expect(window.history.length).to.eq(historyLength);
    });

    it('method "forward" should not change the length of window history', () => {
        const historyLength = window.history.length;
        router.forward();
        expect(window.history.length).to.eq(historyLength);
    });

    it(
        'after redirecting to a certain pathname using the router, ' +
            'window location pathname must change to the same one',
        () => {
            const pathname = '/bababui';
            router.go(pathname);
            expect(window.location.pathname).to.eq(pathname);
        },
    );
});
