import { Component, ViewEncapsulation } from '@angular/core';
import { RowClassArgs } from '@progress/kendo-angular-grid';

@Component({
   selector: 'app-grid1',
   encapsulation: ViewEncapsulation.None,
   styles: [`
       .k-grid tr.even { background-color: #f45c42; }
       .k-grid tr.odd { background-color: #41f4df; }
       .grid1 {
            border: 3px solid orange;
       }
   `],
   template: `
     <div class='grid1'>
       <kendo-grid
          [data]="gridData"
          [rowClass]="rowCallback">
       </kendo-grid>
    </div>
   `
})

/**
    Basic Grid
*/
export class  Grid1Component {
   public gridData: any[] = products;

   public rowCallback(context: RowClassArgs) {
       const isEven = context.index % 2 === 0;
       return {
           even: isEven,
           odd: !isEven
       };
   }
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
