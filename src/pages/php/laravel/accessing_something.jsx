import React from 'react';
import { Remarkable } from 'remarkable';

export default class AccessingSomethingPage extends React.Component {
    constructor(props) {
        super(props);
        this.md = `%23%20Accessing%20user%20IP%20in%20Laravel%0D%0A%0D%0A1.%20Get%20access%20to%20user%20request%20by%20%60%24request%60%20or%20%60request()%60%20or%20'Request'%0D%0A2.%20call%20the%20%60ip()%60%20method%20as%20per%20your%20convinience%0D%0A%60%60%60php%0D%0A%20%20%20%20%20%20%20%20%2F%2F%20by%20injected%20%60Request%60%20object%0D%0A%20%20%20%20%20%20%20%20%24ip%20%3D%20%24request-%3Eip()%3B%0D%0A%20%20%20%20%20%20%20%20%2F%2F%20or%20by%20global%20helper%0D%0A%20%20%20%20%20%20%20%20%24ip%20%3D%20request()-%3Eip()%3B%0D%0A%20%20%20%20%20%20%20%20%2F%2F%20or%20by%20the%20Request%20Facade%0D%0A%20%20%20%20%20%20%20%20%24ip%20%3D%20Request%3A%3Aip()%3B%0D%0A%60%60%60%0D%0A4.%20Thats%20all%20folks`;
        this.tags = [
  "php",
  "laravel",
  "accessing something"
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
                className="AccessingSomethingPage PageContent"
                dangerouslySetInnerHTML={this.getRawHTML()}></div>
        );
    }
}