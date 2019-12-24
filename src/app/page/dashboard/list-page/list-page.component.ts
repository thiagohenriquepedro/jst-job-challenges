import { Component, OnInit } from '@angular/core';
import { UserModel } from '../../../../models/user.models';
import { Observable } from 'rxjs';
import { UserService } from '../../../service/user.service';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css']
})
export class ListPageComponent implements OnInit {
 _user: any[];
  constructor(private service: UserService) { }

  ngOnInit() {
   this.service.GetUser().subscribe(data => this._user = data);

  }

}
