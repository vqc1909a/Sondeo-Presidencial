const express = require('express');
const path = require('path');
const app = express();
const connectDB = require('./config/db');
const bodyParser = require('body-parser');
const Votante = require('./models/VotanteModel');
const port = process.env.PORT || 5000;
connectDB();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));


app.use(express.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'))


app.get('/', (req, res) => {
  return res.render("indexView", {
    title: "Voto Libre"
  });
})
app.get('/sondeo', async (req, res) => {

  const acunaPromise = Votante.find({candidato: "acuna"});
  const forsythPromise = Votante.find({candidato: "forsyth"});
  const sotoPromise = Votante.find({candidato: "soto"});
  const humalaPromise = Votante.find({candidato: "humala"});
  const lescanoPromise = Votante.find({candidato: "lescano"});
  const guzmanPromise = Votante.find({candidato: "guzman"});
  const fujimoriPromise = Votante.find({candidato: "fujimori"});
  const aranaPromise = Votante.find({candidato: "arana"});
  const castillaPromise = Votante.find({candidato: "castilla"});
  const lopezPromise = Votante.find({candidato: "lopez"});
  const urrestiPromise = Votante.find({candidato: "urresti"});
  const mendozaPromise = Votante.find({candidato: "mendoza"});

  const [acuna, forsyth, soto, humala, lescano, guzman, fujimori, arana, castilla, lopez, urresti, mendoza ] = await Promise.all([acunaPromise, forsythPromise, sotoPromise, humalaPromise, lescanoPromise, guzmanPromise, fujimoriPromise, aranaPromise, castillaPromise, lopezPromise, urrestiPromise, mendozaPromise]);

  return res.render("sondeoView", {
    title: "Sondeo",
    acuna: JSON.stringify(acuna.length),
    forsyth: JSON.stringify(forsyth.length),
    soto: JSON.stringify(soto.length),
    humala: JSON.stringify(humala.length),
    lescano: JSON.stringify(lescano.length),
    guzman: JSON.stringify(guzman.length),
    fujimori: JSON.stringify(fujimori.length),
    arana: JSON.stringify(arana.length),
    castilla: JSON.stringify(castilla.length),
    lopez: JSON.stringify(lopez.length),
    urresti: JSON.stringify(urresti.length),
    mendoza: JSON.stringify(mendoza.length)
  });
})
app.get("/contacto", (req, res) => {
  return res.render('contactoView', {
    title: "Contacto"
  })
})

app.post('/enviar-datos', async (req, res) => {
  console.log(req.body);
  try{
    const votante = await Votante.findOne({dni: req.body.dni});
    if (votante) return res.status(404).send("VOTO YA REGISTRADO")
    await Votante.create(req.body);
    return res.status(200).send("Voto Exitoso");
  }catch(err){
    console.log(err.message);
    return res.status(404).send("INTENTELO DE NUEVO")
  }

})

app.use('/', (req, res) => {
  return res.render('pageNotFoundView', {
    title: "Page Not Found"
  });
})



app.listen(port, (req, res) => {
  console.log(`Server run on port ${port}`)
})