class Auth {
    constructor() {
      this.authenticated = false;
    }
  
    login(cb) {
      this.authenticated = true;
      localStorage.setItem('as',this.authenticated)
      cb();
    }
  
    logout(cb) {
      this.authenticated = false;
      localStorage.removeItem('as')
      cb();
    }
  
    isAuthenticated() {
      return this.authenticated;
    }
  }
  
  export default new Auth();