const db = require('../models');

//Créer un message//

exports.createMessage = (req, res, next) => {

    let imagePost = '';
    if (req.file) {
        imagePost = `${req.protocol}://${req.get('host')}/images/${req.file.filename}`;
    }
    const message = new db.messages({
        title: req.body.title,
        content: req.body.content,
        urlImage: imagePost
    });

    message
        .save()
        .then(() => res.status(201).json({message: 'Publication réussie'}))
        .catch(error => res.status(400).json({error}));
};

//Récupération de toutes les sauces
exports.getAllMessages = (req, res, next) => {
    db.messages.findAll()
        .then((messages) => {res.status(200).json(messages);})
        .catch((error) => {res.status(400).json({error: error});
            }
        );
};

exports.deleteMessage = (req, res, next) => {
    console.log(req, res, next);
    db.messages.destroy({ where: { id: req.params.id } })
        .then(() => res.status(200).json({ message: 'Message supprimé' }))
        .catch(error => console.log(error));
};


