import React from "react";
import {
  TableHead,
  TableRow,
  TableCell,
  TableSortLabel,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  label: {
    fontWeight: 600,
  },
}));

const headCells = [
  { id: "orderId", label: "orderId", canSort: true },
  { id: "customerId", label: "customerId", canSort: true },
  { id: "deliveryPincode", label: "deliveryPincode", canSort: true },
  { id: "orderDate", label: "orderDate", canSort: true },
  { id: "items", label: "items", canSort: false },
];

const HTableHead = (props) => {
  const { order, orderBy, sortRequestHandler } = props;
  const createSortHandler = (property) => (event) => {
    sortRequestHandler(event, property);
  };

  const classes = useStyles();
  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={"center"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            {headCell.canSort ? (
              <TableSortLabel
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : "asc"}
                onClick={createSortHandler(headCell.id)}
                className={classes.label}
              >
                {headCell.label}
              </TableSortLabel>
            ) : (
              <p className={classes.label}>{headCell.label}</p>
            )}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default HTableHead;
