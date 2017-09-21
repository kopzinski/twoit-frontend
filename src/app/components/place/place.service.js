// import firebase from 'firebase';

export class PlaceService {
  constructor($http) {
    'ngInject'

    this.$http = $http


  }
  getAvailablePlaces() {

    //just for test the first e2e version
    // const availablePlaces = [{
    //     id: 1,
    //     name: "place 1",
    //     votes: 7
    // },{
    //     id: 2,
    //     name: "place 2",
    //     votes: 12
    // }];

    return this.$http.get('http://localhost:3000/places');

    // return availablePlaces;
  }
}
