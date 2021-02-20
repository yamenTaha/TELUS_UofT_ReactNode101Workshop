const express = require('express');
const router = express.Router();

const db = require("../db");
const { getTodo, addTodo, updateTodo, deleteTodo } = require("../services/databaseService");

router.get('/', function(req, res) {
  /* 
  SQL-Equivalent:
    SELECT *
    FROM TODO
  */
  res.send([]);
});

router.post('/', function(req, res) {
  /* 
  SQL-Equivalent:
    INSERT INTO TODO (text, isCompleted)
    VALUES (text, false)
  */
  res.send([]);
});

router.put('/:id', function(req, res) {
  /* 
  SQL-Equivalent:
    UPDATE TODO
    SET isCompleted = true
    WHERE id = todoId;
  */
  res.send([]);
});

router.delete('/:id', function(req, res) {
  /* 
  SQL-Equivalent:
    DELETE FROM TODO 
    WHERE id = todoId;
  */
  res.send([]);
});

module.exports = router;
