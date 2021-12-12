const Usuario = require('../models/usuario.model');

module.exports = {
    async index(req, res) {
        const user = await Usuario.find();
        res.json(user);
    },
    async create(req, res) {
        const {nome_usuario, email_usuario, tipo_usuario, senha_usuario} = req.body;
        
        let data = {};

        let user = await Usuario.findOne({email_usuario});

        if(!user) {
            data = {nome_usuario, email_usuario, tipo_usuario, senha_usuario};
            user = await Usuario.create(data);
            return res.status(201).json(user);
        }else if(user) {
            return res.status(422).json({msg: 'Esse e-mail já existe!'});
        }else {
            return res.status(422).json({msg: 'Não foi possível cadastrar!'});
        }

    },
    async details(req, res) {
        const {_id} = req.params;
        const user = await Usuario.findOne({_id});
        res.json(user);
    },
    async update(req, res) {
        const {_id, nome_usuario, email_usuario, tipo_usuario, senha_usuario} = req.body;
        const data = {nome_usuario, email_usuario, tipo_usuario, senha_usuario};

        const user = await Usuario.findOneAndUpdate({_id}, data, {new: true});

        res.json(user);
        
    }
};