import React from 'react';
import { Dialog, DialogContent, withStyles } from '@material-ui/core';
import DialogTitle from '@material-ui/core/DialogTitle/DialogTitle';
import Image from './foto.jpg';
class Sobre extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }

    }

    render() {
        const { classes } = this.props;
        return (
            <div >
                <Dialog className={classes.root} open={this.props.open} onClose={this.props.close} fullWidth={true} maxWidth={"lg"}>
                    <DialogTitle>
                        <h1 style={{ fontSize: "1em", color: "#317bbb" }}> Sobre</h1>
                    </DialogTitle>
                    <DialogContent>
                        <div style={{ display: "flex" }}>
                            <div style={{ maxWidth: "45%", marginTop: "1em" }}>
                                Com 16 anos comecei meu curso de TI no Senai, participei de algumas hackathon e de várias palestras,
                                aos 18 anos finalizei o curso de TI e no mesmo ano já entrei em Bacharelado de Engenharia de Software na UTFPR,
                                logo no início consegui meu primeiro estágio em uma empresa de Telemedicina, no começo eu estava fazendo fullstack
                                em projetos que eu atuava sozinho, projetos no qual seria telas para faturamento, cadastro de médicos,
                                unidades e instituições hospitalares, após pegar a base de como funciona a comunicação entre back e o front,
                                comecei a focar em Front-End, no comecei a me aprofundar cada vez mais por meio de cursos da Alura e da prática
                                ao longo dos dias.
                            </div>
                            <div style={{ maxWidth: "100%", textAlign: "end" }}>
                                <img className={classes.imagen} src={Image} alt="foto" />
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
    },
    imagen: {
        width: "36%",
    },

})

export default withStyles(style)(Sobre)

