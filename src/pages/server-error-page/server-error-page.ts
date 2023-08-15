import NoAsideLayout from '../../layouts/no-aside-layout';
import ErrorPage from '../error-page';

export default class ServerErrorPage extends NoAsideLayout {
    constructor() {
        super({
            props: {
                page: new ErrorPage({
                    props: {
                        statusCode: 500,
                        comment: 'Мы уже фиксим',
                        linkTo: '/',
                        linkText: 'Назад к чатам',
                    },
                }),
            },
        });
    }
}
