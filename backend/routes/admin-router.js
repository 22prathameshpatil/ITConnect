const routerAdmin = require("express").Router();
const {handleAdminUsers ,handleDeleteUserById , handlegetUserById ,handleUpdateUserById ,handleAdminContacts, handleDeleteContactById} = require("../controllers/admin-controller");
const authMiddleware = require("../middlewares/auth-middleware");
const checkAdminMiddleware = require("../middlewares/admin-middleware");

routerAdmin.route('/users').get(authMiddleware,checkAdminMiddleware,handleAdminUsers);


routerAdmin.route('/users/:id').get(authMiddleware,checkAdminMiddleware,handlegetUserById);

routerAdmin.route('/users/update/:id').patch(authMiddleware,checkAdminMiddleware,handleUpdateUserById);

routerAdmin.route('/users/delete/:id').delete(authMiddleware,checkAdminMiddleware,handleDeleteUserById);

routerAdmin.route('/contacts').get(authMiddleware,checkAdminMiddleware,handleAdminContacts);

routerAdmin.route('/contacts/delete/:id').delete(authMiddleware,checkAdminMiddleware,handleDeleteContactById);


module.exports = routerAdmin;   