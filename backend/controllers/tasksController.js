const Task = require('../models/task');

exports.getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.getAll();
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar tarefas' });
  }
};

exports.getTaskById = async (req, res) => {
  try {
    const task = await Task.getById(req.params.id);
    if (task) res.json(task);
    else res.status(404).json({ error: 'Tarefa não encontrada' });
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar tarefa' });
  }
};

exports.createTask = async (req, res) => {
  try {
    const newTask = await Task.create(req.body);
    res.status(201).json(newTask);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao criar tarefa' });
  }
};

exports.updateTask = async (req, res) => {
  try {
    const updatedTask = await Task.update(req.params.id, req.body);
    res.json(updatedTask);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao atualizar tarefa' });
  }
};

exports.deleteTask = async (req, res) => {
  try {
    await Task.delete(req.params.id);
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: 'Erro ao deletar tarefa' });
  }
};
