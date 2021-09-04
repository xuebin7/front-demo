import { Component, OnInit } from '@angular/core';
import { Expense } from 'src/app/entity/Expense';
import { Income } from 'src/app/entity/Income';

@Component({
  selector: 'app-account-detail',
  templateUrl: './account-detail.component.html',
  styleUrls: ['./account-detail.component.css']
})
export class AccountDetailComponent implements OnInit {
  income: Income[] = [
    {
      amount: 10,
      reason: '老板发红包'
    },
    {
      amount: 2345,
      reason: '发工资啦啦啦~'
    }
  ]
  expense: Expense[] = [
    {
      amount: 2.34,
      reason: '别问，问就是买买买'
    },
    {
      amount: 2.34,
      reason: '呵呵'
    },
  ]
  editable: boolean = false
  isVisible: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  inputDisabled() {
    return !this.editable
  }

  edit() {
    this.editable = true
  }

  save() {
    console.log('save to db...')
    this.editable = false
  }
}
