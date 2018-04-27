import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';

interface UserStats {
  stats: {
    ideas: number;
    views: number;
    posts: number;
  }[];
}

@Component({
  selector: 'dap-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {
  stats: UserStats;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getData()
      .subscribe(res => {
        this.stats = res.data.stats;
      });
  }
}
