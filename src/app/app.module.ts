import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAnalytics, provideAnalytics, ScreenTrackingService, UserTrackingService } from '@angular/fire/analytics';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { getAuth, provideAuth } from '@angular/fire/auth';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, provideFirebaseApp(() => initializeApp({"projectId":"appqr-database","appId":"1:120477303005:web:ce92fa4fe48c32560edb34","storageBucket":"appqr-database.appspot.com","apiKey":"AIzaSyAuVd6G46Jr16OZbYGdcZCZ6yovQntkCyA","authDomain":"appqr-database.firebaseapp.com","messagingSenderId":"120477303005","measurementId":"G-WMYN5ZCTYN"})), provideAnalytics(() => getAnalytics()), ScreenTrackingService, provideFirestore(() => getFirestore()), provideStorage(() => getStorage()), provideFirebaseApp(() => initializeApp({"projectId":"appqr-database","appId":"1:120477303005:web:e3d1d036093dde7d0edb34","storageBucket":"appqr-database.appspot.com","apiKey":"AIzaSyAuVd6G46Jr16OZbYGdcZCZ6yovQntkCyA","authDomain":"appqr-database.firebaseapp.com","messagingSenderId":"120477303005","measurementId":"G-VBVSBLLLXC"})), provideAuth(() => getAuth()), UserTrackingService],
  bootstrap: [AppComponent],
})
export class AppModule {}
