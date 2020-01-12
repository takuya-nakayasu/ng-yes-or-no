import { TestBed } from "@angular/core/testing";

import { SpinnerInterceptor } from "./spinner-interceptor";

describe("SpinnerInterceptor", () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it("should be created", () => {
    const service: SpinnerInterceptor = TestBed.get(SpinnerInterceptor);
    expect(service).toBeTruthy();
  });
});
