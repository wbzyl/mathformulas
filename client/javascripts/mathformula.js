Template.mathformula.events = {
  'click article button.remove': function(event) {
    MathFormulas.remove(this._id);
    console.log('removed:', this._id);
  }
}


