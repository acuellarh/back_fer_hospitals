/*
    Ruta: /api/usuarios
*/
const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');


const { getUsuarios, crearUsuario } = require('../controllers/usuarios');
const { validarJWT } = require('../middlewares/validar-jwt');

const router = Router();

router.get( '/', validarJWT ,getUsuarios);

router.post( '/',
    [
        check('nombre', 'El nombre es obligatorio').not().isEmpty(),
        check('password', 'El password es obligatorio').not().isEmpty(),
        check('email', 'El email es obligatorio').isEmail(),
        validarCampos,
    ], 
    crearUsuario 
);






module.exports = router;