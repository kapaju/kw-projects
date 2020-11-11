import React, { useEffect, useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles';

import { Bar } from 'react-chartjs-2';

const useStyles = makeStyles(theme => ({
  numberBox: {
    padding: 20,
    marginRight: 20,
    marginBottom: 40,
    textAlign: 'center',
    backgroundColor: '#2471A3',
    color: '#FFF',
    fontSize: 50
  },
  barChart:{
    maxWidth: 200
  }
}));

const BarChart = ({total, active, recovered, deaths, classes}) => {

  const state = {
    labels: ['Confirmed', 'Active', 'Recovered', 'Deaths'],
    datasets: [
      {
        label: 'Cases',
        backgroundColor: '#2471A3',
        data: [total, active, recovered, deaths]
      }
    ]
  }

  return(
    <Bar
      className={classes.barChart}
      data={state}
      options={{
        legend:{
          display: true,
          position: 'top'
        }
      }}
    />
  )

}

const Dashboard = () => {

  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [coronaData, setCoronaData] = useState([])

  const classes = useStyles()
  const [locale, setLocale] = React.useState('en-UK');
  const df = new Intl.DateTimeFormat(locale, {month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric'});
  
  useEffect(() => {
    fetch('https://api.covid19api.com/summary')
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result)
          setCoronaData(result)
          setIsLoaded(true)        
        },
        (error) => {
          setIsLoaded(true)
          setError(error)
        }
      ) 
  }, [])

  if (error) {
    return <div>Error: {error.message}</div>
  } else if (!isLoaded) {
    return <div>Loading...</div>
  } else {
    return (
      <div style={{marginLeft: '5%'}}>
        <h1>
          Coronavirus cases globally
        </h1>
        <Box display="flex" flexWrap="wrap">
          <Paper className={classes.numberBox}>
            <Typography>
              Confirmed <br></br> 
              <span style={{fontSize: 20}}>
                {coronaData.Global.TotalConfirmed.toLocaleString()}
              </span>
            </Typography>
          </Paper>
          <Paper className={classes.numberBox}>
            <Typography>
              Active <br></br> 
              <span style={{fontSize: 20}}>
                {(coronaData.Global.TotalConfirmed 
                - coronaData.Global.TotalRecovered 
                - coronaData.Global.TotalDeaths).toLocaleString()}
                </span>
            </Typography>
          </Paper>
          <Paper className={classes.numberBox}>
            <Typography>
              Recovered <br></br>
              <span style={{fontSize: 20}}>{coronaData.Global.TotalRecovered.toLocaleString()}</span> 
            </Typography>
          </Paper>
          <Paper className={classes.numberBox}>
            <Typography>
              Deaths <br></br> 
              <span style={{fontSize: 20}}>
                {coronaData.Global.TotalDeaths.toLocaleString()}
              </span>
            </Typography>
          </Paper>
        </Box>
        <Box style={{maxWidth: 600}}>
          <BarChart 
            total={coronaData.Global.TotalConfirmed}
            active={(coronaData.Global.TotalConfirmed - coronaData.Global.TotalRecovered - coronaData.Global.TotalDeaths)}
            recovered={coronaData.Global.TotalRecovered}
            deaths={coronaData.Global.TotalDeaths}
            classes={classes}
          />
        </Box>     
        <Typography>
          Data fetched from <a href="https://documenter.getpostman.com/view/10808728/SzS8rjbc">Postman coronavirus API</a>
        </Typography> 
        <Typography>
          {df.format(new Date())}
        </Typography> 
      </div>
    )
  }
}

export default Dashboard;