import React from 'react';
import { Remarkable } from 'remarkable';

export default class ConfigureTailwindPage extends React.Component {
    constructor(props) {
        super(props);
        this.md = `%23%20Configure%20Tailwind%0D%0A%0D%0A1.%20%60npm%20i%20tailwindcss%20--save-dev%60%20%0D%0A%0D%0A2.%20%60%20.%2Fnode_modules%2F.bin%2Ftailwind%20init%20tailwind.config.js%60%20%0D%0A%0D%0A3.create%20a%20file%20%60src%2Fstyles%2Ftailwind.src.css%60%20and%20write%20-%20%0D%0A%0D%0A%60%60%60css%0D%0A%40tailwind%20preflight%3B%0D%0A%40tailwind%20components%3B%0D%0A%40tailwind%20utilities%3B%0D%0A%60%60%60%0D%0A%0D%0A4.add%20following%20scripts%20to%20%60package.json%60%20%0D%0A%0D%0A%60%60%60%20json%0D%0A%20%20%20%20%22tw%3Acss%22%3A%20%22node_modules%5C%5C.bin%5C%5Ctailwind%20build%20src%2Fstyles%2Ftailwind.src.css%20-c%20tailwind.config.js%20-o%20src%2Fstyles%2Ftailwind.css%22%2C%0D%0A%20%20%20%20%22start%22%3A%20%22npm%20run%20tw%3Acss%20%26%26%20react-scripts%20start%22%2C%0D%0A%20%20%20%20%22build%22%3A%20%22npm%20run%20tw%3Acss%20%26%26%20react-scripts%20build%22%2C%0D%0A%60%60%60%0D%0A`;
        this.tags = [
  "javascript",
  "react",
  "configure tailwind"
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
                className="ConfigureTailwindPage PageContent"
                dangerouslySetInnerHTML={this.getRawHTML()}></div>
        );
    }
}