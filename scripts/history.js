(function() {
    var state = { 'data_1': 1, 'data_2': 2 };
    var title = 'Hello World';
    var url = '#';

    history.pushState(state, title);
    history.pushState(state, title);
    history.pushState(state, title);
})();
