import { Injectable } from '@angular/core';

@Injectable()
export class NameService {
    private _name = 'Matt';

    get name() { return this._name; }
}