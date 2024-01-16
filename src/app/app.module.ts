import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { CertificatesComponent } from './certificates/certificates.component';
import { TrainingComponent } from './training/training.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { PartnersComponent } from './partners/partners.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    SkillsComponent,
    CertificatesComponent,
    TrainingComponent,
    ExperiencesComponent,
    PortfolioComponent,
    ContactComponent,
    PartnersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
