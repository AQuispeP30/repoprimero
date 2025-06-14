import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { PresentacionComponent } from './pages/presentacion/presentacion.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,HeaderComponent,PresentacionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'proyecto-angular';
}
