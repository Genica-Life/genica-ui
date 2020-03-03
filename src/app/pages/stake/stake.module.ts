import { NgModule } from '@angular/core';
import { StakePageComponent, DialogDataMemo } from './stake.component';
import { MatAutocompleteModule,
         MatButtonModule,
         MatInputModule,
         MatPaginatorModule,
         MatProgressSpinnerModule,
         MatSelectModule,
         MatSortModule,
         MatTableModule,
         MatFormFieldModule,
         MatExpansionModule,
         MatDialogModule } from '@angular/material';
import { CommonModule } from '@angular/common';
import { appRoutes } from '../../main.router';
import { NgxJsonViewerModule } from 'ngx-json-viewer';
import { MainService } from '../../services/mainapp.service';
import { ActionsViewerModule } from '../../components/actions_view/action_viewer.module';

let imports = [
    MatAutocompleteModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatSortModule,
    MatTableModule,
    CommonModule,
    appRoutes,
    NgxJsonViewerModule,
    MatExpansionModule,
    MatDialogModule,
    ActionsViewerModule ];

@NgModule({
  declarations: [
    StakePageComponent,
    DialogDataMemo
  ],
  entryComponents: [StakePageComponent, DialogDataMemo],
  imports:  imports,
  providers: [MainService],
  bootstrap: [ StakePageComponent ]
})
export class StakePageModule {}


