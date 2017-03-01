import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonComponent } from './component/button.component';
import { BootstrapClassService, CommonService } from 'go-service';
import { CustomDisabledDirective } from 'go-directive';

@NgModule({
  imports: [CommonModule],
  declarations: [
    ButtonComponent,
    CustomDisabledDirective
  ],
  providers: [ BootstrapClassService, CommonService],
  exports: [ButtonComponent]
})
export class ButtonModule {
    static forRoot(): ModuleWithProviders {
    return {
      ngModule: ButtonModule,
      providers: [ BootstrapClassService, CommonService]
    }
  }
}