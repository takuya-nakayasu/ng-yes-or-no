import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { YesnoWtfResponseEntity } from './yesno-wtf-response.entity';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
  @Output() answered = new EventEmitter<YesnoWtfResponseEntity>();

  public questionForm: FormGroup;
  public questionControl: FormControl;
  public isNoQuestionMark: boolean;
  public answer: YesnoWtfResponseEntity;

  constructor(private builder: FormBuilder,
    private http: HttpClient) {
    this.createForm();
  }

  public ngOnInit(): void {
    this.questionControl = this.questionForm.get('question') as FormControl;
  }

  private createForm() {
    this.questionForm = this.builder.group({
      question: ['', []]
    });

    this.questionForm.get('question').valueChanges.pipe(debounceTime(500))
    .subscribe((searchText) => {
        this.answer = undefined;
        this.notifyAnswer();
        if (searchText) {
          if (searchText.slice(-1) === '？' || searchText.slice(-1) === '?') {
            console.log(searchText);
            this.http.get('https://yesno.wtf/api').subscribe(
              (response: YesnoWtfResponseEntity) => {
                this.answer = response;
                this.notifyAnswer();
            });
          } else {
            this.questionControl.setErrors({'isNoQuestionMark': true});
          }
        }
      });
  }

  private notifyAnswer() {
    this.answered.emit(this.answer);
  }
}
