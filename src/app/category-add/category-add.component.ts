import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertifyService } from '../service/alertify.service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.scss']
})
export class CategoryAddComponent implements OnInit {
  Form: any;

  constructor(private service:AuthService,   private router: Router,private alertify: AlertifyService) { }

  ngOnInit(): void {
    this.Form = new FormGroup({
      category_name: new FormControl("", Validators.required),
      description: new FormControl("", Validators.required),
    });
  }

  onSubmit() {
   
    this.service.categoryAdd(this.Form.value).subscribe((res: any) => {
      
      this.alertify.Success(res.message);
      this.router.navigate(["./category"]);
    
      
    });
  }

}
