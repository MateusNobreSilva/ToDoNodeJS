const MacaddressValidation = (req, res, next) => {
    if (!req.body.macaddress) {
        return res.status(400).json({ eror: 'macaddress é obrigatorio' });
    } else {
        next();
    }
};

module.exports = MacaddressValidation;