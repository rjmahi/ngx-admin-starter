import { Component, OnInit } from '@angular/core';
import { StoApiAccessService } from '../../../services/sto-api-access.service';
import { ActivatedRoute } from '@angular/router';
import { STOModel } from '../../../models/sto-model';

@Component({
  selector: 'app-sto-billing-view',
  templateUrl: './sto-billing-view.component.html',
  styleUrls: ['./sto-billing-view.component.css'],
})
export class StoBillingViewComponent implements OnInit {
  constructor(public route: ActivatedRoute, public api: StoApiAccessService) {}
  firstMileGUID: string;
  stoDetails: STOModel;
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.firstMileGUID = params.get('id');
      this.getFirstMileDetailsByID();
    });
  }

  getFirstMileDetailsByID() {
    this.api.getSTORecordByID(this.firstMileGUID).subscribe(
      response => {
        if (response != null) {
          this.stoDetails = response;
        }
      },
      error => {
        console.error('Error Details:', error);
      },
    );
  }
}
