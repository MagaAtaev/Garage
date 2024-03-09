import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

interface NuiMessage {
  act: string
  payload: any
}

interface NuiResponse {
  code: number
  data: any
}

@Injectable({
  providedIn: 'root'
})
export class NuiService {
  private url = "http://ui-gta/"

  public readonly nuiMessage = new Subject<NuiMessage>();

  constructor(private http: HttpClient) {
    window.addEventListener("message", event => {
      console.log(event)
      this.nuiMessage.next(event.data)
    })
  }

  getCarlist() {
    const j = {
      act: "getCarlist"
    }
    return this.http.post<NuiResponse>(this.url + "carshop", j)
  }

  closeCarshop() {
    const j = {
      act: "closeCarshop"
    }
    return this.http.post<NuiResponse>(this.url + "carshop", j)
  }
}