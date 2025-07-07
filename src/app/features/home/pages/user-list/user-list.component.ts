
import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserTableComponent } from '../../components/user-table/user-table.component';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [UserTableComponent,CommonModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent implements OnInit {
public editTableFlag: boolean = false;
public jsonData : any
private service = inject(HomeService);
constructor(){}

ngOnInit(): void {
  this.service.getJSONData().subscribe({
    next: (res) => this.jsonData = res,
    error: (err) => console.error('API Not Working:', err)
  });
}

}
