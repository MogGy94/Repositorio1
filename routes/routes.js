// las rutas Ulitizan los controladores para generar la funcionalidad es pecifica que es nesesaria
/**/
const express = require('express');
const router = express.Router();

const {
      getproducts,
      addproducts,
      updateproducts,
      deleteproducts
    } = require("../controller/controller");


// se agregan datos a una base de datos
// utilizando los petodos get par aobtener datos
// y post para poner los datos

router.route('/')
  .get(getproducts)
  .post(addproducts);

router.route('/:id')
  .put(updateproducts)
  .delete(deleteproducts);

  module.exports = router;
