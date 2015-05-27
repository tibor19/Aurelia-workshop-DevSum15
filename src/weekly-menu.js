import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';
// import {ImagePathValueConverter} from './converters';

@inject(HttpClient)
export class WeeklyMenu {

    constructor(http){
        this.http = http;
        this.recipes = null;
        this.url = 'http://recipewebapi.azurewebsites.net/api/recipes';
    }

    activate(){
        let weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
        this.http.get(this.url)
            .then(response => 
                this.recipes = response.content.map((recipe, index) => {
                    recipe.weekday = weekdays[index % weekdays.length];
                    return recipe;
                    })
                );
    }
}

export class ImagePathValueConverter {

    toView(value){
        return value && 'content/images/food/' + value + '.jpg';
    }
}

export class WeekDayValueConverter {

    toView(value){
        let weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
        return weekdays[value % weekdays.length];
    }
}