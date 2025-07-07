import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-user-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-table.component.html',
  styleUrl: './user-table.component.scss'
})
export class UserTableComponent implements OnInit {

  @Input() public jsonData: Record<string, any>[]  = []

  public tableKeys : any;
  public jsonDatakeys: any;
  editingCell: { row: number; key: string } | null = null;
  constructor(private router: Router) {
  }

  ngOnInit(): void {
   this.jsonDatakeys = [...new Set(this.jsonData.flatMap(obj => Object.keys(obj)))];
   this.tableKeys = this.jsonDatakeys.map((str: any) => str.charAt(0).toUpperCase() + str.slice(1));
   console.log(this.jsonDatakeys);
   console.log(this.jsonData)
  }


  saveEdit(event: Event, row: number, key: string): void {
    const value = (event.target as HTMLInputElement).value.trim();
    this.jsonData[row][key] = value;
    this.editingCell = null;
  }

  public rowClicked(items: any): void {
    console.log(items)
  }

  public isEditing(row: number, key: string): boolean {
    return this.editingCell?.row === row && this.editingCell?.key === key;
  }

  public navigateToDetails(item: any): void {
    // this.router.navigate(['/user-detail', item]);

    this.router.navigate(['/user-detail'], {
      queryParams: { nav: btoa(JSON.stringify(item)) },
    });
  }


  public stopClick(event: any): void {
    event.stopPropagation();
  }

  public enterEditMode(event: any, row: number, key: string): void {
    event.stopPropagation();
    this.editingCell = { row, key };
  }
}
