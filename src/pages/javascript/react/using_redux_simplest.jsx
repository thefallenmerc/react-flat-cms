import React from 'react';
import { Remarkable } from 'remarkable';

export default class UsingReduxSimplestPage extends React.Component {
    constructor(props) {
        super(props);
        this.md = ``;
        this.tags = [
  "javascript",
  "react",
  "using redux simplest"
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
                className="UsingReduxSimplestPage PageContent"
                dangerouslySetInnerHTML={this.getRawHTML()}></div>
        );
    }
}