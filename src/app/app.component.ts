
import { RouterOutlet } from '@angular/router';
import { Component} from '@angular/core';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'UIResponseApplication';

}
