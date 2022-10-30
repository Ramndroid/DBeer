# DBEER


### Folder structure *app*

- **Layout**: Module with structural components. There is usually only one instance of the elements throughout the application.
- **Material**: Module to load in one place all material modules. 
- **Modules**: Modules with the main functionalities of the application. For now there is only one module, the beer module.


### Modules/Beer
Main application module. Includes a beer search engine, and a list of cards representing the search result.
- **Components**: Elements for data visualization (card and dialog).
- **Interfaces**: Entities like beer or api search parameters. 
- **Pages**: Components used in app routing.
- **Pipes**: Includes a pipe, image, which adds an image of a bottle in the event that an element extracted from the api does not include an image.
- **Services**: Query with the punk API.


### Graphic & responsive engine
This app uses [Angular Flex Layout](https://github.com/angular/flex-layout) and [Material Angular](https://material.angular.io/).


### BEER API
The information of the beers is extracted from [The Punk API V2](https://punkapi.com/documentation/v2).



