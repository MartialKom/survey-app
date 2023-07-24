import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-identification',
  templateUrl: './identification.page.html',
  styleUrls: ['./identification.page.scss'],
})
export class IdentificationPage implements OnInit {
  public nom: String = "KOM KANMEGNE"
  public prenom: String = "Martial";
  public age: number = 21;
  public ville: String = "Yaoundé"
  public mail: String = "martialkom123@gmail.com"
  public tel: string = "+237 6 98 64 69 34"
  public matricule: string = "CM-UDS-22SCI1814"
   
  constructor() { }

  ngOnInit() {
  }

}
