import React from 'react';
import { ButtonBase, Typography, withStyles } from '@material-ui/core';
import Sobre from './Dialogs/Sobre';
import Contateme from './Dialogs/Contateme';
import BackImage from './Imagens/Linguagem-programacao.jpg'

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            openSobre: false,
            openContateme: false,
            openExperiencia: false,
        }

    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>

                <ButtonBase
                    href='https://drive.google.com/file/d/1v-JhgZg8gfSTm95vE6eDnxw1Rou7L7FU/view?usp=sharing'
                    target="_blank"
                    focusRipple
                    key={0}
                    className={classes.image}
                    focusVisibleClassName={classes.focusVisible}
                    style={{
                        width: "33%",
                        backgroundColor: "#317bbb",
                    }}
                >
                    <span
                        className={classes.imageSrc}
                        style={{
                            backgroundImage: `url`,
                        }}
                    />
                    <span className={classes.imageBackdrop} />
                    <span className={classes.imageButton}>
                        <Typography
                            component="span"
                            variant="subtitle1"
                            color="inherit"
                            className={classes.imageTitle}
                        >
                            {"Baixar Curriculo"}
                            <span className={classes.imageMarked} />
                        </Typography>
                    </span>
                </ButtonBase>

                <ButtonBase
                    onClick={() => this.setState({ openSobre: true })}
                    focusRipple
                    key={0}
                    className={classes.image}
                    focusVisibleClassName={classes.focusVisible}
                    style={{
                        width: "34%",
                        backgroundColor: "#317bbb",
                    }}
                >
                    <span
                        className={classes.imageSrc}
                        style={{
                            backgroundImage: `url`,
                        }}
                    />
                    <span className={classes.imageBackdrop} />
                    <span className={classes.imageButton}>
                        <Typography
                            component="span"
                            variant="subtitle1"
                            color="inherit"
                            className={classes.imageTitle}
                        >
                            {"Sobre"}
                            <span className={classes.imageMarked} />
                        </Typography>
                    </span>
                </ButtonBase>

                <ButtonBase
                    onClick={() => this.setState({ openContateme: true })}
                    focusRipple
                    key={0}
                    className={classes.image}
                    focusVisibleClassName={classes.focusVisible}
                    style={{
                        width: "33%",
                        backgroundColor: "#317bbb",
                    }}
                >
                    <span
                        className={classes.imageSrc}
                        style={{
                            backgroundImage: `url`,
                        }}
                    />
                    <span className={classes.imageBackdrop} />
                    <span className={classes.imageButton}>
                        <Typography
                            component="span"
                            variant="subtitle1"
                            color="inherit"
                            className={classes.imageTitle}
                        >
                            {"Contate-me"}
                            <span className={classes.imageMarked} />
                        </Typography>
                    </span>
                </ButtonBase>


                {this.state.openSobre && <Sobre open={this.state.openSobre} close={() => this.setState({ openSobre: false })} />}
                {/* {this.state.openExperiencia && <Experiencia open={this.state.openExperiencia} close={() => this.setState({ openExperiencia: false })} />} */}
                {this.state.openContateme && <Contateme open={this.state.openContateme} close={() => this.setState({ openContateme: false })} />}
            </div >
        );
    }
}

const style = theme => ({
    // root: {
    //     background: "black",
    //     width: "100%",
    //     height: "100vh",
    //     display: "flex",
    //     justifyContent: "space-evenly",
    // },
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        minWidth: 300,
        width: '100%',
        height: "100vh",
        alignItems: "center",
        backgroundImage: `url(${BackImage})`,
    },
    divIam: {
        maxWidth: "45%",
        margin: "2em",
    },
    buttons: {
        fontSize: "2em",
        margin: "2em",
        color: "white",
        maxHeight: "25%",

    },
    image: {
        position: 'relative',
        height: 200,
        [theme.breakpoints.down('xs')]: {
            width: '100% !important', // Overrides inline-style
            height: 100,
        },
        '&:hover, &$focusVisible': {
            zIndex: 1,
            '& $imageBackdrop': {
                opacity: 0.15,
            },
            '& $imageMarked': {
                opacity: 0,
            },
            '& $imageTitle': {
                border: '4px solid currentColor',
            },
        },
    },
    focusVisible: {},
    imageButton: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: theme.palette.common.white,
    },
    imageSrc: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundSize: 'cover',
        backgroundPosition: 'center 40%',
    },
    imageBackdrop: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: theme.palette.common.black,
        opacity: 0.4,
        transition: theme.transitions.create('opacity'),
    },
    imageTitle: {
        position: 'relative',
        padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
    },
    imageMarked: {
        height: 3,
        width: 18,
        backgroundColor: theme.palette.common.white,
        position: 'absolute',
        bottom: -2,
        left: 'calc(50% - 9px)',
        transition: theme.transitions.create('opacity'),
    },
})

export default withStyles(style)(Home)

