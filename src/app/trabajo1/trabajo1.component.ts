import { Component } from '@angular/core';
import { edgardoguapo } from 'src/app/services/edgardoguapo.service';

@Component({
  selector: 'app-trabajo1',
  templateUrl: './trabajo1.component.html',
  styleUrls: ['./trabajo1.component.css']
})
export class trabajo1Component {
 
  constructor (private ServiciosApi: edgardoguapo){}

  ngOnInit(){
    this.getApi()
  }


  getApi(){
    this.ServiciosApi.getApi()
    .subscribe(data=>{
      console.log(data);
    
    })
  }
}
