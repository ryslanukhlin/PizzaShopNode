const express = require("express")
const router = express.Router()
const User = require("../model/userModel")
const {check, validationResult} = require("express-validator")

router.post("/register",
    [
        check("name")
            .isString()
            .withMessage("имя должно состоять из слов")
            .isLength({min: 2, max: 20})
            .withMessage("имя должно иметь от 2 букв до 20"),
        check("email", "неправельнный ввод почты").isEmail(),
        check("password", "минимальная длина пароля 6 символов").isLength({min: 6}),
        check("repeatPassword").custom((value, {req}) => {
            if (value !== req.body.password) {
                throw new Error("паполи не совпадают")
            }
            return true
        })
    ], async (req, res) => {

    try {
        const errors = validationResult(req)

        if (!errors.isEmpty()){
            return res.status(400).json({
                errors
            })
        }

        const email = await User.findOne({email: req.body.email})

        if (email){
            return res.status(400).json({
                message: "пользователь с таким email уже сушествует"
            })
        }

        const user = new User({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
        })

        await user.save()
        return res.status(200).json({
            message: "вы успешно зарегистрировались"
        })
    } catch (e) {
        console.log(e)
        return res.status(400).json({
            message: "ошибка" + e
        })
    }
})

module.exports = router