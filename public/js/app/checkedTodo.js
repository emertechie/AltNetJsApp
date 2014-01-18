define([
    './todo',
    './extends'
], function(Todo, _extends) {

    return (function(_super) {

        _extends(CheckedTodo, _super);

        function CheckedTodo(text, checked) {
            _super.call(this, text);
            this.checked = checked;
        }
        CheckedTodo.prototype.getChecked = function() {
            return this.checked;
        };
        CheckedTodo.prototype.setChecked = function(checked) {
            this.checked = checked;
        };
        return CheckedTodo;

    }(Todo));
});
