const express = require('express');
const db = require('./utils/database');
const initModels = require('./models/initModels');
const userRoutes = require('./router/user.routes');
const toDoRoutes = require('./router/toDo.routes');
const categoryRoutes = require('./router/category.routes');
const cors = require('cors');
const morgan = require('morgan');

initModels();

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

const PORT = 8000;

db.authenticate()
    .then( () => {
        console.log('Conexion a la base de datos ok')
    })
    .catch( (error) => {
        console.log(error)
    });

db.sync({alter: true})
    .then( () => {
        console.log('Base de datos sincronizada')
    })
    .catch( (error) => {
        console.log(error)
    });

app.use(userRoutes);
app.use(toDoRoutes);
app.use(categoryRoutes);

app.get('/', (req,res) => {
    res.send('Bienvenido a mi servidor')
});

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`)
});
