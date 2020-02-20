import React from 'react';
import { Remarkable } from 'remarkable';

export default class CreateNewProjectPage extends React.Component {
    constructor(props) {
        super(props);
        this.md = `%23%20Red`;
        this.tags = [
  "php",
  "laravel",
  "create new project"
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
                className="CreateNewProjectPage PageContent"
                dangerouslySetInnerHTML={this.getRawHTML()}></div>
        );
    }
}