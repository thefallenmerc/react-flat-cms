import React from 'react';
import { Remarkable } from 'remarkable';

export default class AddGlobalEventListenerPage extends React.Component {
    constructor(props) {
        super(props);
        this.md = `%23%20Sample%20app%20with%20global%20event%20listener%0D%0A%0D%0A%60%60%60%20jsx%0D%0Aimport%20React%20from%20'react'%3B%0D%0Aimport%20'.%2FApp.css'%3B%0D%0A%0D%0Aexport%20default%20class%20App%20extends%20React.Component%20%7B%0D%0A%20%20%20%20componentDidMount()%20%7B%0D%0A%20%20%20%20%20%20%20%20this.addTheListeners()%3B%0D%0A%20%20%20%20%7D%0D%0A%20%20%20%20render()%20%7B%0D%0A%0D%0A%20%20%20%20%20%20%20%20return%20(%20%3C%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20div%20className%20%3D%20%22App%22%20%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%2Fdiv%3E%0D%0A%20%20%20%20%20%20%20%20)%3B%0D%0A%20%20%20%20%7D%0D%0A%0D%0A%20%20%20%20addTheListeners()%20%7B%0D%0A%20%20%20%20%20%20%20%20window.addEventListener('load'%2C%20event%20%3D%3E%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%20ask%20for%20permission%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20navigator.mediaDevices.getUserMedia(%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20audio%3A%20true%2C%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20video%3A%20true%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D)%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20.then(function(stream)%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20console.log('Permissions%20acquired!')%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D)%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20.catch(function(err)%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20console.log('Failed%20to%20acquire%20permission!'%2C%20err)%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D)%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%20ask%20for%20permission%20end%0D%0A%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%20offline%20online%20indicator%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20function%20handleNetworkChange(event)%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20if%20(navigator.onLine)%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20document.body.classList.remove(%22offline%22)%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%20else%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20document.body.classList.add(%22offline%22)%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20window.addEventListener(%22online%22%2C%20handleNetworkChange)%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20window.addEventListener(%22offline%22%2C%20handleNetworkChange)%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%20offline%20online%20indicator%20end%0D%0A%20%20%20%20%20%20%20%20%7D)%3B%0D%0A%20%20%20%20%7D%0D%0A%7D%0D%0A%60%60%60%0D%0A`;
        this.tags = [
  "javascript",
  "react",
  "add global event listener"
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
                className="AddGlobalEventListenerPage PageContent"
                dangerouslySetInnerHTML={this.getRawHTML()}></div>
        );
    }
}