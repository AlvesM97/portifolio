import React from 'react';
import { withStyles } from '@material-ui/core';
import Header from "./Header";
class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }

    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <Header />
                <div style={{ display: "inline-flex" }}>
                    <div className={classes.divIam}>
                        <h3 style={{ marginBottom: "1em" }}>Sobre mim</h3>
                        <p>
                            Com 16 anos comecei meu curso de TI no Senai, participei de algumas hackathon e de várias palestras,
                            aos 18 anos finalizei o curso de TI e no mesmo ano já entrei em Bacharelado de Engenharia de Software na UTFPR,
                            logo no início consegui meu primeiro estágio em uma empresa de Telemedicina, no começo eu estava fazendo fullstack
                            em projetos que eu atuava sozinho, projetos no qual seria telas para faturamento, cadastro de médicos,
                            unidades e instituições hospitalares, após pegar a base de como funciona a comunicação entre back e o front,
                            comecei a focar em Front-End, no comecei a me aprofundar cada vez mais por meio de cursos da Alura e da prática
                            ao longo dos dias.
                        </p>
                    </div>
                    <div style={{ maxWidth: "40%", }}>
                        {/* <img className={classes.image} src="https://perfil.napratica.org.br/assets/v2020/testepersonalidade-ecb5e49524e9a8fa30baa941fd74204dbb70f6a2dd751cee5d1b00aae9919cfe.png" alt="Italian Trulli" /> */}
                    </div>
                </div>
            </div>
        );
    }
}

const style = theme => ({
    root: {
        //background: "#eeeeee",
    },
    divIam: {
        //border: "1px solid #424242",
        //borderRadius: "10px",
        maxWidth: "45%",
        margin: "2em",
    },
    image: {

    },
})

export default withStyles(style)(Home)

