import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';

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


@Component({
  selector: 'dap-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: User;
  followingTitle: string;
  followingCount: number;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getData()
      .subscribe(res => {
        this.user = res.data.userInfo;
      });
    this.dataService.getData()
      .subscribe(res => {
        this.followingTitle = res.data.followingTitle;
      });
  }
}
