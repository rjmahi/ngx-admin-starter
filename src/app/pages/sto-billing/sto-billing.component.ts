import {
  Component,
  OnInit,
  ViewChildren,
  QueryList,
  TemplateRef,
} from '@angular/core';
import { StoHandlerService } from './../../services/sto-handler.service';
import { Observable } from 'rxjs';
import { STOModel, CompactSTOModel } from './../../models/sto-model';
import {
  SortableHeaderDirective,
  SortEvent,
} from './../../directives/sortable.directive';
import { DecimalPipe } from '@angular/common';
import { StoApiAccessService } from './../../services/sto-api-access.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NbDialogService } from '@nebular/theme';

@Component({
  selector: 'app-sto-billing',
  templateUrl: './sto-billing.component.html',
  styleUrls: ['./sto-billing.component.css'],
  providers: [DecimalPipe],
})
export class StoBillingComponent {
  stoRecords$: Observable<CompactSTOModel[]>;
  total$: Observable<number>;
  interfaceType: string;
  screenName: string;
  viewButtonName;
  userActionsDisabled = false;
  selectedModel: CompactSTOModel;
  @ViewChildren(SortableHeaderDirective) headers: QueryList<
    SortableHeaderDirective
  >;
  userName: string;
  constructor(
    public service: StoHandlerService,
    public route: ActivatedRoute,
    public router: Router,
    public api: StoApiAccessService,
    private dialogService: NbDialogService,
  ) {
    this.userName = localStorage.getItem('user');
    this.viewButtonName = 'View';
    this.route.paramMap.subscribe(params => {
      this.interfaceType = params.get('id');
      switch (this.interfaceType) {
        case 'sto':
          this.screenName = 'Stock Transfer Order Billing Interface';
          this.service.prepareData(0);
          break;
        case 'gateOut':
          this.screenName = 'Gate Out Pending Interface';
          this.viewButtonName = 'Confirm';
          this.service.prepareData(1);
          break;
        case 'gateOutHistory':
          this.screenName = 'Gate Out History Interface';
          this.service.prepareData(2);
          break;
        case 'receive':
          this.screenName = 'Goods Receipt Pending Interface';
          this.service.prepareData(3);
          break;
        case 'receiveHistory':
          this.screenName = 'Goods Receipt History Interface';
          this.service.prepareData(4);
          break;
      }

      if (this.userName === 'userA') {
        this.userActionsDisabled = true;
        if (this.interfaceType !== 'receive') {
          this.viewButtonName = 'View';
        } else if (this.interfaceType === 'receive') {
          this.viewButtonName = 'Confirm';
        }
      } else if (this.userName === 'userB') {
        this.userActionsDisabled = false;
        if (this.interfaceType !== 'gateOut') {
          this.viewButtonName = 'View';
        } else if (this.interfaceType === 'gateOut') {
          this.viewButtonName = 'Confirm';
        }
      }
    });
    this.stoRecords$ = service.stoRecords$;
    this.total$ = service.total$;
  }

  confirmDelete(model: CompactSTOModel, dialog: TemplateRef<any>) {
    this.selectedModel = model;
    this.dialogService.open(dialog, {
      context: 'Are you sure, you want to delete the record?',
    });
  }

  onSort({ column, direction }: SortEvent) {
    // resetting other headers
    this.headers.forEach(header => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });

    this.service.sortColumn = column;
    this.service.sortDirection = direction;
  }

  deleteSTORecord() {
    this.api.deleteSTORecord(this.selectedModel).subscribe(
      response => {
        if (response != null) {
          this.service.prepareData(0);
          this.selectedModel = null;
        }
      },
      error => {
        console.log('Un resolved error - ' + error);
      },
    );
  }

  routeSTO(id: string, type: string) {
    if (type !== '') {
      this.interfaceType = type;
      this.viewButtonName = 'Progress...';
    }
    this.router.navigate(['/pages/add', id, this.interfaceType]);
  }
}
