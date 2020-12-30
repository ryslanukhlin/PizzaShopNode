import React, {useState} from "react"
import {
    AppBar,
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
    const classes = useStyle()
    const [openDrawer, setDrawer] = useState(false);

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
                        <ListItem button onClick={()=>setDrawer(false)}>
                            <ListItemText>Главная</ListItemText>
                        </ListItem>
                    </List>
                </SwipeableDrawer>
            </Drawer>
        </div>
    )
}

export default Navbar