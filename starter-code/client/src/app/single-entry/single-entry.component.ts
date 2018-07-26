import { Component, OnInit } from '@angular/core';
import { ListService } from 'services/list.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-entry',
  templateUrl: './single-entry.component.html',
  styleUrls: ['./single-entry.component.css'],
  providers: [ListService]
})
export class SingleEntryComponent implements OnInit {

  entry: object;


  constructor(public lS: ListService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params)=>{
      this.lS.getOne(params['id']).subscribe(entry=>{
        this.entry=entry
      })
    })
  }

}
