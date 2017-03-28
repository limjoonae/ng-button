import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent }  from './app.component';

import { ButtonComponent } from './go-button/component/button.component';
import { CustomDisabledDirective, CustomMaxlengthDirective, CustomReadonlyDirective } from './go-directive/component/index';

import { ButtonDocument } from './go-button/doc/button.document';

const appRoutes: Routes = [
  {path: '', component: ButtonDocument}
];

@NgModule({
  imports:      [ 
    BrowserModule,
    RouterModule.forRoot(appRoutes, {useHash: true})
  ],
  declarations: [ 
    AppComponent,
    ButtonComponent,
    CustomDisabledDirective, CustomMaxlengthDirective, CustomReadonlyDirective,
    ButtonDocument,
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
