import React, { useState, useEffect, useCallback } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
  makeStyles,
} from "@material-ui/core";

import HTableHead from "./HTableHead";
import Filter from "../Filter/Filter";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(3),
  },
}));

const debounce = (fn, delay) => {
  let timeoutId;
  return function (...args) {
    clearInterval(timeoutId);
    timeoutId = setTimeout(() => fn.apply(this, args), delay);
  };
};

const HybridTable = (props) => {
  const { tableData } = props;
  const classes = useStyles();
  const [currentData, setCurrentData] = useState(tableData);
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("orderId");
  const [searchText, setSearchText] = useState("");
  const [searchDate, setSearchDate] = useState("");

  useEffect(() => {
    const doSorting = () => {
      if (orderBy !== "items") {
        if (currentData !== undefined) {
          let arr = [...currentData];
          arr.sort(sortingOrder(order, orderBy));
          setCurrentData(arr);
        }
      }
    };
    doSorting();
  }, [order, orderBy]); // eslint-disable-line

  useEffect(() => {
    const doSearching = () => {
      if (tableData !== undefined) {
        debounceCallback(tableData, searchText, searchDate);
      }
    };
    doSearching();
  }, [searchText, searchDate]); // eslint-disable-line

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const compare = (a, b, orderBy) => {
    if (orderBy !== "orderDate") {
      return a[orderBy] - b[orderBy];
    } else {
      const [d1, m1, y1] = a[orderBy].split("/");
      const [d2, m2, y2] = b[orderBy].split("/");
      return new Date(y1, m1 - 1, d1) - new Date(y2, m2 - 1, d2);
    }
  };

  const sortingOrder = (order, orderBy) => {
    if (order === "asc") {
      return (a, b) => compare(a, b, orderBy);
    } else {
      return (a, b) => -compare(a, b, orderBy);
    }
  };

  const debounceCallback = useCallback(
    debounce((data, text, date) => {
      setCurrentData(filteredData(data, text, date));
    }, 500),
    []
  );

  const filteredData = (completeData, text, date) => {
    if (text === "" && date === "") {
      return completeData;
    }

    const len = text.length;
    const dlen = date.length;
    const sdate = date.split("-").reverse().join("/");

    const currentData = completeData.filter((row) => { // eslint-disable-line
      const { deliveryPincode, orderDate, items } = row;
      if (len && dlen) {
        if (orderDate === sdate) {
          if (deliveryPincode.includes(text)) {
            return row;
          } else if (items.toLowerCase().includes(text)) {
            return row;
          }
        }
      } else if (len) {
        if (deliveryPincode.includes(text)) {
          return row;
        } else if (items.toLowerCase().includes(text)) {
          return row;
        }
      } else if (dlen && orderDate === sdate) {
        return row;
      }
    });

    return currentData;
  };

  if (tableData === undefined) return <></>;

  if(tableData.length){
    const obj = tableData[0];
    if( !obj.hasOwnProperty("orderId") || !obj.hasOwnProperty("customerId") || !obj.hasOwnProperty("deliveryPincode") || !obj.hasOwnProperty("orderDate") || !obj.hasOwnProperty("items") ){
      return (
        <h4>Data is not in valid format</h4>
      )
    }
    else{
      return (
        <>
          <Filter
            searchText={searchText}
            searchDate={searchDate}
            setSearchText={setSearchText}
            setSearchDate={setSearchDate}
          />
          <TableContainer className={classes.root} component={Paper} elevation={3}>
            <Table size="small">
              <HTableHead
                sortRequestHandler={handleRequestSort}
                order={order}
                orderBy={orderBy}
              />
              <TableBody>
                {currentData.map((row, id) => {
                  const items = row.items?.split(";");
                  return (
                    <TableRow hover key={id}>
                      <TableCell align="center">{row.orderId}</TableCell>
                      <TableCell align="center">{row.customerId}</TableCell>
                      <TableCell align="center">{row.deliveryPincode}</TableCell>
                      <TableCell align="center">{row.orderDate}</TableCell>
                      <TableCell align="center">
                        {items?.map((e, idx) => (
                          <span key={Math.random()}>
                            {e}
                            {idx + 1 === items.length ? null : <br />}
                          </span>
                        ))}
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </>
      );
    }
  }

};

export default HybridTable;
