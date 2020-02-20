import React from 'react';
import { Remarkable } from 'remarkable';

export default class IntegrateOnesignalSdkPage extends React.Component {
    constructor(props) {
        super(props);
        this.md = `%23%20How%20to%20integrate%20one%20signal%20SDK%0D%0A%0D%0A1.%20Get%20your%20onesignal%20app%20id%0D%0A%0D%0A2.edit%20%60public%2Findex.html%60%20with%20following%20script%20in%20the%20%60head%60%20tag%20-%20%0D%0A%0D%0A%60%60%60%20html%0D%0A%3Cscript%20src%3D%22https%3A%2F%2Fcdn.onesignal.com%2Fsdks%2FOneSignalSDK.js%22%20async%3D%22%22%3E%3C%2Fscript%3E%0D%0A%3Cscript%3E%0D%0A%20%20%20%20var%20OneSignal%20%3D%20window.OneSignal%20%7C%7C%20%5B%5D%3B%0D%0A%20%20%20%20OneSignal.push(function()%20%7B%0D%0A%20%20%20%20%20%20%20%20OneSignal.init(%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20appId%3A%20%22b56b2fb3-180a-4806-a2cb-e49b882996a1%22%2C%0D%0A%20%20%20%20%20%20%20%20%7D)%3B%0D%0A%20%20%20%20%7D)%3B%0D%0A%3C%2Fscript%3E%0D%0A%60%60%60%0D%0A`;
        this.tags = [
  "javascript",
  "react",
  "integrate onesignal sdk"
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
                className="IntegrateOnesignalSdkPage PageContent"
                dangerouslySetInnerHTML={this.getRawHTML()}></div>
        );
    }
}