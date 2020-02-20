import React from 'react';
import { Remarkable } from 'remarkable';

export default class AddCustomServiceWorkerPage extends React.Component {
    constructor(props) {
        super(props);
        this.md = `%23%20How%20to%20add%20a%20custom%20service%20worker%20to%20react%20cra%20template%0D%0A%0D%0A1.in%20file%20%60index.js%60%20do%20the%20following%20-%20%0D%0A%0D%0A%60%60%60%20javascript%0D%0A%20%20%20%20serviceWorker.register()%3B%0D%0A%60%60%60%0D%0A%0D%0A2.open%20%60src%2FserviceWorker.js%60%20and%20look%20at%20the%20method%20%60export%20function%20register(config)%60%20%2C%20%0D%0Aedit%20the%20%60load%60%20eventListener%20and%20change%20to%20the%20following%20-%20%0D%0A%0D%0A%60%60%60%20javascript%0D%0A%20%20%20%20const%20swUrl%20%3D%20%60%24%7Bprocess.env.PUBLIC_URL%7D%2Fsw.js%60%20%3B%0D%0A%60%60%60%0D%0A%0D%0A3.create%20two%20files%20in%20%60src%60%20%2C%20namely%20%60sw-build.js%60%20(%20Provides%20the%20build%20instructions%20for%20the%20custom%20Service%20Worker%20generation.)%0D%0Aand%20%60sw-template.js%60%20(Is%20the%20template%20for%20Workbox%20Service%20Worker.%20Custom%20caching%20rules%20go%20here.)%0D%0A%0D%0A4.edit%20%60src%2Fsw-build.js%60%20-%0D%0A%0D%0A%60%60%60%20javascript%0D%0A%20%20%20%20const%20workboxBuild%20%3D%20require('workbox-build')%3B%0D%0A%20%20%20%20%2F%2F%20NOTE%3A%20This%20should%20be%20run%20*AFTER*%20all%20your%20assets%20are%20built%0D%0A%20%20%20%20const%20buildSW%20%3D%20()%20%3D%3E%20%7B%0D%0A%20%20%20%20%20%20%20%20%2F%2F%20This%20will%20return%20a%20Promise%0D%0A%20%20%20%20%20%20%20%20return%20workboxBuild.injectManifest(%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20swSrc%3A%20'src%2Fsw-template.js'%2C%20%2F%2F%20this%20is%20your%20sw%20template%20file%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20swDest%3A%20'build%2Fsw.js'%2C%20%2F%2F%20this%20will%20be%20created%20in%20the%20build%20step%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20globDirectory%3A%20'build'%2C%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20globPatterns%3A%20%5B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20'**%5C%2F*.%7Bjs%2Ccss%2Chtml%2Cpng%7D'%2C%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%5D%0D%0A%20%20%20%20%20%20%20%20%7D).then((%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20count%2C%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20size%2C%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20warnings%0D%0A%20%20%20%20%20%20%20%20%7D)%20%3D%3E%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%20Optionally%2C%20log%20any%20warnings%20and%20details.%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20warnings.forEach(console.warn)%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20console.log(%20%60%24%7Bcount%7D%20files%20will%20be%20precached%2C%20totaling%20%24%7Bsize%7D%20bytes.%60%20)%3B%0D%0A%20%20%20%20%20%20%20%20%7D)%3B%0D%0A%20%20%20%20%7D%0D%0A%20%20%20%20buildSW()%3B%0D%0A%60%60%60%0D%0A%0D%0A5.%20Provide%20Custom%20Caching%20Rules%20in%20%60src%2Fsw-template.js%60%20%0D%0A%0D%0A%20%20%20%20%60%60%60javascript%0D%0A%20%20%20%20if%20('function'%20%3D%3D%3D%20typeof%20importScripts)%20%7B%0D%0A%0D%0A%20%20importScripts(%0D%0A%0D%0A%20%20%20%20'https%3A%2F%2Fstorage.googleapis.com%2Fworkbox-cdn%2Freleases%2F3.5.0%2Fworkbox-sw.js'%0D%0A%0D%0A%20%20)%3B%20%0D%0A%20%20%2F*%20global%20workbox%20*%2F%0D%0A%20%20if%20(workbox)%20%7B%0D%0A%0D%0A%20%20%20%20console.log('Workbox%20is%20loaded')%3B%0D%0A%0D%0A%20%20%20%20%2F*%20injection%20point%20for%20manifest%20files.%20%20*%2F%0D%0A%20%20%20%20workbox.precaching.precacheAndRoute(%5B%5D)%3B%0D%0A%0D%0A%20%20%20%20%2F*%20custom%20cache%20rules*%2F%0D%0A%20%20%20%20workbox.routing.registerNavigationRoute('%2Findex.html'%2C%20%7B%0D%0A%20%20%20%20%20%20%20%20blacklist%3A%20%5B%2F%5E%5C%2F_%2F%2C%20%2F%5C%2F%5B%5E%5C%2F%5D%2B%5C.%5B%5E%5C%2F%5D%2B%24%2F%5D%2C%0D%0A%20%20%20%20%20%20%20%20%7D)%3B%0D%0A%0D%0A%20%20%20%20workbox.routing.registerRoute(%0D%0A%20%20%20%20%20%20%20%20%2F%5C.(%3F%3Apng%7Cgif%7Cjpg%7Cjpeg)%24%2F%2C%0D%0A%20%20%20%20%20%20%20%20workbox.strategies.cacheFirst(%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20cacheName%3A%20'images'%2C%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20plugins%3A%20%5B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20new%20workbox.expiration.Plugin(%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20maxEntries%3A%2060%2C%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20maxAgeSeconds%3A%2030%20*%2024%20*%2060%20*%2060%2C%20%2F%2F%2030%20Days%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D)%2C%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%5D%2C%0D%0A%20%20%20%20%20%20%20%20%7D)%0D%0A%20%20%20%20%20%20%20%20)%3B%0D%0A%0D%0A%20%20%20%20%7D%20else%20%7B%0D%0A%20%20%20%20%20%20%20%20console.log('Workbox%20could%20not%20be%20loaded.%20No%20Offline%20support')%3B%0D%0A%20%20%20%20%7D%0D%0A%20%20%20%20%7D%0D%0A%20%20%20%20%60%60%60%0D%0A%0D%0A6.%20run%20%60npm%20install%20workbox-build%20--save-dev%60%20in%20not%20installed%20already%0D%0A%0D%0A7.%20change%20commands%20in%20%60package.json%60%20to%20-%20%0D%0A%0D%0A%20%20%20%20%60%60%60json%0D%0A%20%20%20%20%7B%20%20%0D%0A%20%20%20%20%22build-sw%22%3A%20%22node%20.%2Fsrc%2Fsw-build.js%22%2C%0D%0A%20%20%20%20%22clean-cra-sw%22%3A%20%22node_modules%5C%5C.bin%5C%5Crimraf%20build%2Fprecache-manifest.*.js%20%26%26%20node_modules%5C%5C.bin%5C%5Crimraf%20build%2Fservice-worker.js%22%2C%0D%0A%20%20%20%20%22build%22%3A%20%22react-scripts%20build%20%26%26%20npm%20run%20build-sw%20%26%26%20npm%20run%20clean-cra-sw%22%2C%0D%0A%20%20%20%20%22start-sw%22%3A%20%22php%20-S%200.0.0.0%3A80%20-t%20build%22%2C%0D%0A%20%20%20%20%7D%0D%0A%20%20%20%20%60%60%60%0D%0A`;
        this.tags = [
  "javascript",
  "react",
  "add custom service worker"
];
    }
    getRawHTML() {
        const md = new Remarkable();
        return {
            __html: md.render(decodeURIComponent(this.md))
        }
    }
    render() {
        return (
            <div
                className="AddCustomServiceWorkerPage PageContent"
                dangerouslySetInnerHTML={this.getRawHTML()}></div>
        );
    }
}