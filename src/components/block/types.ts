export enum BlockLifeCycleEvents {
    INIT = 'init',
    FLOW_CDM = 'flow:component-did-mount',
    FLOW_CDU = 'flow:component-did-update',
    FLOW_RENDER = 'flow:render',
}

export type IBlockMetaData = {
    tagName: keyof HTMLElementTagNameMap;
    props?: object;
    children?: object;
    attrs?: object;
    events?: IBlockEvents;
};

export type IBlockAttributes = Record<string, string | number | boolean>;

export type IBlockInputParams<
    TProps extends Record<string, unknown> = Record<string, unknown>,
    TAttrs extends IBlockAttributes = IBlockAttributes,
> = {
    props?: TProps;
    attrs?: TAttrs;
    events?: IBlockEvents;
};

export type IBlockEvents = {
    [K in keyof HTMLElementEventMap]?: (event: HTMLElementEventMap[K]) => void;
} & Record<string, unknown>;
