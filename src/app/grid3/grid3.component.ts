import {Component, ViewEncapsulation} from '@angular/core';
import {RowClassArgs} from '@progress/kendo-angular-grid';

@Component({selector: 'app-grid3',
  styles: [`
    .grid3 {
     border: 3px solid green;
    }
  `],
  template: `
    <div class='grid3'>
      <kendo-grid
        #grid
        [data]="gridData"
        [reorderable]="true"
        style="height: 300px">

        <ng-template kendoGridToolbarTemplate>
          <button class="k-button"
            (click)="grid.reorderColumn(groupColumn, 2, { before: true })">
            Move the group column before the last one.
          </button>
        </ng-template>

        <kendo-grid-column-group #groupColumn title="Product Info">
          <kendo-grid-column
            field="ProductID"
            [width]="50"
            title="ID">
          </kendo-grid-column>

          <kendo-grid-column
            field="ProductName"
            title="Product Name">
          </kendo-grid-column>
        </kendo-grid-column-group>

        <kendo-grid-column
          field="UnitPrice"
          title="Unit Price"
          [width]="180"
          format="{0:c}">
        </kendo-grid-column>

        <kendo-grid-column
          field="Discontinued"
          title="Discontinued"
          [width]="100">
        </kendo-grid-column>
      </kendo-grid>
    </div>
  `})

/**
 *  Resizable and autoFit
 */
export class Grid3Component {
  public gridData: any[] = products;
}

const products = [
  {
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
