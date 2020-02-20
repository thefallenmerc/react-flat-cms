import React from 'react';
import { Remarkable } from 'remarkable';

export default class SettingRedirectionProgrammaticallyPage extends React.Component {
    constructor(props) {
        super(props);
        this.md = `%23%20Setting%20redirect%20conditionally%20in%20a%20component%0D%0A%0D%0A1.%20You%20have%20to%20be%20using%20%60react-router-dom%60%0D%0A2.%20In%20any%20component%20do%20this%20for%20redirection%20-%20%0D%0A%0D%0A%60%60%60javascript%0D%0A%20%20%20%20this.props.history.push('%2Fhome')%3B%20%2F%2F%20to%20redirect%20to%20home%20in%20class%20based%20component%0D%0A%20%20%20%20props.push('%2Fhome')%3B%20%2F%2F%20to%20redirect%20to%20home%20from%20a%20functional%20component%0D%0A%60%60%60`;
        this.tags = [
  "javascript",
  "react",
  "setting redirection programmatically"
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
                className="SettingRedirectionProgrammaticallyPage PageContent"
                dangerouslySetInnerHTML={this.getRawHTML()}></div>
        );
    }
}