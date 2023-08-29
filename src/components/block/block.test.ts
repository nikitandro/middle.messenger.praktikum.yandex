import { expect } from 'chai';
import Block from './';
import { beforeEach, describe, it } from 'mocha';

describe('Block', () => {
    let block: Block;
    beforeEach(() => {
        block = new Block();
    });

    it('must set and store the props', () => {
        block.setProps({
            props: {
                test: 'test',
            },
        });
        expect(block._props).to.have.property('test', 'test');
    });
});
