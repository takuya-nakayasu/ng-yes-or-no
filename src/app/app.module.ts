import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { MatCardModule } from "@angular/material/card";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { QuestionComponent } from "./question/question.component";
import { AnswerComponent } from "./answer/answer.component";
import { YesnoComponent } from "./yesno/yesno.component";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { SpinnerInterceptor } from "./service/spinner-interceptor";
import { SpinnerComponent } from "./component/spinner/spinner.component";

@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    SpinnerComponent,
    AnswerComponent,
    YesnoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SpinnerInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
