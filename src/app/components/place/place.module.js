import { PlaceService } from './place.service';
import { places } from './places/places.module';

export const place = angular
  .module('twoit.components.place', [
    places,
  ])
  .service('PlaceService', PlaceService)
//   .directive('lengthCheck', lengthCheck)
  .name;
