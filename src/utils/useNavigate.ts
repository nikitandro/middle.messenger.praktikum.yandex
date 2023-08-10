import Router from './router';

export default function useNavigate() {
    try {
        const router = Router.instance;

        return {
            go: router.go.bind(router),
            forward: router.forward.bind(router),
            back: router.back.bind(router),
        };
    } catch (e) {
        throw new Error('Router must have an instance.');
    }
}
