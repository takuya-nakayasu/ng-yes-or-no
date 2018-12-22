import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
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
