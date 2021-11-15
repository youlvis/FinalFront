import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FibonacciComponent } from './Components/fibonacci/fibonacci.component';
import { FactorialComponent } from './Components/factorial/factorial.component';
import { CircleComponent } from './Components/circle/circle.component';
import { TriangleComponent } from './Components/triangle/triangle.component';
import { RectangleComponent } from './Components/rectangle/rectangle.component';
import { app_routing } from './app.routes';
import { MenuComponent } from './Shared/menu/menu.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { OperationsService } from './Service/operations.service';
import { HttpClientModule } from '@angular/common/http';





@NgModule({
  declarations: [
    AppComponent,
    FibonacciComponent,
    FactorialComponent,
    CircleComponent,
    TriangleComponent,
    RectangleComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    MatMenuModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatFormFieldModule,
    HttpClientModule,
    MatCardModule,
    MatCheckboxModule,
    // MatLabelModule,
    BrowserAnimationsModule,
    app_routing
  ],
  providers: [
    OperationsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
