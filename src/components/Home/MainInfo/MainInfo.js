import React from 'react';
import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';

const useStyles = makeStyles(() => ({
    square: {
        width: 250,
        height: 250,
        left: '10vw',
        position: 'absolute',
        zIndex: 2
    },
    rectangle: {
        width: 500,
        height: 35,
        backgroundColor: '#0cead9',
        left: '15vw',
        top: 250,
        position: 'absolute',
        zIndex: 1
    },
    nameWrapper: {
        position: 'absolute',
        color: 'white',
        fontWeight: 'bold',
        fontSize: 30,
        top: 210,
        left: 'calc(10vw + 255px)'
    },
    rectangleText: {
        color: '#fff',
        fontSize: 16,
        paddingLeft: 10,
        paddingTop: 5,
        paddingBottom: 5,
        paddingRight: 10,
        textAlign: 'end'
    },
    squareImage: {
        objectFit: 'cover'
    },
    root: {
        height: 'calc(100vh - 73px)'
    },
    scroll: {
        position: 'absolute',
        bottom: 0,
        left: '50%',
        width: 40,
        height: 40,
        transform: 'translateY(-80px) translateX(-50%) rotate(45deg)',
    },
    scrollItem: {
        position: 'absolute',
        top: 0,
        left: 0,
        display: 'block',
        width: '100%',
        height: '100%',
        borderBottom: '2px solid #fff',
        borderRight: '2px solid #fff',
        animation: 'animateScroll 1.5s linear infinite'
    },
    firstChild: {
        transform: 'translate(-15px, -15px)',
        animationDelay: '-0.4s'
    },
    secondChild: {
        transform: 'translate(0, 0)',
        animationDelay: '-0.2s'
    },
    thirdChild: {
        transform: 'translate(15px, 15px)',
        animationDelay: '0s'
    }
}));

export default function MainInfo() {
    const classes = useStyles();
    
    return (
        <div className={classes.root}>
            <div className={classes.square}>
                <img width={250} height={250} src='/profile-photo.jpg' className={classes.squareImage} />
            </div>
            <div className={classes.rectangle}>
                <div className={classes.rectangleText}>Developer portfolio</div>
            </div>
            <div className={classes.nameWrapper}>
                Arinton Ákos
            </div>
            <div className={classes.scroll}>
                <div className={clsx(classes.scrollItem, classes.firstChild)} />
                <div className={clsx(classes.scrollItem, classes.secondChild)} />
                <div className={clsx(classes.scrollItem, classes.thirdChild)} />
            </div>
        </div>
    );
}