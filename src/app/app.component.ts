import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'overlay-eloadas';

  items: string[] = [];

  public ngOnInit(): void {
    for (let i = 0; i < 20; i++) {
      this.items.push(`item ${i}`);
    }
  }
}
