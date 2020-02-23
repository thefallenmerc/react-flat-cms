import endpoints from "./endpoints";

export function makeURLSlug(url = '') {
    return removeExt(url).replace(/\\/g, '/').replace(/_/g, '-').toLowerCase();
}

export function titleName(itemPath = '') {
    return itemPath.split('/').pop().split('-').filter(e => e).map(word => {
        return capitalize(word);
    }).join(' ');
}

export function camelCase(str = '') {
    return str.split('_').map(word => {
        return capitalize(word);
    }).join('');
}

export function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.substr(1);
}

export function removeExt(name) {
    return name.substring(0, name.indexOf('.', -1))
}

export function getTags(url = "") {
    return url.split("/").filter(e => e);
}

export function transformRoute(route = {}) {
    route.url = endpoints.getPath(route.path);
    route.path = makeURLSlug(route.path);
    route.tags = getTags(route.path);
    route.name = titleName(route.path);
    return route;
}