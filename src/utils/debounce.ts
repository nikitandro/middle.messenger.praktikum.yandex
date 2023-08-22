export default function debounce(callback: (...args: any[]) => void, debounceTime: number) {
    let timerId: ReturnType<typeof setTimeout>;
    return function (...args: any[]) {
        clearTimeout(timerId);
        timerId = setTimeout(() => {
            callback(args);
        }, debounceTime);
    };
}
