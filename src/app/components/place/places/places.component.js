import templateUrl from './places.html'

export const placesComponent = {
  bindings: {
    // places: '<',
    // filter: '<',
  },
  templateUrl,
  controller: class PlacesComponent {
    constructor($state, $filter, PlaceService) {
      'ngInject'
      this.$state = $state
      this.self = this
      this.$filter = $filter
      this.PlaceService = PlaceService
      // this.places = []
      this.populatePlaces()
      
      // this.filteredPlaces = $filter('placesFilter')(this.places, this.$filter)
    }
    goToPlace(event) {
      this.$state.go('place', {
        id: event.placeId,
      })
    }

    populatePlaces() {
      return this.PlaceService.getAvailablePlaces()
        .then((response) => {
          console.log('response.data', response.data)
          this.self.places = response.data || []
        })
    }

  },
}
