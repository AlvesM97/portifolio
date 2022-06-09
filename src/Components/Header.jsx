import React from 'react';
import { Button, IconButton, Tooltip, withStyles } from '@material-ui/core'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }

    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <h1 style={{ fontSize: "2em", marginLeft: "1em" }}>Portfóli</h1>
                </div>
                <div style={{ textAlign: "end" }}>
                    <Button className={classes.buttons}>
                        Home
                    </Button>
                    <Button className={classes.buttons} href="src\Components\imagens\Currículo (1).pdf" download>
                        Baixar Curriculo
                    </Button>
                    <Button className={classes.buttons}>
                        Formas de contato
                    </Button>
                    <IconButton aria-label="Git Hub" style={{ margin: "1em", color: "black" }} href="https://github.com/AlvesM97" target="_blank">
                        <Tooltip title='Git Hub'>
                            <GitHubIcon />
                        </Tooltip>
                    </IconButton>
                    <IconButton aria-label="LinkedIn" style={{ margin: "1em", color: "black" }} href="https://www.linkedin.com/in/gustavo-morais-707554196/" target="_blank">
                        <Tooltip title='LinkedIn'>
                            <LinkedInIcon style={{ color: "black" }} />
                        </Tooltip>
                    </IconButton>
                    <IconButton aria-label="Instagram" style={{ margin: "1em", color: "black" }} href="https://www.instagram.com/gusta_morais97/" target="_blank">
                        <Tooltip title='Instagram'>
                            <InstagramIcon />
                        </Tooltip>
                    </IconButton>
                </div>
            </div>
        );
    }
}

const style = theme => ({
    root: {
        background: "#fafafa",
        width: "100%",
        boxShadow: "0px 1px 10px #424242",
        display: "flex",
        textAlign: "center",
        justifyContent: "space-between",
    },
    buttons: {
        marginLeft: "1em",
        borderRadius: "15px",
    },
})

export default withStyles(style)(Header)