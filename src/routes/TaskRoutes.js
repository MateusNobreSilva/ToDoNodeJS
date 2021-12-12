const express = require('express');
const router = express.Router();

const TaskController = require('../controller/TaskController');
const TaskValidation = require('../middlewares/TaskValidation');
const MacaddressValidation = require('../middlewares/MacaddressValidation');

router.post('/', TaskValidation, TaskController.create);
router.put('/:id', TaskValidation, TaskController.update);
router.get('/:id', TaskController.show);
router.delete('/:id', TaskController.delete);
router.put('/:id/:done', TaskController.done);

router.get('/filter/all/:macaddress', TaskController.all);
router.get('/filter/late/:macaddress', TaskController.late);
router.get('/filter/today/:macaddress', TaskController.today);
router.get('/filter/week/:macaddress', TaskController.week);
router.get('/filter/month/:macaddress', TaskController.month);
router.get('/filter/year/:macaddress', TaskController.year);

// router.get('/filter/all', MacaddressValidation, TaskController.all);
// router.get('/filter/late', MacaddressValidation, TaskController.late); 
// router.get('/filter/today', MacaddressValidation, TaskController.today); 
// router.get('/filter/week', MacaddressValidation, TaskController.week);
// router.get('/filter/month', MacaddressValidation, TaskController.month);
// router.get('/filter/year', MacaddressValidation, TaskController.year);
// {
// 	"macaddress": "11:11:11:11:11:11"
// }
module.exports = router;