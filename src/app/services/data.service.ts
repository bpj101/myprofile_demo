import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

interface User {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  mobile: string;
  location: string;
  avatarpath: string;
  userId: number;
}

interface UserStats {
  stats: {
    ideas: number;
    views: number;
    posts: number;
  }[];
}

interface Followee {
  followee: {
    userDisplayName: string;
    avatar: string;
    userId: number;
    url: string
  }[];
}


@Injectable()
export class DataService {
  dataUrl = '/assets/data/data.json';
  allData: any = {};

  constructor(private http: Http) {
  }

  public getData(): Observable<any> {
    return this.http.get(this.dataUrl)
      .map((res: Response) => res.json());
  }
}
