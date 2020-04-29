import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { PeopleFormComponent } from './people-form/people-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PeopleListComponent } from './people-list/people-list.component';
import { PersonSharedProvider } from './shared/person-shared-provider';

export const options: Partial<IConfig> | (() => Partial<IConfig>) = null;

@NgModule({
  declarations: [
    AppComponent,
    PeopleFormComponent,
    PeopleListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgxMaskModule.forRoot(),
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [PersonSharedProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
