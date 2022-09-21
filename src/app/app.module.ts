import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormularioLoginComponent } from './componentes/formulario-login/formulario-login.component';
import { LoginComponent } from './componentes/paginas/login/login.component';

// Importar archivo de rutas
import { APP_ROUTING } from './rutas/routes.module';
import { ServiciosApiService } from './servicios/servicios-api.service';
import { HomeComponent } from './componentes/paginas/home/home.component';
import { NavComponent } from './componentes/nav/nav.component';
import { AboutComponent } from './componentes/paginas/about/about.component';
import { LocationComponent } from './componentes/paginas/location/location.component';
import { BlogComponent } from './componentes/paginas/blog/blog.component';
import { ServicesComponent } from './componentes/paginas/services/services.component';
import { FranchiseComponent } from './componentes/paginas/franchise/franchise.component';
import { NofoundComponent } from './componentes/paginas/nofound/nofound.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { TextboxComponent } from './componentes/textbox/textbox.component';
import { ItemboxComponent } from './componentes/itembox/itembox.component';
import { AvatarComponent } from './componentes/avatar/avatar.component';
import { CardComponent } from './componentes/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioLoginComponent,
    LoginComponent,
    HomeComponent,
    NavComponent,
    AboutComponent,
    LocationComponent,
    BlogComponent,
    ServicesComponent,
    FranchiseComponent,
    NofoundComponent,
    FooterComponent,
    TextboxComponent,
    ItemboxComponent,
    AvatarComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    APP_ROUTING
  ],
  providers: [ServiciosApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
