export class App {
    configureRouter(config, router){
        config.title = "Spaghtti code";
        config.map([
            {route : ['', 'home'], moduleId : './home', 
            nav: true, title: 'Home'},
            {name : 'recipe', route : 'recipe/:id', moduleId : './recipe', 
            nav : false, title : 'Recipe details'},
            {route : 'weekly-menu', moduleId : './weekly-menu', 
            nav : true, title:'Weekly menu'}
        ]);

        this.router = router;
    }
} 