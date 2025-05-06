require("colors");
var http = require("http");
var express = require("express");
var bodyParser = require("body-parser")
var mongodb = require("mongodb");

const MongoClient = mongodb.MongoClient;
const uri = `mongodb+srv://fagner:UCOrMIO6kjEnGFUM@aulabd.cjihvk4.mongodb.net/?retryWrites=true&w=majority&appName=AulaBD`;
const client = new MongoClient(uri, { useNewUrlParser: true });

var dbo = client.db("exemplo_bd");
var usuarios = dbo.collection("usuarios");

var app = express();
app.use(express.static('./public'));
app.use(bodyParser.urlencoded({extended: false }))
app.use(bodyParser.json())

var server = http.createServer(app);
server.listen(80);

console.log("Servidor rodando".rainbow);



// Exemplos de GET e POST

app.get('/inicio', function(requisicao, resposta){
    resposta.redirect('Aula_1/index.html')
})

app.post('/inicio', function(requisicao, resposta){
    resposta.redirect('Aula_1/index.html')
})

app.get('/cadastrar', function(requisicao, resposta){
    let nome = requisicao.query.nome;
    let email = requisicao.query.email;
    let senha = requisicao.query.senha;
    let nascimento = requisicao.query.nascimento;
    console.log(nome, email, senha, nascimento);

    resposta.render('resposta.ejs', 
        {mensagem: "Usuario cadastrado com sucesso!", usuario: nome, login: email})
})

app.post('/cadastrar', function(requisicao, resposta){
    let nome = requisicao.body.nome;
    let email = requisicao.body.email;
    let senha = requisicao.body.senha;
    let nascimento = requisicao.body.nascimento;
    console.log(nome, email, senha, nascimento);

    let data = {db_nome: nome, db_email: email, db_senha: senha, db_nascimento: nascimento}
    usuarios.insertOne(data, function(err){
        if(err){
            resposta.render('resposta.ejs', 
                {mensagem: "Erro ao cadastrar usuário!", usuario: nome, login: email})        
        }else{
            resposta.render('resposta.ejs', 
                {mensagem: "Usuario cadastrado com sucesso!", usuario: nome, login: email})
        }
    })
    
 })

app.get('/for_ejs', function(requisicao, resposta){
    let num = requisicao.query.num;
    resposta.render('exemplo_for.ejs',{tamanho: num});
})

app.post('/login', function(requisicao, resposta){
    let email = requisicao.body.email;
    let senha = requisicao.body.senha;

    console.log(email, senha);

    let data = {db_email: email, db_senha: senha};
    usuarios.find(data).toArray(function(err, items){

        if (items.length == 0) {
            resposta.render('resposta_usuario.ejs', {mensagem: "Usuário/senha não encontrado!"})
          }else if (err) {
            resposta.render('resposta_usuario.ejs', {mensagem: "Erro ao logar usuário!"})
          }else {
            resposta.render('resposta_usuario.ejs', {mensagem: "Usuário logado com sucesso!"})        
          };
    
    })
})