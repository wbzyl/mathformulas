Template.mathjax.events = {
  'click .save': saveMathFormula
}

function saveMathFormula(event) {
  var text = $('#text').val();
  if (text.trim() !== "") {
    var formula = {
      category: Session.get('selected_category'),
      text: text,
      timestamp: (new Date()).getTime()
    };
    MathFormulas.insert(formula, function(err, id) {
      if (err) console.log(err);
    });
  } else {
    alert("Empty formula was not saved!");
  }
}
