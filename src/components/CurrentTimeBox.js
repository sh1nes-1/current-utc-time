import {Box, makeStyles, Typography} from "@material-ui/core";
import moment from "moment";
import {useEffect, useState} from "react";

const useStyles = makeStyles({
    root: {
        flex: '1 1 800px',
        padding: '10px 25px',
        margin: '10px 5px',
        display: 'flex',
        flexDirection: 'column'
    },
    verticalCenter: {
        flex: '1 1',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    currentDateTime: {
        textAlign: 'center',
    },
    timeDescription: {
        fontSize: '1.5rem',
        fontWeight: 600
    },
    time: {
        fontSize: '7rem',
        padding: 0,
        margin: 0,
        fontWeight: 600
    },
    date: {
        fontSize: '1.5rem'
    }
});

export default function CurrentTimeBox({ currentDateTime, utcOffset }) {
    const classes = useStyles();

    const currentTime = currentDateTime.format('HH:mm:ss');
    const currentDate = currentDateTime.format('dddd, DD MMMM YYYY');

    return (
        <Box bgcolor='white' className={classes.root}>
            <Typography variant='h1' className={classes.timeDescription}>
                Current time in UTC{utcOffset >= 0 ? '+' : '' }{utcOffset} time zone
            </Typography>

            <div className={classes.verticalCenter}>
                <div className={classes.currentDateTime}>
                    <Typography className={classes.time}>
                       {currentTime}
                    </Typography>
                    <Typography className={classes.date}>
                        {currentDate}
                    </Typography>
                </div>
            </div>
        </Box>
    );
}