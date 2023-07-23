import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { BibleService } from 'src/app/services/bible.service';

@Component({
  selector: 'app-bible',
  templateUrl: './bible.page.html',
  styleUrls: ['./bible.page.scss'],
})
export class BiblePage implements OnInit {

  listVerses: string[] = [];
  reference: string = "";
  text: string = "";
  constructor(private bibleService: BibleService, private loadingCtrl: LoadingController) { }
  
  async ngOnInit() {
    const loading = await this.loadingCtrl.create({
      message: 'Wait...',
      duration: 30000
    });

    loading.present();
    this.bibleService.getVerses().then
    (response => {

      console.log("Data: "+response.data)
      response.data = JSON.parse(response.data);
      console.log(" References: "+response.data.reference)
      
      this.text = response.data.text;
      this.reference = response.data.reference;

      let verses: string = response.data.text;

      console.log("verses: "+verses);

      for(let i = 2; i <= 36; i++){
        console.log(i);
        let str: string[] = verses.split("("+i+")");

        let value: string = str[0].replace(/^\(\d+\)\s*/, '');

        this.listVerses.push(value);


        if(i == 36) {
          let value: string = str[1].replace(/^\(\d+\)\s*/, '');
          this.listVerses.push(value);
        }

        verses =  str[1];
      }

      console.log("taille "+this.listVerses.length);
      loading.dismiss();

    }).catch(error =>{
      loading.dismiss();
      console.log(error.error)
    })
  }



}


