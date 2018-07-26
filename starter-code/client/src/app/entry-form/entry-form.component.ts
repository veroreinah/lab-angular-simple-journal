import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ListService } from 'services/list.service';

@Component({
  selector: 'app-entry-form',
  templateUrl: './entry-form.component.html',
  styleUrls: ['./entry-form.component.css'],
  providers: [ListService],
})
export class EntryFormComponent implements OnInit {
  @Output() onChange= new EventEmitter<void>();

  constructor(public lS: ListService) { }

  ngOnInit() {
  }

  submitForm(form){
    this.lS.createEntry({
      title: form.value.title,
      content: form.value.content
    }).subscribe(()=>{
      this.onChange.emit();
    })
  }
}
