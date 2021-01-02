import React, {useState} from "react"
import {
    AppBar, Button,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemText,
    makeStyles, SwipeableDrawer,
    Toolbar,
    Typography
} from "@material-ui/core"
import MenuIcon from '@material-ui/icons/Menu'
import {useHistory} from "react-router-dom"

const useStyle = makeStyles((theme) => ({
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title:{
        flexGrow: 1
    },
    drawer:{
        width: 250
    }
}))

const Navbar = () => {

    const history = useHistory()
    const classes = useStyle()
    const [openDrawer, setDrawer] = useState(false)
    const arrNavbar = [
        {
            path: "/",
            title: "Home"
        },
        {
            path: "/contact",
            title: "Contact"
        },
        {
            path: "/about",
            title: "About"
        },
        {
            path: "/login",
            title: "Login"
        },
        {
            path: "/register",
            title: "Register"
        }
    ]

    const pushRouter = (item) => {
        setDrawer(false)
        history.push(item.path)
    }

    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        aria-label="menu"
                        color="inherit"
                        className={classes.menuButton}
                        onClick={() => {setDrawer(true)}}>
                        <MenuIcon/>
                    </IconButton>
                    <Typography className={classes.title} variant="h6">MyBestPizza</Typography>
                </Toolbar>
            </AppBar>
            <Drawer open={openDrawer} variant="persistent" anchor="left">
                <SwipeableDrawer onClose={()=>setDrawer(false)} onOpen={()=>setDrawer(true)} open={openDrawer}>
                    <List className={classes.drawer}>
                        {arrNavbar.map( (item, index) =>
                            <ListItem key={index} button onClick={pushRouter.bind(this, item)}>
                                <ListItemText>{item.title}</ListItemText>
                            </ListItem>
                        )}
                    </List>
                </SwipeableDrawer>
            </Drawer>
        </div>
    )
}

export default Navbar