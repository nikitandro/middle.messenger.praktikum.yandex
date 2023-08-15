import Block from '../../components/block';
import Route from '../route';

export default class Router {
    private static _instance: Router | null = null;
    public routes: Route[] = [];
    public history: History = window.history;
    public _currentRoute: Route | null = null;
    public _rootQuery: string = '';
    public defaultRoute: Route | null = null;

    constructor(rootQuery: string) {
        if (Router._instance) {
            return Router._instance;
        }

        this._rootQuery = rootQuery;

        Router._instance = this;
    }

    public static get instance() {
        return Router._instance;
    }

    public use(pathname: string, block: new (...args: any[]) => Block) {
        const existingRoute = this.getRoute(pathname);

        if (existingRoute) {
            throw new Error('Route with such pathname already exists.');
        }

        const route = new Route(pathname, block, { rootQuery: this._rootQuery });

        this.routes.push(route);

        return this;
    }

    public default(block: new (...args: any[]) => Block) {
        this.defaultRoute = new Route('/', block, { rootQuery: this._rootQuery });

        return { start: this.start.bind(this) };
    }

    public defaultRedirect(pathname: string) {
        const route = this.getRoute(pathname);

        if (!route) {
            throw new Error('Route for default redirect must be registered.');
        }

        this.go(pathname);

        return { start: this.start.bind(this) };
    }

    public start() {
        window.onpopstate = (event) => {
            // @ts-ignore из-за плохой типизации currentTarget
            this._onRoute(event.currentTarget?.location.pathname);
        };

        this._onRoute(window.location.pathname);
    }

    public _onRoute(pathname: string) {
        let route = this.getRoute(pathname);
        console.log(pathname);
        if (!route) {
            if (this.defaultRoute) {
                route = this.defaultRoute;
            } else {
                return;
            }
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

    public clearRoutes() {
        this.routes = [];
    }
}
