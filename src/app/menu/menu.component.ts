import { Component, OnInit } from '@angular/core';
import { AlertifyService } from '../service/alertify.service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  selectedItem: number = 1;
  category: any;
  items: any;

  constructor(private api: AuthService, private alertify: AlertifyService) { }

  ngOnInit(): void {
    this.api.getAllCategory().subscribe((res: any) => {

      this.category = res.data
      console.log(res.data);

      console.log(this.category);

    });
    this.getitem(this.selectedItem)

  }
  getitem(id) {
    this.api.getItems(id).subscribe(data => {
      this.items = data.data;
    });
  }

  delete(id) {
    this.alertify.Confirm('Are you sure want to void this record ?', 'Delete', () => {
      this.api.menudelete(id).subscribe((data:any) => {
        this.alertify.Success(data.message);
        this.ngOnInit();
      });
    })

  }

}
