import { NgModule } from '@angular/core';

import { TabMenuModule } from 'primeng/tabmenu';
import { AccordionModule } from 'primeng/accordion';

@NgModule({
  declarations: [],
  exports: [TabMenuModule, AccordionModule],
  imports: [TabMenuModule, AccordionModule],
})
export class PrimengModule {}
