import './App.css';
import {Box, Container, makeStyles} from "@material-ui/core";
import CurrentTimeBox from "./components/CurrentTimeBox";
import TimeZonesBox from "./components/TimeZonesBox";
import {useEffect, useState} from "react";
import moment from "moment";

const useStyles = makeStyles({
    root: {
        backgroundColor: 'rgb(243, 243, 243)'
    },
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
});

function App() {
    const classes = useStyles();

    const [utcOffset, setUtcOffset] = useState(0);
    const [currentDateTime, setCurrentDateTime] = useState(moment().utcOffset(utcOffset));

    useEffect(() => {
        const interval = setInterval(() => setCurrentDateTime(moment().utcOffset(utcOffset)), 100);
        return () => clearInterval(interval);
    }, [utcOffset]);

    return (
        <Box height='100%' className={classes.root}>
            <Container className={classes.container}>
              <CurrentTimeBox currentDateTime={currentDateTime} utcOffset={utcOffset} />
              <TimeZonesBox onTimeZoneChanged={newOffset => setUtcOffset(newOffset)} />
            </Container>
        </Box>
  );
}

export default App;
