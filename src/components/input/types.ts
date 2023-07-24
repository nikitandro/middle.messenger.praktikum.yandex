import { IBlockPropsAndAttrs } from '../block/types.ts';

export type IInputProps = {
    placeholder?: string;
    type: IInputType;
    name: string;
}

export type IInputPropsAndAttrs = IBlockPropsAndAttrs<IInputProps>;


export type IInputType =
    'text'
    | 'password'
    | 'checkbox'
    | 'radio'
    | 'submit'
    | 'reset'
    | 'image'
    | 'hidden'
    | 'file'
    | 'datetime-local'
    | 'email';
