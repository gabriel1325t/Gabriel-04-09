module.exports = class NumberController {
    static async checkpar(req, res) {
        res.status(400).json({message: "Dados Invalidos"});
    
    }
    if(numbers % 2 === 0){
        res.status(400).json({message: "Este numero é par"});
    }

}