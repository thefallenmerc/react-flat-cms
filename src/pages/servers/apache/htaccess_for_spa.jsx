import React from 'react';
import { Remarkable } from 'remarkable';

export default class HtaccessForSpaPage extends React.Component {
    constructor(props) {
        super(props);
        this.md = `%23%20Htaccess%20for%20Single%20Page%20Apps%0D%0A%0D%0A%60%60%60conf%0D%0A%20%20%20%20%3CifModule%20mod_rewrite.c%3E%0D%0A%20%20%20%20%20%20%20%20RewriteEngine%20On%0D%0A%20%20%20%20%20%20%20%20RewriteBase%20%2F%0D%0A%20%20%20%20%20%20%20%20RewriteCond%20%25%7BREQUEST_FILENAME%7D%20!-f%0D%0A%20%20%20%20%20%20%20%20RewriteCond%20%25%7BREQUEST_FILENAME%7D%20!-d%0D%0A%20%20%20%20%20%20%20%20RewriteRule%20(.*)%20%2Findex.html%20%5BQSA%2CL%5D%0D%0A%20%20%20%20%3C%2FifModule%3E%0D%0A%60%60%60`;
        this.tags = [
  "servers",
  "apache",
  "htaccess for spa"
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
                className="HtaccessForSpaPage PageContent"
                dangerouslySetInnerHTML={this.getRawHTML()}></div>
        );
    }
}