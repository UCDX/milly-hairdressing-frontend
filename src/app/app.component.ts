import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Milly Hairdressing';

  ngOnInit() {
    document.addEventListener('readystatechange', this.setSidenav);
    window.addEventListener('resize', this.setSidenav);
  }

  //Establece la altura correcta para el contenido de la aplicación
  //la cual es jsuto después del toolbar.
  setSidenav() {
    let toolbar:any = document.getElementById('toolbar');
    let sidenav:any = document.getElementById('sidenav');
    sidenav.style.top = `${toolbar.offsetHeight}px`;
  }
}
