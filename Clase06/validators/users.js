const { check, validationResult } = require("express-validator");

/**
 * Trim y normalizeEmail son zanitizers,
 *  para más infomación ver {@link https://express-validator.github.io/docs/sanitization-chain-api.html documentación}
 */
const validatorCreateUser = [
    check("name")
    .exists().withMessage("Name field required")
    .trim() 
    .notEmpty().withMessage("Must contain values")
    .isAlpha('es-ES', { ignore: ' ' }).withMessage("Only letters")
    .isLength({ min: 2, max: 90 }).withMessage("Character count: min 2, max 90"),
    check("email")
    .exists().withMessage("Email is required")
    .trim()
    .isEmail().withMessage("Must be a valid email address")
    .normalizeEmail(),
    check("password")
    .exists()
    .trim()
    .notEmpty().withMessage("Password is required")
    .isLength({ min: 8, max: 20 }).withMessage("Character count: min 2, max 90"),
    (req, res, next) => {
        try {
            validationResult(req).throw()
            return next() //si pasa las validaciones, sigue hacia el controlador (o hacia el siguiente middleware)
        } catch (err) {
            console.log(err)
            res.status(400).json({ errors: err.array() })
        }
    }
]

module.exports = { validatorCreateUser }