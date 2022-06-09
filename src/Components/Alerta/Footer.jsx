import React from 'react';
import { withStyles } from '@material-ui/core'

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
               <p>Footer</p>
            </div>
        );
    }
}

const style = theme => ({
    root: {
        background: "#232121",
        width: "100%",
        minHeight: "43.3em",
    },
})

export default withStyles(style)(Home)