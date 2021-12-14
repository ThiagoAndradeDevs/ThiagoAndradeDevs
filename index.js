const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { application, response } = require('express');
const { listarTarefaId, listarTarefa } = require('./controllers/gerenciador-tarefas')


const app = express();
const port = 3001;
app.use(cors());
app.use(bodyParser.json());

// get, post, put, delete
function naoImplementado(req, res) {
  res.status(501).json({ erro: 'erro nao implementado.' })
}


//listar todas as tarefa  - get
app.get(' /gerenciador-tarefas', listarTarefa);
//listar uma tarefa por id -get
app.get('/gerenciador-tarefas/:id', listarTarefaId);
//cadastrar uma tarefa  -post
app.post('/gerenciador-tarefas', naoImplementado);
//atualizar uma tarefa- put
app.put('/gerenciador-tarefas/:id', naoImplementado);
//remover uma tarefa -delete
app.delete('/gerenciador-tarefas/:id', naoImplementado);
//concluir uma tarefa -put
app.put('/gerenciador-tarefas/:id/concluir', naoImplementado);


app.listen(port, () => console.log(`Servidor inicializado na porta ${port}`));