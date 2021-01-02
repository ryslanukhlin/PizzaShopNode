import React, {useState} from "react"
import {Button, Checkbox, Container, FormControlLabel, makeStyles, TextField} from "@material-ui/core";

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

const Login = () => {
    const style = useStyles()
    const [count, setCount] = useState({
        name: true,
        email: false
    })
    return (
        <div>
            <Container>
                <div className={style.formWraper}>
                    <h2>Login</h2>
                    <form className={style.form} autoComplete="off">
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoFocus
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                        />
                        <FormControlLabel
                            className={style.radio}
                            control={<Checkbox color="primary"/>}
                            label="Remember"/>
                        <Button size="large" fullWidth color="primary" variant="contained">Sign In</Button>
                    </form>
                </div>
            </Container>
        </div>
    )
}

export default Login