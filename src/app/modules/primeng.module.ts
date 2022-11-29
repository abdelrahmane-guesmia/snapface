import { NgModule } from '@angular/core';

import { TabMenuModule } from 'primeng/tabmenu';
import { AccordionModule } from 'primeng/accordion';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [],
  exports: [TabMenuModule, AccordionModule, CheckboxModule, ButtonModule],
  imports: [TabMenuModule, AccordionModule, CheckboxModule, ButtonModule],
})
export class PrimengModule {}
