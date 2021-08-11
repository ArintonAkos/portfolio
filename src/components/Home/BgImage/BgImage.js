import React from 'react';
import { makeStyles } from '@material-ui/styles';
import ProgressiveImage from 'react-progressive-image-loading';
import Header from '../Header/Header';
import MainInfo from '../MainInfo/MainInfo';

const useStyles = makeStyles(() => ({
    bgImage: {
        height: '100vh',
        width: '100vw'
    }
}));

export default function BgImage() {
    const classes = useStyles();

    return (
        <ProgressiveImage
            preview="code-bg-tiny.jpg"
            src="code-bg.jpg"
            render={(src, style) => 
                <div style={Object.assign(style, { backgroundImage: `url(${src})` })} className={classes.bgImage} >
                    <Header />
                    <MainInfo />
                </div>
            }
        />
    );
}