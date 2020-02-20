import React from 'react';
import { Remarkable } from 'remarkable';

export default class CreateTypescriptScaffoldingPage extends React.Component {
    constructor(props) {
        super(props);
        this.md = `%23%20Create%20a%20Typescript%20based%20express%20js%20project%20skeleton%0D%0A%0D%0A1.%20Create%20project%20folder%2C%20in%20our%20case%20%60t-ex%60%0D%0A2.%20open%20the%20directory%20in%20terminal%20and%20run%20%60npm%20init%20-y%60%0D%0A3.%20save%20the%20dev%20dependencies%20by%20doing%20%60npm%20i%20--save-dev%20tsc%20typescript%20tslint%20%40types%2Fexpress%60%0D%0A4.%20save%20express%20by%20doing%20%60npm%20i%20express%60%0D%0A5.%20make%20%60tsconfig.json%60%20by%20running%20%60node_modules%5C.bin%5Ctsc%20--init%60%20%0D%0A6.%20make%20%60tslint%60%20by%20running%20%60node_modules%5C.bin%5Ctslint%20--init%60%0D%0A7.%20add%20%60no-console%60%20to%20%60jsRules%60%20of%20%60tslint.json%60%20and%20set%20it%20to%20%60false%60%20so%20that%20we%20can%20use%20%60console.log%60%0D%0A8.%20add%20following%20to%20%60tsconfig.json%60%20and%20replace%20all%20previous%0D%0A%20%20%20%20%60%60%60json%0D%0A%20%20%20%20%20%20%20%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%22include%22%3A%20%5B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%22src%2F**%2F*%22%0D%0A%20%20%20%20%20%20%20%20%20%20%5D%2C%0D%0A%20%20%20%20%20%20%20%20%20%20%22exclude%22%3A%20%5B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%22dist%22%2C%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%22node_modules%22%0D%0A%20%20%20%20%20%20%20%20%20%20%5D%2C%0D%0A%20%20%20%20%20%20%20%20%20%20%22compilerOptions%22%3A%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%22module%22%3A%20%22commonjs%22%2C%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%22esModuleInterop%22%3A%20true%2C%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%22target%22%3A%20%22ES6%22%2C%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%22moduleResolution%22%3A%20%22Node%22%2C%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%22sourceMap%22%3A%20false%2C%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%22outDir%22%3A%20%22dist%22%0D%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0D%0A%20%20%20%20%20%20%20%20%20%20%22lib%22%3A%20%22es2015%22%0D%0A%20%20%20%20%20%20%20%20%7D%0D%0A%20%20%20%20%60%60%60%0D%0A9.%20add%20build%20script%20to%20%0D%0A3.%20Thats%20all%20folks`;
        this.tags = [
  "node",
  "express",
  "create typescript scaffolding"
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
                className="CreateTypescriptScaffoldingPage PageContent"
                dangerouslySetInnerHTML={this.getRawHTML()}></div>
        );
    }
}