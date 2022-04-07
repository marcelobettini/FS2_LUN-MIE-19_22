const { check, validationResult } = require("express-validator");

//creamos el middleware 
const validatorCreateUser = [
    check("name")
    .exists().withMessage("Name field required")
    .notEmpty().withMessage("Must contain values")
    .isAlpha('es-ES', { ignore: ' ' }).withMessage("Only letters")
    .isLength({ min: 2, max: 90 }).withMessage("Character count: min 2, max 90")
    .trim(), //sanitizer
    check("email")
    .exists().withMessage("Email is required")
    .trim()
    .isEmail().withMessage("Must be a valid email address")
    .normalizeEmail(), //sanitizer
    check("password")
    .exists()
    .notEmpty().withMessage("Password is required")
    .isLength({ min: 8, max: 20 }).withMessage("Character count: min 2, max 90")
    .trim(),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }
        return next() //si pasa las validaciones, sigue hacia el controlador (o hacia el siguiente middleware)

    }
]
module.exports = { validatorCreateUser }