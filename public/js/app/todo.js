define(function() {

    function Todo(text) {
        this.text = text;
    }
    Todo.prototype.getText = function() {
        return this.text;
    };
    Todo.prototype.setText = function(text) {
        this.text = text;
    };
    return Todo;

});