import React from 'react';
import { Remarkable } from 'remarkable';

export default class StopChasingGirlsPage extends React.Component {
    constructor(props) {
        super(props);
        this.md = `%23%23%23%20Why%3F%0D%0A%0D%0A-%20You%20waste%20way%20more%20time%20on%20girls%0D%0A-%20Think%20of%20all%20the%20girls%20you%20have%20texted%20with%3F%20How%20much%20time%20in%20vain!%0D%0A-%20Just%20because%20she%20is%20free%20doesn't%20mean%20she%20is%20going%20to%20be%20your%20gf.%0D%0A-%20You%20are%20not%20only%20guy%20texting%20her%0D%0A-%20You%20are%20ready%20to%20do%20anything%20for%20her%2C%20%0D%0A-%20You%20get%20to%20meet%20only%20IDIOT%20GIRLS%2C%20because%20smart%20ones%20are%20the%20ones%20you%20wont%20meet%20as%20you%20are%20royally%20fucking%20up%20your%20life.%0D%0AThey%20dont%20waste%20their%20time%20texting%20random%20people%0D%0A-%20You%20cant%20understand%20a%20girl%20because%20she%20too%20des%20not%20know%20what%20she%20is%20doing.%0D%0A-%20She%20is%20just%20living%20in%20the%20moment%2C%20that%20is%20a%20very%20dangerous%20person%20to%20pin%20your%20hopes%20on.%0D%0A-%20Because%20she%20will%20take%20away%20your%20focus%2C%20years%2C%20oppurtunities%20and%20happiness.%0D%0A-%20She%20makes%20self%20serving%20choice%20that%20fascinates%20her%20the%20most%20in%20that%20moment.%0D%0A-%20If%20you%20care%20about%20yourself%2C%20value%20yourself%2C%20have%20goals%20in%20your%20life%20and%20respect%20yourself%2C%0D%0Ayou%20will%20find%20a%20girl%20who%20loves%20you%20for%20who%20you%20are%20and%20will%20be%20independent.%0D%0A-%20To%20meet%20such%20people%20who%20have%20have%20also%20elevated%20themself%20from%20this%20shit%20hole%2C%0D%0Ayou%20will%20have%20to%20detach%20yourself%20from%20the%20life%20you%20are%20dissatisfied%20with%20right%20now.%0D%0A-%20Stop%20making%20compromises%2C%20make%20sacrifices%0D%0A-%20If%20you%20are%20already%20in%20a%20relationship%2C%20but%20are%20unhappy%2C%20your%20state%20of%20mind%20is%20affected%20by%20it.%0D%0AYou%20are%20unable%20to%20focus%2C%20dealing%20with%20her%20takes%20all%20your%20time%2C%20Then%20there%20are%20two%20options%0D%0A%0D%0A%20%201.%20Your%20life%0D%0A%20%202.%20A%20heck%20load%20of%20amount%20of%20time%20before%20she%20dumps%20your%20ass.%0D%0A%0D%0A-%20If%20your%20relationship%20isnt%20going%20well%2C%20it%20will%20end%2C%20because%20she%20is%20not%20enjoying%20it%20either%2C%20but%20you%20are%20%0D%0Aare%20bent%20upon%20following%20that%20compromising%20mindset%2C%20and%20dragging%20yourself%20with%20that%20relationship.%0D%0A-%20Get%20out%20of%20a%20relationship%20that%20is%20stopping%20you%20from%20giving%20your%20100%25.%0D%0A`;
        this.tags = [
  "codeofconduct",
  "stop chasing girls"
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
                className="StopChasingGirlsPage PageContent"
                dangerouslySetInnerHTML={this.getRawHTML()}></div>
        );
    }
}