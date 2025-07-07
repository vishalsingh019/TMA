import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss'
})
export class UserDetailComponent implements OnInit {
  public detailData : any
  constructor(  private route: Router,
    private actRoute: ActivatedRoute,){}

  ngOnInit() {
    const navRoute = this.actRoute.snapshot.queryParams['nav'];
    if (navRoute !== undefined) {
      const navData = (JSON.parse(atob(navRoute)));
       this.detailData = navData
    }
  }
 


}
