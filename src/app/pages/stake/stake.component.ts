import { Component, OnInit, OnDestroy, ViewChild, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import * as moment from 'moment';
import { MatDialog, MAT_DIALOG_DATA, MatPaginator, MatTableDataSource, MatSort } from '@angular/material';

@Component({
  selector: 'stake-page',
  templateUrl: './stake.component.html',
  styleUrls: ['./stake.component.css']
})
export class StakePageComponent implements OnInit, OnDestroy {
  block;
  mainData;
  totalSupply;
  totalStaked;
  moment = moment;
  trxArr = [];
  dataSource;
  displayedColumns = ['key', 'stakingamount', 'stakingtime'];
  spinner = false;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  /*@ViewChild(MatSort) sort: MatSort;*/

  constructor(private route: ActivatedRoute,
    protected http: HttpClient,
    public dialog: MatDialog) { }

  getStakeRecords() {
    this.spinner = true;
    this.http.get(`/api/v1/get_stakes/stakerecords`)
      .subscribe(
        (res: any) => {
          this.mainData = res;
          // this.time = this.moment(this.mainData.timestamp).format('MMMM Do YYYY, h:mm:ss a');
          if (this.mainData.rows && this.mainData.rows.length) {
            this.trxArr = this.createStakeArray(this.mainData.rows);

            let ELEMENT_DATA: Element[] = this.mainData.rows;
            console.log(ELEMENT_DATA.length)
            this.dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);
            // setTimeout(() => this.dataSource.paginator = this.paginator);
            //console.log(this.trxArr);                              
          }
          this.spinner = false;
        },
        (error) => {
          console.error(error);
          this.spinner = false;
        });
  };

  getTotalStaking() {
    this.spinner = true;
    this.http.get(`/api/v1/get_stakes/totalstaking`)
      .subscribe(
        (res: any) => {
          this.totalStaked = res.rows[0].totalstakedamount;
          this.totalSupply = res.rows[0].supply;
          console.log("this.maindata -----------> ", this.mainData)
          // if (this.mainData.transactions && this.mainData.transactions.length){
          //     this.trxArr = this.createTransactionsArray(this.mainData.transactions);

          //     let ELEMENT_DATA: Element[] = this.trxArr;
          //     console.log(ELEMENT_DATA.length)
          //     this.dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);
          //     setTimeout(() => this.dataSource.paginator = this.paginator);
          //     //console.log(this.trxArr);                              
          // }
          this.spinner = false;
        },
        (error) => {
          console.error(error);
          this.spinner = false;
        });
  };

  createStakeArray(data) {
    let result = [];

    data.forEach(elem => {
      result.push({
        key: elem.key,
        stakingamount: elem.stakingamount,
        stakingtime: elem.stakingtime
      });
    });
    return result;
  }

  openDialogMemo(event, data) {
    let result = data;
    let json = false;
    if (data.indexOf('{') >= 0 && data.indexOf('}') >= 0) {
      result = JSON.parse(data);
      json = true;
    }
    this.dialog.open(DialogDataMemo, {
      data: {
        result: result,
        json: json
      }
    });
  }

  ngOnInit() {
    this.block = this.route.params.subscribe(params => {
      this.getStakeRecords();
      this.getTotalStaking();
    });
  }

  ngOnDestroy() {
    this.block.unsubscribe();
  }
}

@Component({
  selector: 'dialog-data-memo',
  template: `
  <h1 mat-dialog-title>Memo</h1>
  <div mat-dialog-content>
      <ngx-json-viewer [json]="data.result" *ngIf="data.json"></ngx-json-viewer>
      <div *ngIf="!data.json">{{ data.result }}</div>
  </div>
`,
})
export class DialogDataMemo {
  constructor(@Inject(MAT_DIALOG_DATA) public data) { }
}

