const {emptyOrNull} =  require('../helpers/validation');

module.exports = app => {
    
    const saveNewUserData = async (req, res) => {
        const user = {...req.body};
        if(req.params.id) user.id = req.params.id;
        
        try {
            emptyOrNull(user.name, 'Nome não informado');
            emptyOrNull(user.email, 'Email não informado');
            emptyOrNull(user.password, 'Senha não informada');
        } catch (error) {
            return res.status(400).send({message: error})
        };

        if(!user.id){
            app.database('users')
            .insert(user)
            .then(_ =>res.status(204).send())
            .catch(err => res.status(500).send(err))
        }else{
            app.database('users')
            .update(user)
            .where({id:user.id})
            .then(_ =>res.status(204).send())
            .catch(err => res.status(500).send(err))
        }

    }

    const getUser = (req, res) => {
        app.database('users')
        .select('id', 'name', 'email', 'password')
        .then(user => res.json(user))
        .catch(err => res.status(500).send(err))
    };

    const getUserById = (req, res) => {
        app.database('users')
        .select('id', 'name', 'email', 'password')
        .where({ id: req.params.id })
        .first()
        .then(user => res.json(user))
        .catch(err => res.status(500).send(err))
    }

    return {saveNewUserData, getUserById, getUser};
};
