import React, { useState } from "react";
import CsvReader from "./components/CsvParser/CsvReader";
import HybridTable from "./components/Table/HybridTable";
import { Button, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(2),
    textAlign: "center",
  },
}));

const App = () => {
  const classes = useStyles();
  const [csvData, setCSVData] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [showTable, setShowTable] = useState(false);

  return (
    <Container maxWidth="md" className={classes.root}>
      <CsvReader setCSVData={setCSVData} setLoaded={setLoaded} />
      <Button variant="contained" className={classes.submit} disabled={!loaded} onClick={e => setShowTable(true)}>
        Genrate Table
      </Button>
      {showTable ? <HybridTable tableData={csvData.map(e => e.data)} /> : null}
    </Container>
  );
};

export default App;
