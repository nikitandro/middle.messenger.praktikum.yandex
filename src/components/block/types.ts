import Block from './';

export enum BlockLifeCycleEvents {
    INIT = 'init',
    FLOW_CDM = 'flow:component-did-mount',
    FLOW_CDU = 'flow:component-did-update',
    FLOW_RENDER = 'flow:render',
}

export type IBlockMetaData = {
    tagName: keyof HTMLElementTagNameMap;
    props: object;
    children: Record<string, Block<any>>;
}
