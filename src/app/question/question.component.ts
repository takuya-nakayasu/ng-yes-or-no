import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
  public questionForm: FormGroup;
  public questionControl: FormControl;
  public isNoQuestionMark: boolean;

  constructor(private builder: FormBuilder) {
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
        if (searchText) {
          if (searchText.slice(-1) === '？' || searchText.slice(-1) === '?') {
            console.log(searchText);
          } else {
            this.questionControl.setErrors({'isNoQuestionMark': true});
          }
        }
      });
  }
}
