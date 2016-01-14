/// <reference path='../ts-definitions/elasticsearch.d.ts' />

import {Component} from 'angular2/core';
import elasticsearch from 'elasticsearch';

@Component({
    selector: 'my-app',
    template: '<h1>My First Angular 2 App</h1>'
})
export class AppComponent {

  private _client: elasticsearch.ClientInterface

  constructor() {
    this._client = elasticsearch.Client();
  }
}
