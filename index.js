const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { application, response } = require('express');


const app = express();
const port = 3001;
app.use(cors());
app.use(bodyParser.json());

// get, post, put, delete
function naoImplementado(req, res) {
  res.status(501).json({ erro: 'erro nao implementado' })
}


//listar todas as tarefa  - get
app.get(' /gerenciador-tarefas', naoImplementado);
//listar uma tarefa por id -get
app.get('/gerenciador-tarefas/:id', naoImplementado);
//cadastrar uma tarefa  -post
//atualizar uma tarefa- put
//remover uma tarefa -delete
//concluir uma tarefa -put


app.listen(port, () => console.log(`Servidor inicializado na porta ${port}`));