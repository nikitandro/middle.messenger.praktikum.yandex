import Link from '../../components/link';

export type IErrorPageProps = {
    statusCode: number;
    comment: string;
    link: Link;
};

export type IErrorPageInputParams = {
    statusCode: number;
    comment: string;
    linkText: string;
    linkTo: string;
};
