const base = "https://raw.githubusercontent.com/thefallenmerc/tutorials-n-guides/master/";
const staticDir = "static/src"

export default {
    base,
    content: base + "static/content.json",
    getPath: path => {
        return base + staticDir + path;
    },
    get: endpoint => {
        return fetch(base + staticDir + endpoint).then(res => res.json())
    }
}