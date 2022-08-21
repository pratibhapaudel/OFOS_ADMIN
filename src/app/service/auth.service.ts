import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';

@Injectable()
export class AuthService {
    private _authenticated: boolean = false;
    path = '../../../assets/info.json'
    /**
     * Constructor
     */
    constructor(
        private _httpClient: HttpClient,

    ) {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    /**
     * Setter & getter for access token
     */
    set accessToken(token: string) {
        localStorage.setItem('token', token);
    }

    get accessToken(): string {
        return localStorage.getItem('token') ?? '';
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Forgot password
     *
     * @param email
     */


    /**
     * Reset password
     *
     * @param password
     */

    // credentials: { email: string; newPassword: string; oldPassword: string; confirmPassword: string }



    /**
     * Sign in
     *
     * @param credentials
     */

    /**
     * Sign in using the access token
     */


    /**
     * Sign out
     */
    signOut(): Observable<any> {
        // Remove the access token from the local storage
        localStorage.removeItem('token');
        localStorage.removeItem('name');
        // Set the authenticated flag to false
        this._authenticated = false;

        // Return the observable
        return of(true);
    }

    rootURL = "http://67.205.165.41/ofos/api";

    login(data) {
        console.log(data);
        var headers_object = new HttpHeaders();
        // headers_object.append();
        let username = data.username;
        let password = data.password;
        // headers_object.append();
        console.log(window.btoa(username + ":" + password));

        // const httpOptions = {
        //   headers: headers_object,
        // };
        // console.log(httpOptions);
        return this._httpClient.post(this.rootURL + "/auth.php", data, {
            headers: {
                "Content-Type": "text/plain",
                "Access-Control-Allow-Origin": "*",
                // "access-control-allow-origin": ""
                "Access-Control-Allow-Headers": "*",
                Accept: "*/*",
                Authorization: "Basic " + window.btoa(username + ":" + password),
            },
        });
    }
    registration(data: any) {
        return this._httpClient.post(this.rootURL + "/register.php", data);
    }
    categoryAdd(data: any) {
        return this._httpClient.post(this.rootURL + "/add_category.php", data);
    }
    categorydelete(id: any) {
        return this._httpClient.get(this.rootURL + `/delete_category.php?cat=${id}`);
    }

    menuAdd(data: any) {
        return this._httpClient.post(this.rootURL + "/add_menu.php", data);
    }
    menudelete(id: any) {
        
        return this._httpClient.get(this.rootURL + `/delete_menu.php?menu=${id}`,);
    }
    getItems(id): Observable<any> {
        return this._httpClient.get(this.rootURL + `/menu.php?cat=${id}`).pipe(
    
          )
      }
    
      getAllCategory(){
       return  this._httpClient.get(this.rootURL + '/category.php');
      }

    /**
     * Sign up
     *
     * @param user
     */


    /**
     * Unlock session
     *
     * @param credentials
     */


    /**
     * Check the authentication status
     */

}
