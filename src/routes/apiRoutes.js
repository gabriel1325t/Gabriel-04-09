//Importa o módulo Router de express
//Router sera utilizado para definir rotas especificas da aplicação
const router = require('express').Router();

//Importa a controller onde contém lógica relacionada a professores
const NumberController = require('../controllers/NumberController');

//Rota POST para '/teacher'
router.post('/Number/', NumberController.postNumber);
module.exports = router