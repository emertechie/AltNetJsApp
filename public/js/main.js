requirejs.config({
    baseUrl: 'components',
    paths: {
        jquery: 'jquery/jquery.min',
        bootstrap: 'bootstrap/dist/js/bootstrap.min',
        app: '../js/app',
        microMustache: 'micro-mustache/micro-mustache.min'
    },
    shim: {
        bootstrap: {
            deps: ['jquery']
        }
    }
});

requirejs([
    'app/todo',
    'app/checkedTodo',
    'jquery',
    'microMustache'
], function(Todo, CheckedTodo, $) {

    var $todos = $('.todos');
    var $todoText = $('#todoText');

    $('#add').click(function() {
        var text = $todoText.val();
        var todo = new Todo(text);
        var $newEl = $(tmpl("todo_tmpl", todo));
        $todos.append($newEl);
        $todoText.val('');
    });

    $('#addChecked').click(function() {
        var text = $todoText.val();
        var todo = new CheckedTodo(text, true);
        var $newEl = $(tmpl("checked_todo_tmpl", todo));
        $todos.append($newEl);
        $todoText.val('');
    });
});
