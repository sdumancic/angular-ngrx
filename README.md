# AngularNgrx

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Why NgRx

Single source of truth - entire application state is stored in single store

## Actions, Reducers, Selectors, Effects, Store

State is not updated from different places but from centralized place by dispatching actions
Actions are dispatched and they describe what is happening (add, remove..)

Reducers are pure functions (given the same input always return the same output and produce no side-effects) which accepts initial state and actions and result in new state object => state is immutable. By binding all components inputs to state properties we can set change detection to OnPush for all components which is performance boost

1. Components dispatch an action(s) - actions have 2 properties: type and payload
   2.1) If action does not trigger effect then reducer takes old state, action payload and return new state
   2.2) If action triggers effect then effect is triggered (for example api call), and effect emits another action (success or failure). Reducer steps in to handle this success or failure action
2. Store has new state, selectors are used to slice data from state
