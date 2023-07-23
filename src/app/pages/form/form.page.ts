import { Component, OnInit } from '@angular/core';
import { Survey } from 'src/app/models/survey';
import { SurveyService } from 'src/app/services/survey.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage implements OnInit {

  public surveyList: Survey[] = [];
  public surveyCreated: Survey = {
    name: "",
    birthday: "",
    description: ""
  };

  public isModalOpen: boolean = false;

  constructor(private surveyService: SurveyService) { }

  ngOnInit() {
    this.loadSurveys();
  }

  loadSurveys(){
    this.surveyService.surveysList().then(list => {
      this.surveyList = list;
    })
  }

  public showSurveyForm(){
    this.surveyCreated = {
      name: "",
      birthday: "",
      description: ""
    };

    this.isModalOpen = true;
  }

  public cancel(){
    this.isModalOpen = false; 
  }

  public save(){
    this.surveyService.saveSurvey(this.surveyCreated);
    this.loadSurveys(); 
    this.cancel();
  }

}
