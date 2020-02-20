import React from 'react';
import { Remarkable } from 'remarkable';

export default class HandleOnlineOfflineEventPage extends React.Component {
    constructor(props) {
        super(props);
        this.md = `%23%20Handle%20online%20offline%20event%0D%0A%0D%0A%60%60%60%20javascript%0D%0A%20%20%20%20window.addEventListener('load'%2C%20event%20%3D%3E%20%7B%0D%0A%20%20%20%20%20%20%20%20%2F%2F%20offline%20online%20indicator%0D%0A%20%20%20%20%20%20%20%20function%20handleNetworkChange(event)%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20if%20(navigator.onLine)%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20document.body.classList.remove(%22offline%22)%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%20else%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20document.body.classList.add(%22offline%22)%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0D%0A%20%20%20%20%20%20%20%20%7D%0D%0A%20%20%20%20%20%20%20%20window.addEventListener(%22online%22%2C%20handleNetworkChange)%3B%0D%0A%20%20%20%20%20%20%20%20window.addEventListener(%22offline%22%2C%20handleNetworkChange)%3B%0D%0A%20%20%20%20%20%20%20%20%2F%2F%20offline%20online%20indicator%20end%0D%0A%20%20%20%20%7D)%3B%0D%0A%60%60%60%0D%0A`;
        this.tags = [
  "web",
  "javascript",
  "handle online offline event"
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
                className="HandleOnlineOfflineEventPage PageContent"
                dangerouslySetInnerHTML={this.getRawHTML()}></div>
        );
    }
}