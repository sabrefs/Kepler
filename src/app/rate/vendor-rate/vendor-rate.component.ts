import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocomplete, MatAutocompleteDefaultOptions, MatAutocompleteTrigger } from '@angular/material/autocomplete';
import { MatDialog } from '@angular/material/dialog';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { Observable, map, startWith } from 'rxjs';

@Component({
  selector: 'mat-dialog',
  templateUrl: './location-dialog.html',
})
export class DialogElementsExampleDialog {}

@Component({
  selector: 'app-vendor-rate',
  templateUrl: './vendor-rate.component.html',
  styleUrls: ['./vendor-rate.component.scss'],
})
export class VendorRateComponent implements AfterViewInit{
  constructor(public dialog: MatDialog, private autocompleteTrigger: MatAutocompleteTrigger) {}
  myControl = new FormControl('');
  editData: any;

  @ViewChild(MatAutocomplete) matAutocomplete!: MatAutocomplete;
  @ViewChild('autocompleteInput') matAutocompleteTrigger!: MatAutocompleteTrigger;

  tableData = [
    {vendor:  "CONCORD INC", id: "1", job_title: 'Associate cloud developer', family: 'Development (Niche)', explevel: 'Junior', yoe: '0-2 Years', proflevel: 'Beginner', onsite: '20.00', dom: '100.00', offshore: '26.00', nearshore: ""},
    {vendor:  "CONCORD INC", id: "2", job_title: 'Associate Data Engineer', family: 'Development (Niche)', explevel: 'Junior', yoe: '0-3 Years', proflevel: 'Intermediate', onsite: '56.00', dom: '200.00', offshore: '26.00', nearshore: "60.00"},
    {vendor:  "CONCORD INC", id: "3", job_title: 'Associate DevOPS', family: 'Development (Niche)', explevel: 'Junior', yoe: '0-4 Years', proflevel: 'Intermediate', onsite: '34.00', dom: '130.00', offshore: '27.00', nearshore: "25.00"},
    {vendor:  "CONCORD INC", id: "4", job_title: 'Associate stack developer', family: 'Development (Niche)', explevel: 'Junior', yoe: '0-5 Years', proflevel: 'Expert', onsite: '60.00', dom: '160.00', offshore: '76.00', nearshore: ""},
    {vendor:  "PYRAMID CONSULTING IT(Mobile Team)", id: "5", job_title: 'Associate andriod developer', family: 'Development (Niche)', explevel: 'Junior', yoe: '0-5 Years', proflevel: 'Expert', onsite: '60.00', dom: '160.00', offshore: '76.00', nearshore: ""},
    {vendor:  "PYRAMID CONSULTING IT(Mobile Team)", id: "6", job_title: 'Associate ios developer', family: 'Development (Niche)', explevel: 'Junior', yoe: '0-2 Years', proflevel: 'Intermediate', onsite: '62.00', dom: '660.00', offshore: '76.00', nearshore: "90.00"},
    {vendor:  "PYRAMID CONSULTING IT(Mobile Team)", id: "7", job_title: 'Associate react developer', family: 'Development (Niche)', explevel: 'Junior', yoe: '0-3 Years', proflevel: 'Basic', onsite: '65.00', dom: '110.00', offshore: '86.00', nearshore: ""},
  ]

  vendor: any;
  options: any[] = [
    "CONCORD INC",
    "PYRAMID CONSULTING IT(Mobile Team)",
    "PYRAMID CONSULTING IT(Support Team)",
    "TATA CONSULTANCY SERVICES LIMITED",
    "AMERICAN CYBERSYSTEMS LNC - IT",
    "QUALITY SYSTEM INTEGRATOR(QS)"
  ];
  filteredOptions: Observable<string[]>;
  selectedValue: string = '';


  ngAfterViewInit() {
    this.selectFirstOption()
  }

  selectFirstOption() {
    if (this.options.length > 0) {
      this.myControl.setValue(this.options[0]);
    }
  }

  filterData(){
    return this.tableData.filter(e => e.vendor == this.myControl.value)
  }

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    ); 
  }

  openDialog() {
    this.dialog.open(DialogElementsExampleDialog);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  onOptionSelected(event: any) {
    this.selectedValue = event.option.value;
  }

  edit(data: any){
    document.getElementById('fdxl')?.classList.remove('col-sm-12');
    document.getElementById('fdxl')?.classList.add('col-sm-9');
    let fullId = document.getElementById('fdxr') as HTMLElement;
    fullId.style.display='block';

    this.editData = Object.assign({}, data);
  }

  close(){
    document.getElementById('fdxl')?.classList.remove('col-sm-9');
    document.getElementById('fdxl')?.classList.add('col-sm-12');
    let fullId = document.getElementById('fdxr') as HTMLElement;
    fullId.style.display='none';
  }

  apply(){
    let inx = this.tableData.findIndex(e => e.id == this.editData.id);
    this.tableData[inx] = this.editData;
    
    this.close();
  }
}