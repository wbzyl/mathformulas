Template.mathformulas.mathformulas = function() {
  var query =  MathFormulas.find({category: Session.get('selected_category')}, {sort: {timestamp: -1}});
  query.observe({
    added: function(mathformula) {
      window.setTimeout(function() {
        MathJax.Hub.Queue(["Typeset", MathJax.Hub, mathformula._id]);
      }, 500);
    }
  });
  return query;
};
