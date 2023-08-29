import { beforeEach, describe, it } from 'mocha';
import Router from './router';
import { expect } from 'chai';

function createEntity<T extends { new (...args: ConstructorParameters<T>): InstanceType<T> }>(
    _class: T,
    args: ConstructorParameters<T>,
) {
    return new _class(...args);
}

describe('Router', () => {
    let router: Router;
    beforeEach(() => {
        router = new Router('#app');
    });
    it('should be', () => {
        router.go('/a');
        expect(global.window.history.length).to.eq(2);
    });
});
