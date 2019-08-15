import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Reactive Form
import { ReactiveFormsModule } from "@angular/forms";
// Driven Form
import { FormsModule} from '@angular/forms';

// App routing modules
import { AppRoutingModule } from './shared/routing/app-routing.module';

// App components
import { AppComponent } from './app.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';

// Firebase services + enviorment module
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

// Auth service
import { AuthService } from "./shared/services/auth.service";

import { ListSocioeducComponent } from './components/socioeduc/list-socioeduc/list-socioeduc.component';
import { ModalSocioeducComponent } from './components/socioeduc/modal-socioeduc/modal-socioeduc.component';
import { TopnavComponent } from './components/topnav/topnav.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { ModalUpdateSocioeducComponent } from './components/socioeduc/modal-update-socioeduc/modal-update-socioeduc.component';


@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    DashboardComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    ListSocioeducComponent,
    ModalSocioeducComponent,
    TopnavComponent,
    SidenavComponent,
    ModalUpdateSocioeducComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})

export class AppModule { }