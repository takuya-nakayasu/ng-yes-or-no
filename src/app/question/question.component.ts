import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { YesnoWtfResponseEntity } from './yesno-wtf-response.entity';

/**
 * 質問フォームのコンポーネントクラス
 *
 * @export
 * @class QuestionComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
  @Output() answered = new EventEmitter<YesnoWtfResponseEntity>();

  public questionForm: FormGroup;
  public questionControl: FormControl;
  // 質問文の末尾に？が付いているか確認するフラグ
  public isNoQuestionMark: boolean;
  // YesNo.WTF APIのレスポンス結果を格納する
  public answer: YesnoWtfResponseEntity;

  constructor(private builder: FormBuilder,
    private http: HttpClient) {
      // 入力フォームの初期設定を行う
      this.createForm();
  }

  public ngOnInit(): void {
    this.questionControl = this.questionForm.get('question') as FormControl;
  }

  /**
   * 入力フォームの設定を行う
   *
   * @private
   * @memberof QuestionComponent
   */
  private createForm() {
    this.questionForm = this.builder.group({
      question: ['', []]
    });

    // 入力フォームの値が変更された場合、500ミリ秒間隔で値を取得する
    this.questionForm.get('question').valueChanges.pipe(debounceTime(500))
    .subscribe((searchText) => {
        // 回答結果をリセット
        this.answer = undefined;
        // 回答結果を親に通知する
        this.notifyAnswer();
        if (searchText) {
          if (searchText.slice(-1) === '？' || searchText.slice(-1) === '?') {
            // 文末に？が入力されている場合、YesNo.WTF APIを呼び出す
            this.http.get('https://yesno.wtf/api').subscribe(
              (response: YesnoWtfResponseEntity) => {
                // レスポンス結果を取得して親に通知する
                this.answer = response;
                this.notifyAnswer();
            });
          } else {
            // 文末に？が入力されていない場合、バリデーションエラーメッセージを表示する
            this.questionControl.setErrors({'isNoQuestionMark': true});
          }
        }
      });
  }

  /**
   * 親コンポーネントに回答結果を通知する
   *
   * @private
   * @memberof QuestionComponent
   */
  private notifyAnswer() {
    this.answered.emit(this.answer);
  }
}
