import React from 'react';
import { Remarkable } from 'remarkable';

export default class SmartworkOverHardworkPage extends React.Component {
    constructor(props) {
        super(props);
        this.md = `%23%23%23%20Why%20be%20rich%0D%0A%0D%0AWe%20want%20to%20be%20rich%2C%20it's%20not%20a%20choice%2C%20but%20a%20necessity.%0D%0A**We%20need%20money**%20for%20-%20%0D%0A%0D%0A1.%20To%20eat%20better%0D%0A2.%20To%20wear%20better%20clothes%0D%0A3.%20For%20heat%20in%20summer%2C%20we%20need%20ac%0D%0A4.%20To%20use%20AC%20we%20need%20eletricity%0D%0A5.%20Human%20comfort%20is%20measured%20in%20money%0D%0A%0D%0A%23%23%23%20Office%20ettiquets%20that%20you%20should%20follow%0D%0A%0D%0A1.%20Don't%20look%20for%20approval%20or%20promotion%0D%0A2.%20Don't%20try%20to%20impress%0D%0A3.%20Don't%20stick%20to%20the%20place%20just%20because%20you%20think%20it%20is%20like%20home.%0D%0A4.%20Apply%20elsewhere%20if%20you%20can%20get%20better%20opportunity.%0D%0A5.%20You%20are%20just%20a%20replacement.%0D%0A6.%20Stop%20emotional%20attachment%20to%20workplace%2C%20so%20that%20leaving%20is%20easy.%0D%0A%0D%0AIf%20you%20earn%2025K%2C%20extend%20your%20work%20for%20that%20amount%2C%0D%0Ause%20the%20rest%20of%20your%20efficiency%20on%20yourself.%0D%0A%0D%0A%23%23%23%20Smartwork%20over%20hardwork%0D%0A%0D%0ABosses%20are%20smart%2C%20they%20keep%20employee%20engaged%2C%0D%0Ano%20one%20gives%20a%20shit%20about%20you%2C%20this%20is%20corporate%20world.%0D%0AThey%20use%20you%2C%20so%20-%0D%0A%0D%0A1.%20If%20JOB%20requires%2010%25%2C%20do%2010%25.%0D%0A2.%20Spend%20your%20**90%25%20on%20yourself**.%0D%0A3.%20Do%20the%20amount%20of%20work%20you%20are%20getting%20paid%20for.%0D%0A4.%20Improve%20yourself%20when%20you%20get%20time.%0D%0A5.%20Don't%20be%20lazy.%20**Evolve**%20Constantly.%0D%0A6.%20Three%20types%20of%20people%20-%20%0D%0A%20%20%20%201.%20First%20have%20no%20clue%20what%20they%20are%20doing%0D%0A%20%20%20%202.%20Second%20are%20happy%20with%20what%20they%20have%0D%0A%20%20%20%203.%20Third%20are%20happy%20being%20followers%0D%0A%0D%0AThese%20people%20aren't%20dreamers.%20they%20are%20workforces.%0D%0A%0D%0AYou%2C%20**work%20for%20yourself**.%0D%0A%0D%0AIf%20you%20are%20not%20getting%20rewarded%2C%20screw%20the%20job%20in%20your%20mind.%0D%0ADo%20the%20minimum.%0D%0AGet%20your%20increment%20at%20the%20end%20of%20the%20year%20and%20**get%20the%20fuck%20out%20of%20there**.`;
        this.tags = [
  "codeofconduct",
  "smartwork over hardwork"
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
                className="SmartworkOverHardworkPage PageContent"
                dangerouslySetInnerHTML={this.getRawHTML()}></div>
        );
    }
}