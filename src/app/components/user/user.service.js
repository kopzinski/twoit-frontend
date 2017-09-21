export class UserService {
  constructor($http) {
    'ngInject'
    this.$http = $http

    this.saveUserAndToken = (user, token) => {
      console.log('saving user data', user, token)
      // sessionStorage.user = { username: user.name, token: token }
      this.$http.defaults.headers.common.Authorization = 'JWT ' + token;
    }
  }
  authenticate( username, password ) {
    const userData = {
      name: username,
      password: password
    }

    // const config = {
    //   'Content-Type': 'application/json'
    // }

    return this.$http.post('http://localhost:3000/login', userData)
      .then(response => {
        console.log('response', response)
        this.saveUserAndToken(userData, response.data.token)
      }, errorResponse => {
        console.log(errorResponse)
        throw errorResponse
      });

  }
}
