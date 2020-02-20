import React from 'react';
import { Remarkable } from 'remarkable';

export default class AddingNewCustomRouteFilePage extends React.Component {
    constructor(props) {
        super(props);
        this.md = `%23%20Adding%20seperate%20route%20file%0D%0A`;
        this.tags = [
  "php",
  "laravel",
  "adding new custom route file"
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
                className="AddingNewCustomRouteFilePage PageContent"
                dangerouslySetInnerHTML={this.getRawHTML()}></div>
        );
    }
}