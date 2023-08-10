import NoAsideLayout from '../../layouts/no-aside-layout';
import ErrorPage from '../error-page';

export default class NotFoundPage extends NoAsideLayout {
    constructor() {
        super({
            props: {
                page: new ErrorPage({
                    props: {
                        statusCode: 404,
                        comment: 'Не туда попали',
                        linkTo: '/messenger',
                        linkText: 'Назад к чатам',
                    },
                }),
            },
        });
    }
}
