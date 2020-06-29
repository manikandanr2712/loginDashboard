import { UserService } from './_services/user.service';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthenticationService } from '../app/_services/authentication.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FlexLayoutModule } from '@angular/flex-layout';

import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import {MatTabsModule} from '@angular/material/tabs';
import {MatListModule} from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatChipsModule } from '@angular/material/chips';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ForgotComponent } from './forgot/forgot.component';
import { BasicAuthInterceptor } from './_helpers/basic-auth.interceptor';
import { fakeBackendProvider } from './_helpers/fake-backend';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgotComponent,
    HomeComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule, 
    ReactiveFormsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatChipsModule,
    MatButtonToggleModule,
    MatCardModule,
    MatInputModule,
    MatDialogModule,
    MatMenuModule,
    MatIconModule,
    MatSnackBarModule,
    MatDialogModule,
    MatSelectModule,
    MatTabsModule,
    MatFormFieldModule,
    HttpClientModule,
    MatListModule
  ],
  providers: [AuthenticationService,UserService,
    { provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptor, multi: true },
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
