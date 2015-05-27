import {inject} from 'aurelia-framework';
import {join} from 'aurelia-path';
import {HttpClient} from 'aurelia-http-client';

//@inject(HttpClient)
export class Recipe{

    static inject = [HttpClient];
    constructor(http){
        this.editMode = false;
        this.http = http;
        this.recipe = null;
        this.url = 'http://recipewebapi.azurewebsites.net/api/recipes';
    }

    activate(params){
        this.http.get(join(this.url, params.id))
            .then(response => this.recipe = response.content);
    }

    editRecipe(){
        this.editMode = true;
    }

    saveRecipe(){
        this.http.post(this.url, this.recipe).then(
            ()=> this.editMode = false);
    }
}