Template.categories.categories = function() {
  var categories = MathFormulas.find().map(function(doc) {
    return doc.category;
  });
  return _.unique(categories).sort();
};

Template.categories.events = {
  'click .categories button': function(event) {
    var category = $(event.target).text().trim();

    console.log('selected category:', $(event.target).text().trim()); // debugging

    Session.set('selected_category', category);
    var button = $(event.target);
    button.addClass('btn-info');
    button.siblings().removeClass('btn-info');
    $('.categories input').val('').css('background-color', 'white');
  },
  'keydown .categories input': function(event) {
    var esc = event.which == 27,
        enter = event.which == 13,
        tab = event.which == 9,
        element = $(event.target);
    if (esc) {
      element.blur();
    } else if (enter || tab) {
      event.preventDefault();
      // save category
      var category = element.val().trim();
      if (category !== '' && _.indexOf(Template.categories.categories(), category) < 0) {
        alert('Category named "' + category + '" was created');
        Session.set('selected_category', category);
        $('.categories button').removeClass('btn-info');
        $('.categories input').css('background-color', '#5bc0de');
      } else {
        alert('Category name already taken or empty!');
      }
      element.blur();
    };
  }
}
