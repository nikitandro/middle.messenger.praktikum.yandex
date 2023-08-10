type StringIndexed = Record<string, any>;

function isObject(value: any): boolean {
    return typeof value === 'object' && value !== null;
}

function convertArrayToQueryString(key: string, value: any): string {
    return value.map((v: any, i: number) => queryStringify({ [`${key}[${i}]`]: v })).join('&');
}

function convertObjectToQueryString(data: any, prefix: string = ''): string {
    const keys = Object.keys(data);

    return keys
        .map((key) => {
            const value = data[key];

            if (Array.isArray(value)) {
                return convertArrayToQueryString(`${prefix}${key}`, value);
            }

            if (isObject(value)) {
                if (prefix === '') {
                    return convertObjectToQueryString(value, `${key}`);
                }
                return convertObjectToQueryString(value, `${prefix}[${key}]`);
            }
            if (prefix === '') {
                return `${key}=${encodeURIComponent(value)}`;
            }
            return `${prefix}[${key}]=${encodeURIComponent(value)}`;
        })
        .join('&');
}

function queryStringify(data: StringIndexed): string | never {
    if (!isObject(data)) {
        throw new Error('input must be an object');
    }

    return '?' + convertObjectToQueryString(data);
}

export default queryStringify;
