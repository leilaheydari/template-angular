import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-send-contract',
    templateUrl: './send-contract.component.html',
    styleUrls: ['./send-contract.component.scss'],
    standalone: true,
    imports: [RouterLink, MatButtonModule]
})
export class SendContractComponent implements OnInit {
  contract1 : any;
  contract2 : any;
  isPendingReq = false;
  shopId : string = '';
  constructor(
    private store: Store<AppState>,
  ) {}

  RegisterContract(type : any) {}

  ngOnInit() {
  }

}
