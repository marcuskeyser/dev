import {Component} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import {TestComponent} from './test';
import {TestService} from './test.service';

@Component({
    selector: 'drp-app',
    templateUrl: "html/app.component.html",
    directives: [TestComponent],
    providers: [TestService,
                HTTP_PROVIDERS]

})


export class AppComponent {
    Title: string;
    constructor() {
        this.Title = 'Hello World';
    }
}