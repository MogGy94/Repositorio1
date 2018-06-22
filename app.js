// node app.js

const  express =  require('express');
const app = express ();


// Operaciones del CRUD de



app.get('/',(req,res) => {
  res.send('index page');
});
// creacion de rutas de acceso al API
// Genera numeros aleatorios entre X y Y
app.get('/random/:numX/:numY',(req,res) => {
  let x = parseInt(req.params.numX);
  let y = parseInt(req.params.numY);

  if(isNaN(x)||isNaN(y)){
    res.status(404);
    res.json({"ERROR":'Not a big papu'})
  }

  console.log(x+"  "+y);
  var i = Math.random()*(y-x)+x;

  res.send('parametros enviados '+ i);

});

app.post('/',(req,res) => {
  res.send('guardando');
});
app.put('/',(req,res) => {
  res.send('actualizando');
});
app.delete('/',(req,res) => {
  res.send('eliminando');
});


app.listen(3000,() =>{
  console.log('server on port 3000');
});
