import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
 
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class GlobalNavService {
 
    constructor(private http:HttpClient) {}
 
    getMenus(url) {
        return this.http.get(url);
    }
}