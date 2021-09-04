import { Component, OnInit } from '@angular/core';
import { Account } from 'src/app/entity/Account';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  dataSet: Account[] = [
    {
      id: 1,
      createTime: '2021-09-04T21:53:00'
    },
    {
      id: 2,
      createTime: '2021-09-01T12:34:56'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }
}
