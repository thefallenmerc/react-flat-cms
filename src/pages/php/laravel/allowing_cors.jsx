import React from 'react';
import { Remarkable } from 'remarkable';

export default class AllowingCorsPage extends React.Component {
    constructor(props) {
        super(props);
        this.md = `%23%20Allowing%20cors%20in%20laravel%0D%0A%0D%0A1.%20Create%20a%20middleware%20by%20doing%20%60php%20artisan%20make%3Amiddleware%20%20Cors%60.%0D%0A2.%20Edit%20the%20middleware%20-%0D%0A%0D%0A%60%60%60php%0D%0A%20%20%20%20%3C%3Fphp%0D%0A%20%20%20%20namespace%20App%5CHttp%5CMiddleware%3B%0D%0A%20%20%20%20use%20Closure%3B%0D%0A%20%20%20%20class%20Cors%0D%0A%20%20%20%20%7B%0D%0A%20%20%20%20public%20function%20handle(%24request%2C%20Closure%20%24next)%0D%0A%20%20%20%20%7B%0D%0A%20%20%20%20%20%20%20%20return%20%24next(%24request)%0D%0A%20%20%20%20%20%20%20%20-%3Eheader(%E2%80%98Access-Control-Allow-Origin%E2%80%99%2C%20%E2%80%98*%E2%80%99)%0D%0A%20%20%20%20%20%20%20%20-%3Eheader(%E2%80%98Access-Control-Allow-Methods%E2%80%99%2C%20%E2%80%98GET%2C%20POST%2C%20PUT%2C%20DELETE%2C%20OPTIONS%E2%80%99)%0D%0A%20%20%20%20%20%20%20%20-%3Eheader(%E2%80%98Access-Control-Allow-Headers%E2%80%99%2C%20%E2%80%98X-Requested-With%2C%20Content-Type%2C%20X-Token-Auth%2C%20Authorization%E2%80%99)%3B%0D%0A%20%20%20%20%7D%0D%0A%20%20%20%20%7D%0D%0A%60%60%60%0D%0A%0D%0A3.%20Add%20the%20middleware%20to%20%60%24routeMiddleware%60%20in%20%60app%5CHttp%5CKernel.php%60%20-%20%0D%0A4.%20Use%20middleware%20wherever%20you%20like`;
        this.tags = [
  "php",
  "laravel",
  "allowing cors"
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
                className="AllowingCorsPage PageContent"
                dangerouslySetInnerHTML={this.getRawHTML()}></div>
        );
    }
}