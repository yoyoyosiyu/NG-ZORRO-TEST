import {Component, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {

  listOfData = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park'
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park'
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park'
    }
  ];

  confirm(data): void {
    this.listOfData.splice(this.listOfData.indexOf(data), 1);
    // this.listOfData = [];
    console.log(this.listOfData);
  }

  cancel(): void {
  }

  getTableData($event): void {
    const data = [];
    for (let i = 0; i < 20; i++) {
      data.push({
        key: '3',
        name: 'Joe Black',
        age: i + ($event - 1) * 20,
        address: 'Sidney No. 1 Lake Park'
      });
    }

    this.listOfData = data;
  }

}
