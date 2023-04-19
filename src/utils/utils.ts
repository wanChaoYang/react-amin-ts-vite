export interface MetaProps {
    unwntedAuth?: boolean,
    title?: string
    key?: string
}
export interface RouteObject {
    children?: RouteObject[];
    path?: string;
    element?: string;
    meta?: MetaProps;
}

export const matchRoute = (path: string, routers: RouteObject[] = []) => {
    let result: RouteObject = {};
    for (let item of routers) {
        if (item.path === path) {
            return item
        }
        if (item.children) {
            const res = matchRoute(path, item.children);
            if (Object.keys(res).length) {
                result = res;
            }
        }
    }
    return result;
}