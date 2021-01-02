import React, {useState} from "react"
import {Button, Container, makeStyles, Snackbar, TextField} from "@material-ui/core"
import Alert from '@material-ui/lab/Alert'

const useStyles = makeStyles( theme => ({
    formWraper:{
        height: "calc(100vh - 64px)",
        justifyContent:"center",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    form:{
        display: "flex",
        flexDirection: "column",
        width: "60%"
    },
    radio: {
        margin: "5px 0",
        marginLeft: "-11px"
    }
}))


const Register = () => {
    const style = useStyles()
    const [form, setForm] = useState({
        name:"",
        email:"",
        password:"",
        repeatPassword:"",
    })
    const [successReg, setSuccessReg] = useState(false)
    const [errorsReg, setErrorsReg] = useState({
        name: {status: false, msg: false},
        email: {status: false, msg: false},
        password: {status: false, msg: false},
        repeatPassword: {status: false, msg: false},
    })

    const changeForm = (event) => {
        const inputName = event.target.name
        setForm({
            ...form,
            [inputName]: event.target.value
        })
    }

    const register = () => {
        fetch('/api/register', {
            method: 'post',
            body: JSON.stringify(form),
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(response => {
                if (response.status === 200){
                    setSuccessReg(true)
                }
                else {
                    return response.json()
                }
            })
            .then(json => {
                const obj = {}
                json.errors.errors.map(item => {
                    obj[item.param] = {status: true, msg: item.msg}
                })
                setErrorsReg({...errorsReg, ...obj})
            })
    }
    return (
        <div>
            <Container>
                <div className={style.formWraper}>
                    <h2>Register</h2>
                    <form className={style.form} autoComplete="off">
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            label="name"
                            name="name"
                            autoFocus
                            value={form.name}
                            onChange={changeForm}
                            error={errorsReg.name.status}
                            helperText={errorsReg.name.msg}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            label="Email Address"
                            name="email"
                            autoFocus
                            value={form.email}
                            onChange={changeForm}
                            error={errorsReg.email.status}
                            helperText={errorsReg.email.msg}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            value={form.password}
                            onChange={changeForm}
                            error={errorsReg.password.status}
                            helperText={errorsReg.password.msg}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="repeatPassword"
                            label="repeatPassword"
                            type="password"
                            value={form.repeatPassword}
                            onChange={changeForm}
                            error={errorsReg.repeatPassword.status}
                            helperText={errorsReg.repeatPassword.msg}
                        />
                        <Button
                            size="large"
                            fullWidth
                            color="primary"
                            variant="contained"
                            style={{marginTop: 15}}
                            onClick={register}
                        >Sign Up</Button>
                    </form>
                </div>
                <Snackbar
                    open={successReg}
                    anchorOrigin={{vertical: 'bottom', horizontal: 'center'}}
                    autoHideDuration={6000}
                    onClose={() => setSuccessReg({
                        ...errorsReg,
                        ret: true
                    })}>
                    <Alert severity="success">Регистрация прошла успешно</Alert>
                </Snackbar>
            </Container>
        </div>
    )
}

export default Register