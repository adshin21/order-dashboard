import React from "react";
import { Grid, makeStyles, TextField, InputAdornment, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
}));

const Filter = (props) => {

  const { searchText, searchDate, setSearchText, setSearchDate } = props;
  const classes = useStyles();

  return (
    <Grid container justify="space-between" className={classes.root}>
      <Grid item>
        <TextField
          id="standard-basic"
          name="searchText"
          autoFocus={true}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">PinCode or Item Name</InputAdornment>
            ),
          }}
          value={searchText}
          onChange={e => setSearchText(e.target.value)}
        />
      </Grid>
      <Grid item>
        <TextField
          id="date"
          type="date"
          name="searchDate"
          value={searchDate}
          onChange={e => setSearchDate(e.target.value)}
          InputLabelProps={{
            shrink: true,
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">Date</InputAdornment>
            ),
          }}
        />
      </Grid>
      <Grid item>
        <Button variant="contained" color="secondary" onClick={e => {
          setSearchText("");
          setSearchDate("");
        }}>Clear Filter</Button>
      </Grid>
    </Grid>
  );
};

export default Filter;
