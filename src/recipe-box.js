import {bindable} from 'aurelia-framework';

export class RecipeBoxCustomElement{

  @bindable contentToTheLeft;
  @bindable recipe;
}

export class ImagePathValueConverter {

  toView(value){
    return value && '/content/images/food/' + value + '.jpg';
  }
}

