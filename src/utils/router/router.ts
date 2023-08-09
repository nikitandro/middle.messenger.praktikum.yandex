import Block from '../../components/block/block';
import Route from '../route';

class Router {
    private static _instance: Router;
    public routes: Route[] = [];
    public history: History = window.history;
    public _currentRoute: Route | null = null;
    public _rootQuery: string = '';
    constructor(rootQuery: string) {
        if (Router._instance) {
            return Router._instance;
        }

        this._rootQuery = rootQuery;

        Router._instance = this;
    }

    public use(pathname: string, block: new (...args: any[]) => Block) {
        const route = new Route(pathname, block, { rootQuery: this._rootQuery });

        this.routes.push(route);

        return this;
    }

    public start() {
        window.onpopstate = (event) => {
            // @ts-ignore из-за плохой типизации currentTarget
            this._onRoute(event.currentTarget?.location.pathname);
        };

        this._onRoute(window.location.pathname);
    }

    public _onRoute(pathname: string) {
        const route = this.getRoute(pathname);
        if (!route) {
            return;
        }

        if (this._currentRoute && this._currentRoute !== route) {
            this._currentRoute.leave();
        }

        this._currentRoute = route;
        route.render();
    }

    public go(pathname: string) {
        this.history.pushState({}, '', pathname);
        this._onRoute(pathname);
    }

    public back() {
        this.history.back();
    }

    public forward() {
        this.history.forward();
    }

    public getRoute(pathname: string) {
        return this.routes.find((route) => route.match(pathname));
    }
}
