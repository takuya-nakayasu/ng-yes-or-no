import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
  public questionForm: FormGroup;
  public questionControl: FormControl;

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
  }
}
