import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';

interface Followee {
  followee: {
    userDisplayName: string;
    avatar: string;
    userId: number;
    url: string
  }[];
}

@Component({
  selector: 'dap-following',
  templateUrl: './following.component.html',
  styleUrls: ['./following.component.css']
})

export class FollowingComponent implements OnInit {
  followees: Followee;
  followingTitle: string;
  followingCount: number;
  showAll = false;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getData()
      .subscribe(res => {
        this.followees = res.data.followings;
        console.log('followees', this.followees);
      });

    this.dataService.getData()
      .subscribe(res => {
        this.followingCount = res.data.followingCount;
      });
    this.dataService.getData()
      .subscribe(res => {
        this.followingTitle = res.data.followingTitle;
      });
  }

  onShowAll() {
    this.showAll = !this.showAll;
  }

}
