import React from 'react';
import { Remarkable } from 'remarkable';

export default class AuthenticationWithLaravelPage extends React.Component {
    constructor(props) {
        super(props);
        this.md = `%23%20Authentication%20with%20laravel%0D%0A%0D%0A1.%20Create%20new%20%60laravel%60%20project%20by%20doing%20%60laravel%20new%20app%60%0D%0A2.%20install%20%60passport%60%20using%20%60composer%20require%20%60laravel%2Fpassport%60%0D%0A3.%20run%20%60php%20artisan%20migrate%60%0D%0A4.%20run%20%60php%20artisan%20passport%3Ainstall%60%0D%0A5.%20add%20%60HasApiTokens%60%20trait%20to%20%60User%60%20model%0D%0A6.%20change%20%60config%2Fauth.php%60%20so%20that%20it%20looks%20like%20following%20-%20%0D%0A%0D%0A%20%20%20%20%60%60%60php%0D%0A%20%20%20%20%20%20%20%20'api'%20%3D%3E%20%5B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20'driver'%20%3D%3E%20'passport'%2C%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20'provider'%20%3D%3E%20'users'%2C%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20'hash'%20%3D%3E%20false%2C%0D%0A%20%20%20%20%20%20%20%20%5D%2C%0D%0A%20%20%20%20%60%60%60%0D%0A%0D%0A7.%20Add%20a%20new%20route%20for%20login%20in%20%60api.php%60%20routes%20file%0D%0A%0D%0A%20%20%20%20%60%60%60php%0D%0A%20%20%20%20%20%20%20%20Route%3A%3Apost('%2Flogin'%2C%20'AuthController%40login')%3B%0D%0A%20%20%20%20%60%60%60%0D%0A%0D%0A8.%20Add%20new%20%60AuthController%60%20by%20running%20%60php%20artisan%20make%3Acontroller%20AuthController%60%20and%20add%20%60login%60%20method%20to%20it%20-%20%0D%0A%0D%0A%20%20%20%20%60%60%60php%0D%0A%20%20%20%20%20%20%20%20public%20function%20login(Request%20%24request)%0D%0A%20%20%20%20%20%20%20%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%24validator%20%3D%20Validator%3A%3Amake(%24request-%3Eall()%2C%20%5B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20'email'%20%3D%3E%20'exists%3Ausers%7Cemail%7Crequired'%2C%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20'password'%20%3D%3E%20'required'%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%5D)%3B%0D%0A%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20if%20(%24validator-%3Efails())%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20return%20response()-%3Ejson(%24validator-%3Eerrors()-%3Eall()%2C%20200)%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0D%0A%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20if%20(!auth()-%3Eattempt(%24validator-%3Evalidated()))%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20return%20response()-%3Ejson(%5B'message'%20%3D%3E%20'unauthorized'%5D%2C%20401)%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%20else%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%24token%20%3D%20auth()-%3Euser()-%3EcreateToken('PAT')-%3EaccessToken%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20return%20response()-%3Ejson(%5B'token'%20%3D%3E%20%24token%5D)%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0D%0A%20%20%20%20%20%20%20%20%7D%0D%0A%20%20%20%20%60%60%60%0D%0A%0D%0A9.%20You%20can%20now%20use%20the%20%60auth%3Aapi%60%20middleware%2C%20but%20for%20unauthenticated%20requests%20add%20following%20route%20to%20%60api.php%60%20-%20%0D%0A%0D%0A%20%20%20%20%60%60%60php%0D%0A%20%20%20%20%20%20%20%20Route%3A%3Aget('%2Flogin'%2C%20function%20()%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20return%20response()-%3Ejson(%5B'message'%20%3D%3E%20'unauthenticated!'%5D)%3B%0D%0A%20%20%20%20%20%20%20%20%7D)-%3Ename('login')%3B%0D%0A%20%20%20%20%60%60%60%0D%0A`;
        this.tags = [
  "php",
  "laravel",
  "authentication with laravel"
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
                className="AuthenticationWithLaravelPage PageContent"
                dangerouslySetInnerHTML={this.getRawHTML()}></div>
        );
    }
}