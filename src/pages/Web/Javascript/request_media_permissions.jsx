import React from 'react';
import { Remarkable } from 'remarkable';

export default class RequestMediaPermissionsPage extends React.Component {
    constructor(props) {
        super(props);
        this.md = `%23%20Request%20media%20permission%20from%20user%0D%0A%0D%0A%60%60%60%20javascript%0D%0Awindow.addEventListener('load'%2C%20event%20%3D%3E%20%7B%0D%0A%20%20%20%20%2F%2F%20ask%20for%20permission%0D%0A%20%20%20%20navigator.mediaDevices.getUserMedia(%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20audio%3A%20true%2C%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20video%3A%20true%0D%0A%20%20%20%20%20%20%20%20%7D)%0D%0A%20%20%20%20%20%20%20%20.then(function(stream)%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20console.log('Permissions%20acquired!')%3B%0D%0A%20%20%20%20%20%20%20%20%7D)%0D%0A%20%20%20%20%20%20%20%20.catch(function(err)%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20console.log('Failed%20to%20acquire%20permission!'%2C%20err)%3B%0D%0A%20%20%20%20%20%20%20%20%7D)%3B%0D%0A%20%20%20%20%2F%2F%20ask%20for%20permission%20end%0D%0A%7D)%3B%0D%0A%60%60%60%0D%0A`;
        this.tags = [
  "web",
  "javascript",
  "request media permissions"
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
                className="RequestMediaPermissionsPage PageContent"
                dangerouslySetInnerHTML={this.getRawHTML()}></div>
        );
    }
}