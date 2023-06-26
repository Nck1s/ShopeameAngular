import { Component } from '@angular/core';
import { ServiceComponent } from 'src/app/service/service.component';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})



export class FilterComponent {
  @Output() filterChanged: EventEmitter<string> = new EventEmitter<string>();


  filterForm: FormGroup;

  brandList: any[] = [];

  constructor (private service:ServiceComponent, private fb: FormBuilder){
    service.getProducts().subscribe((data:any) => {
      this.brandList = [...new Set( data.map((e:any) => e.marca))];
    });

    this.filterForm = this.fb.group({
      brand: "",
      text: ""
    });

  }

  submitForm(){
    console.log(this.filterForm.value);
    this.filterChanged.emit(this.filterForm.value);
  }

}
