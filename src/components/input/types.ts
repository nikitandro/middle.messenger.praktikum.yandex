import { IBlockInputParams } from '../block/types.ts';
export type IInputInputParams = IBlockInputParams;

export type IInputType =
    | 'text'
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
