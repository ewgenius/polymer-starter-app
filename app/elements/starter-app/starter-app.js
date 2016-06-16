class StarterApp {
  beforeRegister() {
    this.is = 'starter-app'
    this.properties = {
      greeting: {
        type: String,
        value: 'Welcome!',
        notify: true
      }
    }
  }
}

Polymer(StarterApp)
