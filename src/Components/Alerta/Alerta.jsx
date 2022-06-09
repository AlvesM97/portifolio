import React from 'react';
import { IconButton, withStyles } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close';
import { Alert } from '@material-ui/lab';
class AlertCampoVazio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            temp: this.props.temp,
        }

    }

    handle = () => {
        this.props.close()
    }
    componentDidMount() {
        setTimeout(this.handle, this.props.temp);
    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.alertaStyle}>

                {this.state.temp > 0 &&
                    <Alert
                        variant="filled"
                        severity={`${this.props.type}`}
                        action={
                            <IconButton
                                aria-label="close"
                                color="inherit"
                                size="small"
                                onClick={() => { this.handle() }}
                            >
                                <CloseIcon fontSize="inherit" />
                            </IconButton>
                        }
                    >
                        {`${this.props.text}`}
                    </Alert>}
            </div>
        );
    }
}

const style = theme => ({

    alertaStyle: {
        zIndex: 100,
        position: "fixed",
        margin: "0 1em 1em 1em",
        bottom: 0,
        left: 0,
        zIndex:100000
    },

})

export default withStyles(style)(AlertCampoVazio)