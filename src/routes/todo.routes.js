const { getAllTodos, createTodo, getTodoById, deleteTodoById, UpdateTodoById } = require("../controller/todo.controller");

const router = require("express").Router();

router.route("/")
    .get(getAllTodos)
    .post(createTodo)

router.route("/:id")
    .get(getTodoById)
    .delete(deleteTodoById)
    .patch(UpdateTodoById)

module.exports = router;