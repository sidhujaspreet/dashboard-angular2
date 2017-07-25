import {Injectable} from '@angular/core';
import {Http, Headers} from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class LoginService {
    constructor (private _http: Http) {}

    login(userData: string){
    	let headers: Headers = new Headers();
    	headers.append("Authorization", "Basic " + btoa(userData));
    	headers.append("Content-Type", "application/x-www-form-urlencoded");
    	let url = "http://localhost:2000/login";
        return this._http.get(url, {headers: headers})
            .map(res => res.json());
    }
}