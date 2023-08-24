import { IBlockInputParams } from '../block/types';

export type ChatMenuProps = {
    onAddUserButtonClick?: (event: MouseEvent) => void;
    onDeleteUserButtonClick?: (event: MouseEvent) => void;
    onDeleteChatButtonClick?: (event: MouseEvent) => void;
};

export type ChatMenuInputParams = IBlockInputParams<ChatMenuProps>;
