import { Component, OnInit } from '@angular/core';
import {ActionServiceService} from '../../services/actions/action-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-ajout-action',
  templateUrl: './ajout-action.component.html',
  styleUrls: ['./ajout-action.component.css']
})
export class AjoutActionComponent implements OnInit {

  action = {
    code:'',
    type:'',
    priorite:'',
    demandeur:'',
    prov_de:'',
    analy_causes:'',
      categorie:'',
    desc_prob:'',
    code_origine:''
  };

  constructor(private actionservice:ActionServiceService,private router:Router) { }

  ngOnInit() {
  }

  addAction(){

    this.actionservice.addAction(this.action).subscribe( res => {
      console.log(res);
      this.router.navigate(['home']);
    }, error => {
      console.log(error);
    });

  }

}
