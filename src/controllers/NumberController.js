module.express = class NumberController {
    
  static async postNumber(req, res) {
    const { Numero } = req.body;
    if ( Numero % 2 ===0 ) {
      res.status(200).json({ message: "Número Par" });
    } else {
      res.status(200).json({ message: "Número Primo" });
    }
  }

};