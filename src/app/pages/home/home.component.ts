/**
 * Created by andrew.yang on 5/18/2017.
 */
import {OnInit, Component} from '@angular/core';
import {ActionServiceService} from '../../services/actions/action-service.service';

@Component({
    selector: 'home',
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  actions = [];

  constructor(private actionService: ActionServiceService) {
  }

  ngOnInit() {
    this.actionService.getActions().subscribe(res => {
      console.log(res);
      this.actions = res['data'];

    }, error => {
      console.log(error);
    });

  }

  myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
}
