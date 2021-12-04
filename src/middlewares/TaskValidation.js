const TaskModel = require('../model/TaskModel');
const { isPast } = require('date-fns');

const TaskValidation = async(req, res, next) => {

    const { macaddress, type, title, description, when } = req.body;

    if (!macaddress) {
        return res.status(400).json({ error: 'Macadddres é obrigatório' });
    } else if (!type) {
        return res.status(400).json({ error: 'Type é obrigatório' });
    } else if (!title) {
        return res.status(400).json({ error: 'titulo é obrigatório' });
    } else if (!description) {
        return res.status(400).json({ error: 'description é obrigatório' });
    } else if (!when) {
        return res.status(400).json({ error: 'Data e Hora são obrigatório' });
    } else if (isPast(new Date(when))) {
        return res.status(400).json({ error: 'Escolha uma data e hora futura' });
    } else {
        next();
    }
}

module.exports = TaskValidation;