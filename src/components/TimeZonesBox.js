import {Box, Button, List, ListItem, makeStyles, Typography} from "@material-ui/core";

const SEQUENCE = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const useStyles = makeStyles({
    root: {
        flex: '1 1 200px',
        margin: '10px 5px',
        padding: '10px 25px'
    },
    timeZonesText: {
        fontSize: '1.5rem',
        fontWeight: 600
    },
    timeZones: {
        columns: 2
    },
    listItem: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 0,
        margin: 0
    }
});

function TimeZoneButton(offset, onTimeZoneChanged) {
    const classes = useStyles();

    const btnText = `UTC${offset >= 0 ? '+' : ''}${offset}`;

    return (
        <ListItem key={btnText} className={classes.listItem}>
            <Button onClick={() => onTimeZoneChanged(offset)}>{btnText}</Button>
        </ListItem>
    )
}

export default function TimeZonesBox({ onTimeZoneChanged }) {
    const classes = useStyles();

    return (
        <Box bgcolor='white' className={classes.root}>
            <Typography variant='h1' className={classes.timeZonesText}>UTC Time Zones</Typography>
            <List className={classes.timeZones}>
                {SEQUENCE.map(offset => TimeZoneButton(offset, onTimeZoneChanged))}
                {SEQUENCE.map(offset => TimeZoneButton(-offset, onTimeZoneChanged))}
            </List>
        </Box>
    );
}