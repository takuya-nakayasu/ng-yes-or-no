import { Component, OnInit, Input } from '@angular/core';
import { YesnoWtfResponseEntity } from '../question/yesno-wtf-response.entity';

/**
 * YesNo.WTF APIのレスポンス（回答とGIF画像）を表示する
 * コンポーネントクラス
 *
 * @export
 * @class AnswerComponent
 */
@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.scss']
})
export class AnswerComponent {
  // YesNo.WTF APIのレスポンスを格納する
  @Input() answer: YesnoWtfResponseEntity;

  constructor() { }

}
