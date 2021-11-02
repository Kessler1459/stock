import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Provider } from '../classes/provider';

@Injectable({
    providedIn: 'root'
})
export class ProviderService {
    private apiUrl: string = "http://localhost:8080/providers";

    constructor(private http: HttpClient) { }

    getAll(): Observable<Provider[]> {
        return this.http.get<Provider[]>(this.apiUrl);
    }

    add(provider: Provider) {
        this.http.post(this.apiUrl, provider).subscribe((res) => console.log(res));
    }
}
