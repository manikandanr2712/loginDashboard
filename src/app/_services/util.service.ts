// import angular dependencies
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
    providedIn: 'root'
})
export class UtilService {

    constructor(private jwtHelper: JwtHelperService) { }

    public isLoggedIn(): boolean {
        const token = localStorage.getItem('token');
        // check for token expiry, will fail for no token or invalid token
        try {
            if (!this.jwtHelper) {
                this.jwtHelper = new JwtHelperService();
            }
            // TODO token expiration from API
            return !!token; // !this.jwtHelper.isTokenExpired(token);
        } catch (e) {
            return false;
        }
    }
}
