import { Component, OnInit } from '@angular/core';
import { YesnoWtfResponseEntity } from '../question/yesno-wtf-response.entity';

@Component({
  selector: 'app-yesno',
  templateUrl: './yesno.component.html',
  styleUrls: ['./yesno.component.scss']
})
export class YesnoComponent implements OnInit {
  public answer: YesnoWtfResponseEntity;

  constructor() { }

  ngOnInit() {
  }

  public receiveAnswer(answer: YesnoWtfResponseEntity) {
    this.answer = answer;
  }

}
