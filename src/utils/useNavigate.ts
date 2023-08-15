import Router from './router';

export interface Navigation {
    go: (pathname: string) => void;
    forward: (pathname: string) => void;
    back: (pathname: string) => void;
}

export default function useNavigate(): Navigation {
    try {
        const router = Router.instance;

        if (!router) {
            throw new Error('Router must have an instance to use useNavigate hook.');
        }

        return {
            go: router.go.bind(router),
            forward: router.forward.bind(router),
            back: router.back.bind(router),
        };
    } catch (e) {
        throw new Error('Router must have an instance.');
    }
}
