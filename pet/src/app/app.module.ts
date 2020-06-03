// @ts-ignore
import { BrowserModule } from '@angular/platform-browser';
// @ts-ignore
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ShowPetComponent } from './show-pet/show-pet.component';
import { AwesomeCalculatorComponent } from './awesome-calculator/awesome-calculator.component';
import {FormsModule} from '@angular/forms';

// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    ShowPetComponent,
    AwesomeCalculatorComponent
  ],
    imports: [
        BrowserModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
