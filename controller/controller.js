const {products} =  require('../db/db.json');

//operaciones sobre la base de datos " no relamente"

module.exports = {
///Estas funciones se exportan

  getproducts: (req,res) =>{
    console.log({products});
    //res.json({Holi:2323 ,cosaschingonas : []});
    res.json({products : products});
    //res.json({products : products}+{Holi:2323 ,cosaschingonas : []});
  },

  addproducts: (req,res) =>{
    console.log("reciviendo datos "+JSON.stringify(req.body));
    const {name} = req.body;
    //agregar elementos a productos
    products.push({
      name,
      id : products.length
    });

    res.json({"status":'success',"msg":"agregacion de elemento completa"});
  },

  updateproducts:(req,res) =>{
    console.log(req.params.id);
    const { id } = req.params;
    const {name} = req.body;

    products.forEach((products,i) =>{
      if (products.id === Number(id)){
        products.name = name;
      }
    });
    res.json({"status":'success',"msg":"cambio de elemento completa"});
  },
  deleteproducts:(req,res) =>{
    const { id } = req.params;
    products.splice(id,1);
    res.json({"status":'delete',"msg":"cambio de elemento completa"});

  }

}
