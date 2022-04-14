const { getAllUsers, getUserById, registerNewUser, loginUser, deleteUserById, editUserById, changePasswordById } = require("./usersModel")
const notNumber = require("../utils/notNumber")
const { hashPassword, checkPassword } = require("../utils/handlePassword")
const { tokenSign, tokenVerify } = require("../utils/handleJWT")

//get all users 
const listAll = async (req, res, next) => {
    const dbResponse = await getAllUsers()
    if (dbResponse instanceof Error) return next(dbResponse);
    dbResponse.length ? res.status(200).json(dbResponse) : next()
};

//get user by id
const listOne = async (req, res, next) => {
    if (notNumber(req.params.id, next)) return;
    const dbResponse = await getUserById(+req.params.id)
    if (dbResponse instanceof Error) return next(dbResponse)
    dbResponse.length ? res.status(200).json(dbResponse) : next()

};

//Register new user //mostrar matchedData para evitar campos "extraños"
const register = async (req, res) => {
    const image = `${process.env.public_url}/${req.file.filename}`
    const password = await hashPassword(req.body.password)
    const dbResponse = await registerNewUser({ ...req.body, password, image })
    if (dbResponse instanceof Error) return next(dbResponse)
    const user = {
        id: req.body.id,
        name: req.body.name,
        email: req.body.email,
        image: req.body.image,
    }
    const tokenData = {
        token: await tokenSign(user, "2h"),
        user: user
    }
    res.status(201).json({ message: `User ${req.body.name} created!`, JWT: tokenData })
}

//Login
const login = async (req, res, next) => {
    const dbResponse = await loginUser(req.body.email);
    if (!dbResponse.length) return next();
    const passwordMatch = await checkPassword(req.body.password, dbResponse[0].password);
    if (passwordMatch) {
        const user = {
            id: dbResponse[0].id,
            name: dbResponse[0].name,
            email: dbResponse[0].email,
            image: dbResponse[0].image,
        }
        const tokenData = {
            token: await tokenSign(user, "2h"),
            user: user
        }
        res.status(200).json({ message: `User ${user.name} authorized `, JWT: tokenData })
    } else {
        const error = {
            message: "Unauthorized",
            status: 401
        }
        next(error)
    }
}

/* 
Importación de Nodemailer y configuración del transporte
*/
const nodemailer = require("nodemailer");
const res = require("express/lib/response");
const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: process.env.mailtrap_user,
        pass: process.env.mailtrap_pass
    }
});

//forgot password
const forgot = async (req, res, next) => {
    const dbResponse = await loginUser(req.body.email)
    if (!dbResponse.length) return next();
    //crear un magic-link con un token de seguridad
    const user = {
        id: dbResponse[0].id,
        name: dbResponse[0].name,
        email: dbResponse[0].email
    }
    const token = await tokenSign(user, "15m")
    const link = `${process.env.public_url}/users/reset/${token}`
    const mailDetails = {
        from: "tech-support@mydomain.com",
        to: user.email,
        subject: 'Password recovery info',
        html: `<h2>Password Recovery Service</h2>
        <p>To reset your password please click the link and follow instructions</p>
        <a href="${link}">Click here to reset password</a>
        `
    }
    transport.sendMail(mailDetails, (err, data) => {
        if (err) {
            let error = new Error()
            next(error)
        } else res.status(200).json({ message: `Hi ${user.name}, we've sent an email with instructions to ${user.email}` })
    })

}

//FORM -> reset password 
const reset = async (req, res, next) => {
    const { token } = req.params
    const tokenStatus = await tokenVerify(token)
    if (tokenStatus instanceof Error) {
        res.status(403).json({ message: "Token expired" })
    } else {
        res.render("reset", { tokenStatus, token })
    }
}

//Saves the new password
const saveNewPass = async (req, res, next) => {
    const { token } = req.params
    const tokenStatus = await tokenVerify(token)
    if (tokenStatus instanceof Error) return res.send(tokenStatus);
    const newPassword = await hashPassword(req.body.password_1)
    dbResponse = await changePasswordById(tokenStatus.id, newPassword)
    dbResponse instanceof Error ? next(dbResponse) : res.status(200).json({ message: `Password changed for user ${tokenStatus.name}` })
}

//delete user by id
const removeOne = async (req, res, next) => {
    if (notNumber(req.params.id, next)) return;
    const dbResponse = await deleteUserById(+req.params.id)
    if (dbResponse instanceof Error) return next(dbResponse);
    dbResponse.affectedRows ? res.status(204).end() : next()
}

//Edit user by id
const editOne = async (req, res, next) => {
    if (notNumber(req.params.id, next)) return;
    const image = `${process.env.public_url}/${req.file.filename}`
    const dbResponse = await editUserById(+req.params.id, { ...req.body, image })
    if (dbResponse instanceof Error) return next(dbResponse);
    dbResponse.affectedRows ? res.sendStatus(200) : next()
}

module.exports = { listAll, listOne, register, login, forgot, reset, saveNewPass, removeOne, editOne }