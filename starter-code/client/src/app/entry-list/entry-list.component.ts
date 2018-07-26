import { Component, OnInit } from '@angular/core';
import { ListService } from 'services/list.service';

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css'],
  providers: [ ListService ]
})
export class EntryListComponent implements OnInit {

  list: Array<object>;

  constructor(public listServ: ListService) { }

  ngOnInit() {
    this.listServ.getList().subscribe(list => {
      this.list = list;
    });
  }

  updateList(){
    this.listServ.getList().subscribe(list => {
      this.list = list;
    });
  }

}
