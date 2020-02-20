import React from 'react';
import { Remarkable } from 'remarkable';

export default class AboutPage extends React.Component {
    constructor(props) {
        super(props);
        this.md = `%23%23%23%20Quick%20How-Tos%0D%0AQuick%20How-Tos%20is%20a%20collection%20of%20snippets%20and%20gists.%0D%0A%0D%0A%23%23%23%20Collaborators%0D%0A1.%20%5BSonu%20Sharma%5D(https%3A%2F%2Fgithub.com%2FtheAlphamerc)%0D%0A2.%20%5BShubham%20Singh%20Chahar%5D(https%3A%2F%2Fgithub.com%2Fthefallenmerc)`;
        this.tags = [
  "xyzs",
  "about"
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
                className="AboutPage PageContent"
                dangerouslySetInnerHTML={this.getRawHTML()}></div>
        );
    }
}