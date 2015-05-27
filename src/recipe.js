import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';

@inject(HttpClient)
export class Recipe{

    constructor(http){
        this.http = http;
        this.recipe = null;
        this.url = 'data/recipe.json';
    }

    activate(){

    }
}