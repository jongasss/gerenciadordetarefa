const db = require('../config/db');

module.exports = {
  getAll: async () => {
    const [rows] = await db.query('SELECT * FROM tarefas');
    return rows;
  },

  getById: async (id) => {
    const [rows] = await db.query('SELECT * FROM tarefas WHERE id = ?', [id]);
    return rows[0];
  },

  create: async (task) => {
    const { titulo, descricao, concluida } = task;
    const [result] = await db.query(
      'INSERT INTO tarefas (titulo, descricao, concluida) VALUES (?, ?, ?)',
      [titulo, descricao, concluida || false]
    );
    return { id: result.insertId, ...task };
  },

  update: async (id, task) => {
    const { titulo, descricao, concluida } = task;
    await db.query(
      'UPDATE tarefas SET titulo = ?, descricao = ?, concluida = ? WHERE id = ?',
      [titulo, descricao, concluida, id]
    );
    return { id, ...task };
  },

  delete: async (id) => {
    await db.query('DELETE FROM tarefas WHERE id = ?', [id]);
    return;
  }
};