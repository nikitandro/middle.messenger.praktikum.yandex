export class Redirect {
    public from: string;
    public to: string;

    constructor(from: string, to: string) {
        this.from = from;
        this.to = to;
    }

    public hasMatch(pathname: string) {
        return this.from === pathname;
    }
}
