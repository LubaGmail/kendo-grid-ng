import { Component, ViewEncapsulation } from '@angular/core';
import { RowClassArgs } from '@progress/kendo-angular-grid';

@Component({
  selector: 'app-grid2',
  styles: [`
    .grid2 {
        border: 3px solid red;
    }
   `],
  template: `
    <div class='grid2'>
      <kendo-grid
          #grid
          [data]='gridData'
          [resizable]='true'
          style='height: 300px'>

          <ng-template kendoGridToolbarTemplate>
            <button class='k-button' (click)='grid.autoFitColumn(groupColumn)'>
                Auto-fit the group column
            </button>
          </ng-template>

          <kendo-grid-column-group #groupColumn title='Product Info'>
              <kendo-grid-column
                  field='ProductID'
                  [width]='50'
                  [minResizableWidth]='30'
                  title='ID'>
              </kendo-grid-column>

              <kendo-grid-column
                  field='ProductName'
                  title='Product Name'>
              </kendo-grid-column>
          </kendo-grid-column-group>

          <kendo-grid-column
              field='UnitPrice'
              title='Unit Price'
              [width]='180'
              filter='numeric'
              format='{0:c}'>
          </kendo-grid-column>

      </kendo-grid>
    </div>
  `
})

/**
 *  Resizable and autoFit
 */
export class Grid2Component {
  public gridData: any[] = products;
}

const products = [{
  'ProductID': 1,
  'ProductName': 'Chai',
  'UnitPrice': 18.0000,
  'Discontinued': true
}, {
  'ProductID': 2,
  'ProductName': 'Chang',
  'UnitPrice': 19.0000,
  'Discontinued': false
}
];
