var express = require('express');
var router = express.Router();

const db = require("../db");

router.get('/', function(req, res) {

  return res.send(db.getData("/todo"));
});

router.post('/', function(req, res) {
  const todoText = req.body.text;
  
  const index = db.getData("/index");
  const newId = index + 1;

  /* 
  SQL-Equivalent:
    INSERT INTO TODO (text, isCompleted)
    VALUES (text, false)
  */
  const result = db.push("/todo[]", {id: newId, text: todoText, isCompleted: false}, true);
  db.push("/index", newId);

  res.send(result);
});

router.put('/:id', function(req, res) {
  const todoId = parseInt(req.params.id);
  const todoText = req.body.text;
  const isCompleted = req.body.isCompleted;

  /* 
  SQL-Equivalent:
    UPDATE TODO
    SET isCompleted = true
    WHERE id = todoId;
  */
  db.delete("/todo[" + db.getIndex("/todo", todoId) + "]");
  const result = db.push("/todo[]", {id: todoId, text: todoText, isCompleted: isCompleted}, true);

  res.send(result);
});

router.delete('/:id', function(req, res) {
  const todoId = parseInt(req.params.id);

  /* 
  SQL-Equivalent:
    DELETE FROM TODO 
    WHERE id = todoId;
  */
  const result = db.delete("/todo[" + db.getIndex("/todo", todoId) + "]");

  res.send(result);
});

module.exports = router;
