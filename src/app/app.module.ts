import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from './app.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import 'hammerjs';
import { MenuComponent } from './menu/menu.component';
import { DishdetailComponent } from './dishdetail/dishdetail.component';
import { DishService } from './services/dish.service';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import {PromotionService} from './services/promotion.service';
import { LoginComponent } from './login/login.component';
import {MatCheckboxModule, MatDialogModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import {FormsModule} from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DishdetailComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    HomeComponent,
    ContactComponent,
    LoginComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatCheckboxModule,
    MatDialogModule,
    MatToolbarModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents: [
    LoginComponent
  ],
  providers: [DishService, PromotionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
