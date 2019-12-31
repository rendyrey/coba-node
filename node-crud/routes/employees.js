var express = require('express');
var router = express.Router();
var employee = require("../controllers/EmployeeControllers");

// get all employees
router.get('/',employee.list);
// get single employee by id
router.get('/show/:id',employee.show);
// create employee
router.get('/create',employee.create);
// save employee
router.post('/save',employee.save);
// edit employee
router.get('/edit/:id',employee.edit);
// edit update
router.post('/update/:id',employee.update);
// edit update
router.post('/delete/:id',employee.delete);

module.exports = router;