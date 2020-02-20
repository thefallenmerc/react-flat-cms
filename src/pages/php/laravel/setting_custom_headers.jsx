import React from 'react';
import { Remarkable } from 'remarkable';

export default class SettingCustomHeadersPage extends React.Component {
    constructor(props) {
        super(props);
        this.md = `%23%20Setting%20Custom%20Headers%20in%20Laravel%0D%0A%0D%0A1.%20Create%20a%20middleware%0D%0A2.%20Include%20it%20in%20%60app%5CHttp%5CKernel.php%60%20as%20per%20convinience%0D%0A3.%20Set%20the%20following%20code%20in%20the%20middleware%5C's%20handle%20function%20-%20%0D%0A%60%60%60php%0D%0A%20%20%20%20%20%20%20%20%24response%20%3D%20%24next(%24request)%3B%0D%0A%20%20%20%20%20%20%20%20return%20%24response%0D%0A%20%20%20%20%20%20%20%20-%3Eheader('Strict-Transport-Security'%2C%20'max-age%3D31536000%3B%20includeSubDomains')%0D%0A%20%20%20%20%20%20%20%20-%3Eheader('X-Content-Type-Options'%2C%20'nosniff')%0D%0A%20%20%20%20%20%20%20%20-%3Eheader('X-Frame-Options'%2C%20'sameorigin')%0D%0A%20%20%20%20%20%20%20%20-%3Eheader('X-XSS-Protection'%2C%20'1%3B%20mode%3Dblock')%3B%0D%0A%60%60%60%0D%0A4.%20Thats%20all%20folks`;
        this.tags = [
  "php",
  "laravel",
  "setting custom headers"
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
                className="SettingCustomHeadersPage PageContent"
                dangerouslySetInnerHTML={this.getRawHTML()}></div>
        );
    }
}