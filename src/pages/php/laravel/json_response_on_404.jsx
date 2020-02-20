import React from 'react';
import { Remarkable } from 'remarkable';

export default class JsonResponseOn404Page extends React.Component {
    constructor(props) {
        super(props);
        this.md = `%23%20Send%20proper%20json%20response%20on%20404%0D%0A%0D%0A1.edit%20the%20%60render%60%20method%20of%20%60App%5CExceptions%5CHandler.php%60%20%0D%0A%0D%0A%60%60%60%20php%0D%0A%20%20%20%20%20%20%20%20if%20(%24exception%20instanceof%20ModelNotFoundException%20%26%26%20%24request-%3EwantsJson())%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20return%20response()-%3Ejson(%5B'message'%20%3D%3E%20'Not%20Found!'%5D%2C%20404)%3B%0D%0A%20%20%20%20%20%20%20%20%7D%0D%0A%60%60%60%0D%0A`;
        this.tags = [
  "php",
  "laravel",
  "json response on 404"
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
                className="JsonResponseOn404Page PageContent"
                dangerouslySetInnerHTML={this.getRawHTML()}></div>
        );
    }
}