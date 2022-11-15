import decode from 'jwt-decode';


class AuthService {
    
    getUser() { // for profile authentication
      return decode(this.getToken());
    }
   
    loggedIn() { //login token
      const token = this.getToken();
      return token ? true : false;
    }
  
    getToken() { //get login token from local storage
      return localStorage.getItem('id_token');
    }
  
    login(idToken) {
      localStorage.setItem('id_token', idToken);
      window.location.assign('/'); // takes the user to the '/' route after the idToken
    }
  
    logout() {
      localStorage.removeItem('id_token');
      window.location.reload(); // removes the token from local storage and reloads the page.
    }
  }
  
  export default new AuthService();