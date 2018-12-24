import { Component, OnInit, Input } from '@angular/core';
import { YesnoWtfResponseEntity } from '../question/yesno-wtf-response.entity';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.scss']
})
export class AnswerComponent implements OnInit {
  @Input() answer: YesnoWtfResponseEntity;

  constructor() { }

  ngOnInit() {
  }

}
