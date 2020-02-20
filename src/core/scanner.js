const scanner = require('@chaharshubhamsingh/dirscanner');
const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const rimraf = require('rimraf');
const Util = require('util');
const exec = Util.promisify(require('child_process').exec);
const Remarkable = new (require('remarkable').Remarkable)();


// Initialize Directory to scan
const dirToScan = path.join(__dirname, '..', 'MDs');
const pageDir = path.join(__dirname, '..', 'pages');

// Initialize output directory
const outputLocation = path.join(dirToScan, 'content.json');

// Initialize Template
const template = fs.readFileSync(path.join(__dirname, 'template.js.sample'), { encoding: 'utf8' });

// Create ignore list
const ignore = ['content.json'].map(item => path.join(__dirname, '..', 'MDs', item));

// Scan the file
console.log(chalk.cyan("Starting the scan..."))
const scanned = scanner(path.join(__dirname, '..', 'MDs'), ignore);
console.log(chalk.cyan("Scan complete, " + scanned.flat.length + " files found!"))

// Create mapped list
const list = scanned.flat.map(item => item.path.substr(1)) || [];
console.log(chalk.cyan("Created optimized map."));

// Make string of directory content
const dirContent = JSON.stringify(list, null, 2);

const componentRoute = [];
let routes = [];

// Empty the pageDir
exec("npm run clear:page")
    .then(response => {
        console.log(chalk.cyan('Cleared old pages!'));
        console.log(chalk.cyan('Generating new pages...'));

        // Read files from list
        list.forEach(item => {
            const itemPath = path.join(dirToScan, item);
            const itemPathDest = path.join(pageDir, item);
            // Make the jsx from template
            const jsxPath = makeFile(itemPath, itemPathDest, titleName(item), removeExt(item).replace(/_/g, ' ').toLowerCase().split('/'));
            console.log(chalk.cyan('[Page Created]: ' + getRelative(jsxPath)));
            // Add file detail to router
            componentRoute.push({
                component: componentName(jsxPath),
                name: titleName(jsxPath),
                path: jsxPath.replace(path.join(__dirname, '..'), '')
            });
        })

        console.log(chalk.cyan('New pages generated!'));

        // Writing the content js
        fs.writeFileSync(outputLocation, dirContent);

        // Create routes files
        makeRoutes();

        makeRouter();

        // Complete
        console.log(chalk.green('Scan successful!'));
    });




// Functions

function makeRoutes() {
    routes = componentRoute.map(route => {
        route.component = removeExt(route.component);
        route.url = makeURLSlug(removeExt(route.path));
        route.tags = route.url.replace(/-/g, ' ').split('/').filter(r => r);
        route.seoTags = route.tags.join(',');
        route.path = route.path.replace(/\\/g, '/');
        return route;
    });
    const routeStringified = JSON.stringify(routes, null, 2);
    const template = fs.readFileSync(path.join(__dirname, 'routes.js.sample'), {
        encoding: 'utf8'
    }).replace(/(__routes__)/g, routeStringified);
    const outputLocation = path.join(__dirname, '..', 'routes.js');
    fs.writeFileSync(outputLocation, template, {
        encoding: 'utf8',
    });
    console.log(chalk.cyan('[Routes Created]: ' + outputLocation));
}

function makeRouter() {
    const importlist = routes.map(route => {
        return `import ${route.component} from ".${route.path}";`;
    }).join("\r\n");
    const routelist = routes.map(route => {
        return `\t\t\t\t<Route path={"${route.url}"} component={${route.component}} />`
    }).join("\r\n");
    const template = fs.readFileSync(path.join(__dirname, 'Router.js.sample'), {
        encoding: 'utf8'
    }).replace(/__imports__/g, importlist).replace(/__routelist__/g, routelist);
    const outputLocation = path.join(__dirname, '..', 'Router.js');
    fs.writeFileSync(outputLocation, template, {
        encoding: 'utf8'
    });
    console.log(chalk.cyan('[Router Created]: ' + outputLocation));

}

function makeFile(itemPath, itemPathDest, title = 'Flat React', tags = []) {
    createFileIfNotExists(itemPathDest);
    const className = camelCase(getFileName(itemPath));
    const md = fs.readFileSync(itemPath, { encoding: 'utf8' });
    const content = template
        .replace(/(__classname__)/g, className)
        .replace(/__tags__/g, JSON.stringify(tags, null, 2))
        .replace(/__title__/g, title)
        .replace(/(__md__)/g, encodeURIComponent(md));
    const jsxPath = jsx(itemPathDest);
    fs.writeFileSync(jsxPath, content, { encoding: 'utf8' });
    return jsxPath;
}

function createFileIfNotExists(itemPathDest) {
    fs.mkdirSync(path.dirname(itemPathDest), {
        recursive: true
    });
}

function makeURLSlug(url = '') {
    return url.replace(/\\/g, '/').replace(/_/g, '-').substr(6).toLowerCase();
}

function getFileName(itemPath) {
    return path.basename(itemPath.substring(0, itemPath.indexOf('.', -1))) + "_page";
}

function componentName(itemPath) {
    return camelCase(path.basename(itemPath));
}

function titleName(itemPath) {
    return path.basename(removeExt(itemPath)).split('_').map(word => {
        return capitalize(word);
    }).join(' ');
}

function getRelative(itemPath = '') {
    return itemPath.replace(path.join(__dirname, '..', '..'), '');
}

function camelCase(str = '') {
    return str.split('_').map(word => {
        return capitalize(word);
    }).join('');
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.substr(1);
}

function removeExt(name) {
    return name.substring(0, name.indexOf('.', -1))
}

function jsx(itemPath) {
    return itemPath.substring(0, itemPath.indexOf('.', -1)) + '.jsx';
}