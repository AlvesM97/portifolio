import React from 'react';
import { Button, Dialog, DialogContent, IconButton, Tooltip, withStyles } from '@material-ui/core';
import DialogTitle from '@material-ui/core/DialogTitle/DialogTitle';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
class Contateme extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }

    }
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <Dialog open={this.props.open} onClose={this.props.close} fullWidth={true} maxWidth={"lg"} >
                    <DialogTitle>
                        <h1 style={{ fontSize: "1em", color: "#317bbb" }}>Contate-me</h1>
                    </DialogTitle>
                    <DialogContent>
                        <div style={{ display: "flex" }}>
                            <div>
                                <div style={{ display: "flex" }}>
                                    <Tooltip title='Gmail 1' className={classes.title}>
                                        <MailOutlineIcon style={{color: "#317bbb"}}/>
                                    </Tooltip>
                                    <p className={classes.conteudo}>gutomorais2002@gmail.com</p>
                                </div>
                                <div style={{ display: "flex" }}>
                                    <Tooltip title='Gmail 2' className={classes.title}>
                                        <MailOutlineIcon style={{color: "#317bbb"}}/>
                                    </Tooltip>
                                    <p className={classes.conteudo}>gustavo.dev2002@gmail.com</p>
                                </div>
                                <div style={{ display: "flex" }}>
                                    <Tooltip title='WhatsApp' className={classes.title}>
                                        <WhatsAppIcon style={{color: "#317bbb"}}/>
                                    </Tooltip>
                                    <p className={classes.conteudo}>(43) 9 9922-1812</p>
                                </div>
                            </div>
                            <div style={{ marginLeft: "10em" }}>
                                <div style={{ display: "flex" }}>
                                    <Tooltip title='Git Hub' className={classes.title}>
                                        <GitHubIcon style={{color: "#317bbb"}}/>
                                    </Tooltip>
                                    <a className={classes.conteudo} href={'https://github.com/AlvesM97/portifolio'} target="_blank">https://github.com/AlvesM97/portifolio</a>
                                </div>

                                <div style={{ display: "flex" }}>
                                    <Tooltip title='LinkedIn' className={classes.title}>
                                        <LinkedInIcon style={{color: "#317bbb"}} />
                                    </Tooltip>
                                    <a className={classes.conteudo} href={'https://www.linkedin.com/in/gustavo-morais-707554196/'} target="_blank">https://www.linkedin.com/in/gustavo-morais-707554196/</a>
                                </div>

                                <div style={{ display: "flex" }}>
                                    <Tooltip title='Instagram' className={classes.title}>
                                        <InstagramIcon style={{color: "#317bbb"}}/>
                                    </Tooltip>
                                    <a className={classes.conteudo} href={'https://www.instagram.com/gusta_morais97/'} target="_blank">https://www.instagram.com/gusta_morais97/</a>
                                </div>
                            </div>
                        </div>
                    </DialogContent>
                </Dialog>
            </div >
        );
    }
}

const style = theme => ({
    root: {
        // background: "#242424",
    },
    title: {
        marginBottom: "1em",
        
    },
    conteudo: {
        marginLeft: "10px",
        color: "black"
    },

})

export default withStyles(style)(Contateme)

