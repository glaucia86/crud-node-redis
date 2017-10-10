const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const redis = require('redis');

//Configurando a Porta da Aplicação:
const port = 8000;

//Iniciar a aplicação:
const app = express();

//Configuração da Vista da Aplicação:
app.engine('handlebars', express({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

