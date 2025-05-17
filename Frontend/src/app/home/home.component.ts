import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AccountService } from '../_services';
import { Account } from '../_models';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent implements OnInit {
    account$!: Observable<Account | null>;

    constructor(private accountService: AccountService) { }

    ngOnInit() {
        this.account$ = this.accountService.account;
    }
}
