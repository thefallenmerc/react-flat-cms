import React from 'react';
import { Remarkable } from 'remarkable';

export default class RedirectToHttpsPage extends React.Component {
    constructor(props) {
        super(props);
        this.md = `%23%20HTACCESS%20FOR%20%20REDIRECT%20TO%20HTTPS%0D%0A%0D%0A%60%60%60conf%0D%0A%20%20%20%20RewriteEngine%20On%0D%0A%20%20%20%20RewriteCond%20%25%7BSERVER_PORT%7D%2080%0D%0A%20%20%20%20RewriteRule%20%5E(.*)%24%20https%3A%2F%2Fwww.yourdomain.com%2F%241%20%5BR%2CL%5D%0D%0A%60%60%60`;
        this.tags = [
  "servers",
  "apache",
  "redirect to https"
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
                className="RedirectToHttpsPage PageContent"
                dangerouslySetInnerHTML={this.getRawHTML()}></div>
        );
    }
}