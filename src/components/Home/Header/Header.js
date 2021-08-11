import { makeStyles } from '@material-ui/styles';
import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import { IconButton } from '@material-ui/core';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    header: {
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'flex',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20
    },
    stretch: {
        flexGrow: 1,
    },
    mediaButtons: {
        
    },
    headerText: {
        color: '#fff',
        fontSize: 16,
    },
    iconButton: {
        color: '#fff'
    }
});

const Header = () => {
    const classes = useStyles();

    return (
        <div className={classes.header}>
            <div>
                <p className={classes.headerText}>Arinton Ákos</p>
            </div>
            <div className={classes.stretch} />
            <div className={classes.mediaButtons}>
                <Link to={{  pathname: "https://web.facebook.com/arinton.akos/" }} target="_blank">
                    <IconButton className={classes.iconButton}>
                        <FacebookIcon />
                    </IconButton>
                </Link>
                <Link to={{ pathName: "https://www.instagram.com/arintonakos/" }} target="_blank">
                    <IconButton className={classes.iconButton}>
                        <InstagramIcon />
                    </IconButton>
                </Link>
                <Link to={{ pathName: "https://github.com/ArintonAkos"}} target="_blank">
                    <IconButton className={classes.iconButton}>
                        <GitHubIcon />
                    </IconButton>
                </Link>
            </div>
        </div>
    );
}

export default Header;