import {Component} from 'angular2/core';
import {IDataItem} from './IDataItem';
import {TestService} from './test.service'

@Component({
    selector: 'drp-test',
    templateUrl: 'html/test.component.html'
})


export class TestComponent {
    pageTitle: string = 'Title for: TestComponent';
    dataItems: IDataItem[];// = [{ "item1": "1", "item2": "2", "item3": "3" }, { "item1": "A", "item2": "B", "item3": "C" }];

    constructor(private _testService: TestService) {

    }

    ngOnInit(): void {
        this.dataItems = this._testService.getDataItems();
    } 
}
