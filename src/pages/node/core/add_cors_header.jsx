import React from 'react';
import { Remarkable } from 'remarkable';

export default class AddCorsHeaderPage extends React.Component {
    constructor(props) {
        super(props);
        this.md = `%23%20Add%20CORS%20header%0D%0A%0D%0A%23%23%23%20Make%20the%20following%20middleware%0D%0A%0D%0A1.%20Simple%0D%0A%0D%0A%60%60%60%20javascript%0D%0A%20%20%20%20app.use(req%2C%20res%2C%20next)%20%7B%0D%0A%20%20%20%20%20%20%20%20res.header(%22Access-Control-Allow-Origin%22%2C%20%22*%22)%3B%0D%0A%20%20%20%20%20%20%20%20next()%3B%0D%0A%20%20%20%20%7D%0D%0A%60%60%60%0D%0A%0D%0A2.%20For%20All%0D%0A%0D%0A%60%60%60%20javascript%0D%0A%20%20%20%20app.use(req%2C%20res%2C%20next)%20%7B%0D%0A%20%20%20%20%20%20%20%20res.header(%22Access-Control-Allow-Origin%22%2C%20%22*%22)%3B%0D%0A%20%20%20%20%20%20%20%20res.header(%22Access-Control-Allow-Headers%22%2C%20%22Origin%2C%20X-Requested-With%2C%20Content-Type%2C%20Accept%22)%3B%0D%0A%20%20%20%20%20%20%20%20next()%3B%0D%0A%20%20%20%20%7D%0D%0A%60%60%60%0D%0A`;
        this.tags = [
  "node",
  "core",
  "add cors header"
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
                className="AddCorsHeaderPage PageContent"
                dangerouslySetInnerHTML={this.getRawHTML()}></div>
        );
    }
}