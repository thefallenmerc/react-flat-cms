import React from 'react';
import { Remarkable } from 'remarkable';

export default class MakeAPwaPage extends React.Component {
    constructor(props) {
        super(props);
        this.md = `%23%20Make%20a%20PWA%0D%0A%0D%0A1.%20Add%20following%20to%20the%20%60index.html%60%0D%0A%0D%0A%60%60%60html%0D%0A%20%20%3Cmeta%20name%3D%22viewport%22%20content%3D%22width%3Ddevice-width%2C%20initial-scale%3D1%22%20%2F%3E%0D%0A%20%20%3Cmeta%20name%3D%22theme-color%22%20content%3D%22%23000000%22%20%2F%3E%0D%0A%20%20%3Cmeta%20name%3D%22description%22%20content%3D%22A%20PWA%22%20%2F%3E%0D%0A%20%20%3Clink%20rel%3D%22manifest%22%20href%3D%22%2Fmanifest.json%22%20%2F%3E%0D%0A%20%20%3Clink%20rel%3D%22apple-touch-icon%22%20href%3D%22%25PUBLIC_URL%25%2Flogo192.png%22%20%2F%3E%0D%0A%60%60%60%0D%0A%0D%0A2.%20Add%20a%20%60manifest.json%60%20and%20make%20sure%20the%20assets%20are%20available%20and%20not%20missing%2C%20or%20the%20app%20wont%20work%0D%0A%0D%0A%60%60%60json%0D%0A%7B%0D%0A%20%20%22short_name%22%3A%20%22Sample%20PWA%20App%22%2C%0D%0A%20%20%22name%22%3A%20%22This%20is%20a%20sample%20PWA%20App%20from%20The%20fallen%20merc%22%2C%0D%0A%20%20%22icons%22%3A%20%5B%0D%0A%20%20%20%20%7B%0D%0A%20%20%20%20%20%20%22src%22%3A%20%22favicon.ico%22%2C%0D%0A%20%20%20%20%20%20%22sizes%22%3A%20%2264x64%2032x32%2024x24%2016x16%22%2C%0D%0A%20%20%20%20%20%20%22type%22%3A%20%22image%2Fx-icon%22%0D%0A%20%20%20%20%7D%2C%0D%0A%20%20%20%20%7B%0D%0A%20%20%20%20%20%20%22src%22%3A%20%22logo192.png%22%2C%0D%0A%20%20%20%20%20%20%22type%22%3A%20%22image%2Fpng%22%2C%0D%0A%20%20%20%20%20%20%22sizes%22%3A%20%22192x192%22%0D%0A%20%20%20%20%7D%2C%0D%0A%20%20%20%20%7B%0D%0A%20%20%20%20%20%20%22src%22%3A%20%22logo192.png%22%2C%0D%0A%20%20%20%20%20%20%22type%22%3A%20%22image%2Fpng%22%2C%0D%0A%20%20%20%20%20%20%22sizes%22%3A%20%22512x512%22%0D%0A%20%20%20%20%7D%0D%0A%20%20%5D%2C%0D%0A%20%20%22start_url%22%3A%20%22.%22%2C%0D%0A%20%20%22display%22%3A%20%22standalone%22%2C%0D%0A%20%20%22theme_color%22%3A%20%22%23000000%22%2C%0D%0A%20%20%22background_color%22%3A%20%22%23ffffff%22%0D%0A%7D%0D%0A%0D%0A%60%60%60%0D%0A`;
        this.tags = [
  "web",
  "html",
  "make a pwa"
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
                className="MakeAPwaPage PageContent"
                dangerouslySetInnerHTML={this.getRawHTML()}></div>
        );
    }
}