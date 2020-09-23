import React from "react";
import { CSVReader } from "react-papaparse";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  aside: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 10,
  },
  browseButton: {
    marginTop: 5,
    marginBottom: 5,
    width: '20%'
  },
  removeButton: {
    marginTop: 5,
    marginBottom: 5,
    width: '20%'
  },
  fileName: {
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#ccc",
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 2,
    marginRight: 2,
    padding: 5,
    width: "60%",
  },
  muted: {
    color: "#B8B8B8",
  },
}));

const buttonRef = React.createRef();

const CsvReader = (props) => {

    const { setCSVData, setLoaded } = props;

    const handleOpenDialog = (e) => {
        if (buttonRef.current) {
        buttonRef.current.open(e);
        }
    };

    const handleOnFileLoad = (data) => {
       setCSVData(data);
       setLoaded(true);
    };

    const handleOnError = (err, file, inputElem, reason) => {
        console.log(err);
    };

    const handleOnRemoveFile = (data) => {
        setCSVData(data);
        setLoaded(false);
    };

    const handleRemoveFile = (e) => {
        if (buttonRef.current) {
        buttonRef.current.removeFile(e);
        }
    };

    const classes = useStyles();
    return (
        <CSVReader
            ref={buttonRef}
            onFileLoad={handleOnFileLoad}
            onError={handleOnError}
            noClick
            noDrag
            onRemoveFile={handleOnRemoveFile}
            config={{header: true }}
        >
            {({ file }) => (
            <aside className={classes.aside}>
                <Button
                    className={classes.browseButton}
                    color="primary"
                    variant="contained"
                    onClick={handleOpenDialog}
                >
                    Browse file
                </Button>
                <div className={classes.fileName}>
                    {file ? (
                        file?.name
                    ) : (
                        <span className={classes.muted}>
                            Please provide Csv file only
                        </span>
                    )}
                </div>
                <Button
                    className={classes.removeButton}
                    onClick={handleRemoveFile}
                    variant="contained"
                    color="secondary"
                >
                    Remove
                </Button>
            </aside>
            )}
        </CSVReader>
    );
};

export default CsvReader;
