const uuidv4 = require('uuid/v4');

let tarefas = [
  { id: '1', nome: 'Aprender React', concluida: true },
  { id: '2', nome: 'Aprender Padroes de Projetos', concluida: false },
  { id: '3', nome: 'Aprender Javascript', concluida: false },
  { id: '4', nome: 'Aprender React usando Hooks', concluida: false },
];

function listarTarefasId(req, res) {
  const id = req.params.id;
  const tarefa = tarefas.filter(tarefa => tarefa.id === id);
  if (tarefa.length === 0) {
    res.status(404).json({ erro: 'Tarefa nao encontrada' });
  }
  res.status(tarefa[0]);
}
module.exports = {
  listarTarefasId
}


