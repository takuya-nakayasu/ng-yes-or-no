import { Component } from '@angular/core';
import { YesnoWtfResponseEntity } from '../question/yesno-wtf-response.entity';

@Component({
  selector: 'app-yesno',
  templateUrl: './yesno.component.html',
  styleUrls: ['./yesno.component.scss']
})
/**
 * 質問フォームと回答結果コンポーネントの親コンポーネント
 *
 * @export
 * @class YesnoComponent
 * @implements {OnInit}
 */
export class YesnoComponent {
  public answer: YesnoWtfResponseEntity;

  constructor() { }

  /**
   * 子コンポーネントから回答結果を取得する
   *
   */
  public receiveAnswer(answer: YesnoWtfResponseEntity) {
    this.answer = answer;
  }

}
