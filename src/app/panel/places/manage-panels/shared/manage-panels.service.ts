import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ManagePanelsService {
  constructor(
    private http: HttpClient,
  ) {}

}
