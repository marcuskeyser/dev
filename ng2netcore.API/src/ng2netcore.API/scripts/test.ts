import {Component} from 'angular2/core';
import {IDataItem} from './IDataItem';
import {TestService} from './test.service';

@Component({
    selector: 'drp-test',
    templateUrl: 'html/test.component.html'
})


export class TestComponent {
    pageTitle: string = 'Title for: TestComponent';
    dataItems: IDataItem[];
    errorMessage: string;

    constructor(private _testService: TestService) {

    }

    ngOnInit(): void {
        this._testService.getDataItems()
            .subscribe(
                dataItems => this.dataItems = dataItems,
                error => this.errorMessage = <any>error
        );

    } 
}
