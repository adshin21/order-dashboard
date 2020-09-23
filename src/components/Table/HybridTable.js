import React, { useState, useEffect } from "react";
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
  },
}));

const HybridTable = (props) => {
  // const { tableData } = props;

  const tableData = [
    {
      data: {
        orderId: "14",
        customerId: "1009",
        deliveryPincode: "560009",
        orderDate: "11/11/2019",
        items: "Wheat:7;Wheat:9;Yogurt:6;Onion:2;",
      },
      errors: [],
      meta: {
        delimiter: ",",
        linebreak: "\r\n",
        aborted: false,
        truncated: false,
        cursor: 904,
        fields: [
          "orderId",
          "customerId",
          "deliveryPincode",
          "orderDate",
          "items",
        ],
      },
    },
    {
      data: {
        orderId: "15",
        customerId: "1020",
        deliveryPincode: "560015",
        orderDate: "16/11/2019",
        items: "Butter:6;Milk:1;Sugar:2;Sugar:7;",
      },
      errors: [],
      meta: {
        delimiter: ",",
        linebreak: "\r\n",
        aborted: false,
        truncated: false,
        cursor: 964,
        fields: [
          "orderId",
          "customerId",
          "deliveryPincode",
          "orderDate",
          "items",
        ],
      },
    },
    {
      data: {
        orderId: "16",
        customerId: "1011",
        deliveryPincode: "560003",
        orderDate: "08/11/2019",
        items: "Milk:2;Yogurt:1;Milk:6;Yogurt:10;",
      },
      errors: [],
      meta: {
        delimiter: ",",
        linebreak: "\r\n",
        aborted: false,
        truncated: false,
        cursor: 1025,
        fields: [
          "orderId",
          "customerId",
          "deliveryPincode",
          "orderDate",
          "items",
        ],
      },
    },
    {
      data: {
        orderId: "17",
        customerId: "1015",
        deliveryPincode: "560018",
        orderDate: "10/11/2019",
        items: "Beans:3;Yogurt:4;",
      },
      errors: [],
      meta: {
        delimiter: ",",
        linebreak: "\r\n",
        aborted: false,
        truncated: false,
        cursor: 1070,
        fields: [
          "orderId",
          "customerId",
          "deliveryPincode",
          "orderDate",
          "items",
        ],
      },
    },
    {
      data: {
        orderId: "18",
        customerId: "1012",
        deliveryPincode: "560003",
        orderDate: "16/11/2019",
        items: "Carrot:2;Sugar:5;",
      },
      errors: [],
      meta: {
        delimiter: ",",
        linebreak: "\r\n",
        aborted: false,
        truncated: false,
        cursor: 1115,
        fields: [
          "orderId",
          "customerId",
          "deliveryPincode",
          "orderDate",
          "items",
        ],
      },
    },
    {
      data: {
        orderId: "19",
        customerId: "1001",
        deliveryPincode: "560015",
        orderDate: "16/11/2019",
        items: "Milk:5;Sugar:8;Wheat:5;Bread:1;",
      },
      errors: [],
      meta: {
        delimiter: ",",
        linebreak: "\r\n",
        aborted: false,
        truncated: false,
        cursor: 1174,
        fields: [
          "orderId",
          "customerId",
          "deliveryPincode",
          "orderDate",
          "items",
        ],
      },
    },
    {
      data: {
        orderId: "20",
        customerId: "1014",
        deliveryPincode: "560015",
        orderDate: "12/11/2019",
        items: "Sugar:7;Salt:10;Onion:3;Bread:10;",
      },
      errors: [],
      meta: {
        delimiter: ",",
        linebreak: "\r\n",
        aborted: false,
        truncated: false,
        cursor: 1235,
        fields: [
          "orderId",
          "customerId",
          "deliveryPincode",
          "orderDate",
          "items",
        ],
      },
    },
    {
      data: {
        orderId: "21",
        customerId: "1004",
        deliveryPincode: "560007",
        orderDate: "15/11/2019",
        items: "Salt:2;Carrot:6;Sugar:4;Onion:6;",
      },
      errors: [],
      meta: {
        delimiter: ",",
        linebreak: "\r\n",
        aborted: false,
        truncated: false,
        cursor: 1295,
        fields: [
          "orderId",
          "customerId",
          "deliveryPincode",
          "orderDate",
          "items",
        ],
      },
    },
    {
      data: {
        orderId: "22",
        customerId: "1008",
        deliveryPincode: "560005",
        orderDate: "06/11/2019",
        items: "Bread:5;Wheat:9;Chocolate:4;Chocolate:5;",
      },
      errors: [],
      meta: {
        delimiter: ",",
        linebreak: "\r\n",
        aborted: false,
        truncated: false,
        cursor: 1363,
        fields: [
          "orderId",
          "customerId",
          "deliveryPincode",
          "orderDate",
          "items",
        ],
      },
    },
    {
      data: {
        orderId: "23",
        customerId: "1018",
        deliveryPincode: "560020",
        orderDate: "07/11/2019",
        items: "Bread:6;Beans:3;Butter:6;Bread:3;",
      },
      errors: [],
      meta: {
        delimiter: ",",
        linebreak: "\r\n",
        aborted: false,
        truncated: false,
        cursor: 1424,
        fields: [
          "orderId",
          "customerId",
          "deliveryPincode",
          "orderDate",
          "items",
        ],
      },
    },
    {
      data: {
        orderId: "24",
        customerId: "1016",
        deliveryPincode: "560007",
        orderDate: "06/11/2019",
        items: "Beans:3;Milk:2;Chocolate:4;Onion:7;",
      },
      errors: [],
      meta: {
        delimiter: ",",
        linebreak: "\r\n",
        aborted: false,
        truncated: false,
        cursor: 1487,
        fields: [
          "orderId",
          "customerId",
          "deliveryPincode",
          "orderDate",
          "items",
        ],
      },
    },
    {
      data: {
        orderId: "25",
        customerId: "1013",
        deliveryPincode: "560019",
        orderDate: "05/11/2019",
        items: "Chocolate:3;Salt:8;Bread:3;Salt:6;",
      },
      errors: [],
      meta: {
        delimiter: ",",
        linebreak: "\r\n",
        aborted: false,
        truncated: false,
        cursor: 1549,
        fields: [
          "orderId",
          "customerId",
          "deliveryPincode",
          "orderDate",
          "items",
        ],
      },
    },
    {
      data: {
        orderId: "301",
        customerId: "1020",
        deliveryPincode: "560015",
        orderDate: "13/11/2019",
        items: "Beans:5;Chocolate:2;Carrot:7;Beans:9;",
      },
      errors: [],
      meta: {
        delimiter: ",",
        linebreak: "\r\n",
        aborted: false,
        truncated: false,
        cursor: 18556,
        fields: [
          "orderId",
          "customerId",
          "deliveryPincode",
          "orderDate",
          "items",
        ],
      },
    },
    {
      data: {
        orderId: "302",
        customerId: "1006",
        deliveryPincode: "560012",
        orderDate: "16/11/2019",
        items: "Beans:10;Wheat:8;Carrot:1;Butter:7;",
      },
      errors: [],
      meta: {
        delimiter: ",",
        linebreak: "\r\n",
        aborted: false,
        truncated: false,
        cursor: 18620,
        fields: [
          "orderId",
          "customerId",
          "deliveryPincode",
          "orderDate",
          "items",
        ],
      },
    },
    {
      data: {
        orderId: "303",
        customerId: "1005",
        deliveryPincode: "560010",
        orderDate: "06/11/2019",
        items: "Sugar:3;Bread:4;Sugar:3;Bread:7;",
      },
      errors: [],
      meta: {
        delimiter: ",",
        linebreak: "\r\n",
        aborted: false,
        truncated: false,
        cursor: 18681,
        fields: [
          "orderId",
          "customerId",
          "deliveryPincode",
          "orderDate",
          "items",
        ],
      },
    },
    {
      data: {
        orderId: "304",
        customerId: "1016",
        deliveryPincode: "560000",
        orderDate: "17/11/2019",
        items: "Beans:7;Carrot:5;Butter:10;Onion:9;",
      },
      errors: [],
      meta: {
        delimiter: ",",
        linebreak: "\r\n",
        aborted: false,
        truncated: false,
        cursor: 18745,
        fields: [
          "orderId",
          "customerId",
          "deliveryPincode",
          "orderDate",
          "items",
        ],
      },
    },
    {
      data: {
        orderId: "305",
        customerId: "1008",
        deliveryPincode: "560008",
        orderDate: "03/11/2019",
        items: "Wheat:2;Carrot:4;Beans:2;Beans:7;",
      },
      errors: [],
      meta: {
        delimiter: ",",
        linebreak: "\r\n",
        aborted: false,
        truncated: false,
        cursor: 18807,
        fields: [
          "orderId",
          "customerId",
          "deliveryPincode",
          "orderDate",
          "items",
        ],
      },
    },
    {
      data: {
        orderId: "306",
        customerId: "1005",
        deliveryPincode: "560001",
        orderDate: "07/11/2019",
        items: "Beans:10;Butter:5;Onion:6;Beans:1;",
      },
      errors: [],
      meta: {
        delimiter: ",",
        linebreak: "\r\n",
        aborted: false,
        truncated: false,
        cursor: 18870,
        fields: [
          "orderId",
          "customerId",
          "deliveryPincode",
          "orderDate",
          "items",
        ],
      },
    },
    {
      data: {
        orderId: "307",
        customerId: "1012",
        deliveryPincode: "560001",
        orderDate: "05/11/2019",
        items: "Onion:5;Salt:10;Wheat:4;Wheat:7;",
      },
      errors: [],
      meta: {
        delimiter: ",",
        linebreak: "\r\n",
        aborted: false,
        truncated: false,
        cursor: 18931,
        fields: [
          "orderId",
          "customerId",
          "deliveryPincode",
          "orderDate",
          "items",
        ],
      },
    },
    {
      data: {
        orderId: "308",
        customerId: "1019",
        deliveryPincode: "560011",
        orderDate: "12/11/2019",
        items: "Chocolate:3;Wheat:10;Sugar:7;Yogurt:8;",
      },
      errors: [],
      meta: {
        delimiter: ",",
        linebreak: "\r\n",
        aborted: false,
        truncated: false,
        cursor: 18998,
        fields: [
          "orderId",
          "customerId",
          "deliveryPincode",
          "orderDate",
          "items",
        ],
      },
    },
    {
      data: {
        orderId: "309",
        customerId: "1011",
        deliveryPincode: "560001",
        orderDate: "18/11/2019",
        items: "Salt:4;Onion:5;Carrot:1;Carrot:6;",
      },
      errors: [],
      meta: {
        delimiter: ",",
        linebreak: "\r\n",
        aborted: false,
        truncated: false,
        cursor: 19060,
        fields: [
          "orderId",
          "customerId",
          "deliveryPincode",
          "orderDate",
          "items",
        ],
      },
    },
    {
      data: {
        orderId: "310",
        customerId: "1000",
        deliveryPincode: "560000",
        orderDate: "12/11/2019",
        items: "Milk:3;Yogurt:4;Butter:2;Sugar:1;",
      },
      errors: [],
      meta: {
        delimiter: ",",
        linebreak: "\r\n",
        aborted: false,
        truncated: false,
        cursor: 19122,
        fields: [
          "orderId",
          "customerId",
          "deliveryPincode",
          "orderDate",
          "items",
        ],
      },
    },
    {
      data: {
        orderId: "311",
        customerId: "1012",
        deliveryPincode: "560017",
        orderDate: "03/11/2019",
        items: "Wheat:7;Yogurt:4;",
      },
      errors: [],
      meta: {
        delimiter: ",",
        linebreak: "\r\n",
        aborted: false,
        truncated: false,
        cursor: 19168,
        fields: [
          "orderId",
          "customerId",
          "deliveryPincode",
          "orderDate",
          "items",
        ],
      },
    },
    {
      data: {
        orderId: "312",
        customerId: "1006",
        deliveryPincode: "560010",
        orderDate: "17/11/2019",
        items: "Sugar:5;Onion:2;Salt:4;Wheat:9;",
      },
      errors: [],
      meta: {
        delimiter: ",",
        linebreak: "\r\n",
        aborted: false,
        truncated: false,
        cursor: 19228,
        fields: [
          "orderId",
          "customerId",
          "deliveryPincode",
          "orderDate",
          "items",
        ],
      },
    },
    {
      data: {
        orderId: "313",
        customerId: "1006",
        deliveryPincode: "560018",
        orderDate: "02/11/2019",
        items: "Yogurt:10;Onion:8;Butter:1;Beans:5;",
      },
      errors: [],
      meta: {
        delimiter: ",",
        linebreak: "\r\n",
        aborted: false,
        truncated: false,
        cursor: 19292,
        fields: [
          "orderId",
          "customerId",
          "deliveryPincode",
          "orderDate",
          "items",
        ],
      },
    },
    {
      data: {
        orderId: "314",
        customerId: "1014",
        deliveryPincode: "560008",
        orderDate: "14/11/2019",
        items: "Sugar:4;Yogurt:5;Beans:10;Onion:10;",
      },
      errors: [],
      meta: {
        delimiter: ",",
        linebreak: "\r\n",
        aborted: false,
        truncated: false,
        cursor: 19356,
        fields: [
          "orderId",
          "customerId",
          "deliveryPincode",
          "orderDate",
          "items",
        ],
      },
    },
    {
      data: {
        orderId: "315",
        customerId: "1008",
        deliveryPincode: "560008",
        orderDate: "12/11/2019",
        items: "Chocolate:9;Yogurt:3;Butter:1;Milk:1;",
      },
      errors: [],
      meta: {
        delimiter: ",",
        linebreak: "\r\n",
        aborted: false,
        truncated: false,
        cursor: 19422,
        fields: [
          "orderId",
          "customerId",
          "deliveryPincode",
          "orderDate",
          "items",
        ],
      },
    },
    {
      data: {
        orderId: "316",
        customerId: "1002",
        deliveryPincode: "560000",
        orderDate: "03/11/2019",
        items: "Carrot:4;Sugar:3;Sugar:8;Bread:1;",
      },
      errors: [],
      meta: {
        delimiter: ",",
        linebreak: "\r\n",
        aborted: false,
        truncated: false,
        cursor: 19484,
        fields: [
          "orderId",
          "customerId",
          "deliveryPincode",
          "orderDate",
          "items",
        ],
      },
    },
    {
      data: {
        orderId: "317",
        customerId: "1016",
        deliveryPincode: "560012",
        orderDate: "15/11/2019",
        items: "Milk:8;Salt:4;Carrot:1;Wheat:8;",
      },
      errors: [],
      meta: {
        delimiter: ",",
        linebreak: "\r\n",
        aborted: false,
        truncated: false,
        cursor: 19544,
        fields: [
          "orderId",
          "customerId",
          "deliveryPincode",
          "orderDate",
          "items",
        ],
      },
    },
    {
      data: {
        orderId: "318",
        customerId: "1018",
        deliveryPincode: "560002",
        orderDate: "05/11/2019",
        items: "Sugar:5;Milk:3;Beans:8;Butter:5;",
      },
      errors: [],
      meta: {
        delimiter: ",",
        linebreak: "\r\n",
        aborted: false,
        truncated: false,
        cursor: 19605,
        fields: [
          "orderId",
          "customerId",
          "deliveryPincode",
          "orderDate",
          "items",
        ],
      },
    },
    {
      data: {
        orderId: "319",
        customerId: "1002",
        deliveryPincode: "560015",
        orderDate: "10/11/2019",
        items: "Yogurt:3;Milk:7;Beans:6;Butter:6;",
      },
      errors: [],
      meta: {
        delimiter: ",",
        linebreak: "\r\n",
        aborted: false,
        truncated: false,
        cursor: 19667,
        fields: [
          "orderId",
          "customerId",
          "deliveryPincode",
          "orderDate",
          "items",
        ],
      },
    },
    {
      data: {
        orderId: "320",
        customerId: "1016",
        deliveryPincode: "560012",
        orderDate: "04/11/2019",
        items: "Milk:1;Salt:6;Wheat:5;Bread:3;",
      },
      errors: [],
      meta: {
        delimiter: ",",
        linebreak: "\r\n",
        aborted: false,
        truncated: false,
        cursor: 19726,
        fields: [
          "orderId",
          "customerId",
          "deliveryPincode",
          "orderDate",
          "items",
        ],
      },
    },
    {
      data: {
        orderId: "321",
        customerId: "1002",
        deliveryPincode: "560014",
        orderDate: "20/11/2019",
        items: "Sugar:6;Carrot:5;Chocolate:6;Sugar:9;",
      },
      errors: [],
      meta: {
        delimiter: ",",
        linebreak: "\r\n",
        aborted: false,
        truncated: false,
        cursor: 19792,
        fields: [
          "orderId",
          "customerId",
          "deliveryPincode",
          "orderDate",
          "items",
        ],
      },
    },
    {
      data: {
        orderId: "322",
        customerId: "1013",
        deliveryPincode: "560015",
        orderDate: "15/11/2019",
        items: "Beans:9;Carrot:2;Sugar:4;Butter:10;",
      },
      errors: [],
      meta: {
        delimiter: ",",
        linebreak: "\r\n",
        aborted: false,
        truncated: false,
        cursor: 19856,
        fields: [
          "orderId",
          "customerId",
          "deliveryPincode",
          "orderDate",
          "items",
        ],
      },
    },
    {
      data: {
        orderId: "323",
        customerId: "1000",
        deliveryPincode: "560001",
        orderDate: "17/11/2019",
        items: "Bread:3;Milk:1;",
      },
      errors: [],
      meta: {
        delimiter: ",",
        linebreak: "\r\n",
        aborted: false,
        truncated: false,
        cursor: 19900,
        fields: [
          "orderId",
          "customerId",
          "deliveryPincode",
          "orderDate",
          "items",
        ],
      },
    },
    {
      data: {
        orderId: "324",
        customerId: "1009",
        deliveryPincode: "560015",
        orderDate: "13/11/2019",
        items: "Butter:7;Carrot:9;Beans:4;Chocolate:7;",
      },
      errors: [],
      meta: {
        delimiter: ",",
        linebreak: "\r\n",
        aborted: false,
        truncated: false,
        cursor: 19967,
        fields: [
          "orderId",
          "customerId",
          "deliveryPincode",
          "orderDate",
          "items",
        ],
      },
    },
    {
      data: {
        orderId: "325",
        customerId: "1010",
        deliveryPincode: "560014",
        orderDate: "14/11/2019",
        items: "Yogurt:7;Yogurt:9;Bread:6;Bread:5;",
      },
      errors: [],
      meta: {
        delimiter: ",",
        linebreak: "\r\n",
        aborted: false,
        truncated: false,
        cursor: 20030,
        fields: [
          "orderId",
          "customerId",
          "deliveryPincode",
          "orderDate",
          "items",
        ],
      },
    },
    {
      data: {
        orderId: "326",
        customerId: "1016",
        deliveryPincode: "560017",
        orderDate: "14/11/2019",
        items: "Yogurt:10;Butter:5;Milk:1;Carrot:5;",
      },
      errors: [],
      meta: {
        delimiter: ",",
        linebreak: "\r\n",
        aborted: false,
        truncated: false,
        cursor: 20092,
        fields: [
          "orderId",
          "customerId",
          "deliveryPincode",
          "orderDate",
          "items",
        ],
      },
    },
    {
      data: {
        orderId: "1",
        customerId: "1011",
        deliveryPincode: "560000",
        orderDate: "12/11/2019",
        items: "Sugar:5;Onion:3;Carrot:9;Bread:9;",
      },
      errors: [],
      meta: {
        delimiter: ",",
        linebreak: "\r\n",
        aborted: false,
        truncated: false,
        cursor: 112,
        fields: [
          "orderId",
          "customerId",
          "deliveryPincode",
          "orderDate",
          "items",
        ],
      },
    },
    {
      data: {
        orderId: "2",
        customerId: "1007",
        deliveryPincode: "560013",
        orderDate: "10/11/2019",
        items: "Butter:4;Beans:9;Yogurt:9;Milk:10;",
      },
      errors: [],
      meta: {
        delimiter: ",",
        linebreak: "\r\n",
        aborted: false,
        truncated: false,
        cursor: 173,
        fields: [
          "orderId",
          "customerId",
          "deliveryPincode",
          "orderDate",
          "items",
        ],
      },
    },
    {
      data: {
        orderId: "3",
        customerId: "1018",
        deliveryPincode: "560003",
        orderDate: "02/11/2019",
        items: "Carrot:6;Sugar:10;Salt:3;Milk:2;",
      },
      errors: [],
      meta: {
        delimiter: ",",
        linebreak: "\r\n",
        aborted: false,
        truncated: false,
        cursor: 232,
        fields: [
          "orderId",
          "customerId",
          "deliveryPincode",
          "orderDate",
          "items",
        ],
      },
    },
    {
      data: {
        orderId: "4",
        customerId: "1004",
        deliveryPincode: "560015",
        orderDate: "12/11/2019",
        items: "Butter:4;Bread:9;",
      },
      errors: [],
      meta: {
        delimiter: ",",
        linebreak: "\r\n",
        aborted: false,
        truncated: false,
        cursor: 276,
        fields: [
          "orderId",
          "customerId",
          "deliveryPincode",
          "orderDate",
          "items",
        ],
      },
    },
    {
      data: {
        orderId: "5",
        customerId: "1013",
        deliveryPincode: "560007",
        orderDate: "10/11/2019",
        items: "Carrot:4;Yogurt:5;Chocolate:5;Bread:1;",
      },
      errors: [],
      meta: {
        delimiter: ",",
        linebreak: "\r\n",
        aborted: false,
        truncated: false,
        cursor: 341,
        fields: [
          "orderId",
          "customerId",
          "deliveryPincode",
          "orderDate",
          "items",
        ],
      },
    },
    {
      data: {
        orderId: "6",
        customerId: "1017",
        deliveryPincode: "560000",
        orderDate: "16/11/2019",
        items: "Salt:8;Chocolate:2;Chocolate:5;Beans:6;",
      },
      errors: [],
      meta: {
        delimiter: ",",
        linebreak: "\r\n",
        aborted: false,
        truncated: false,
        cursor: 407,
        fields: [
          "orderId",
          "customerId",
          "deliveryPincode",
          "orderDate",
          "items",
        ],
      },
    },
    {
      data: {
        orderId: "7",
        customerId: "1014",
        deliveryPincode: "560005",
        orderDate: "06/11/2019",
        items: "Butter:2;Wheat:9;Bread:4;Milk:5;",
      },
      errors: [],
      meta: {
        delimiter: ",",
        linebreak: "\r\n",
        aborted: false,
        truncated: false,
        cursor: 466,
        fields: [
          "orderId",
          "customerId",
          "deliveryPincode",
          "orderDate",
          "items",
        ],
      },
    },
    {
      data: {
        orderId: "8",
        customerId: "1004",
        deliveryPincode: "560016",
        orderDate: "12/11/2019",
        items: "Bread:1;Carrot:1;Carrot:5;Beans:2;",
      },
      errors: [],
      meta: {
        delimiter: ",",
        linebreak: "\r\n",
        aborted: false,
        truncated: false,
        cursor: 527,
        fields: [
          "orderId",
          "customerId",
          "deliveryPincode",
          "orderDate",
          "items",
        ],
      },
    },
    {
      data: {
        orderId: "9",
        customerId: "1018",
        deliveryPincode: "560008",
        orderDate: "13/11/2019",
        items: "Salt:8;Chocolate:8;Butter:2;Bread:8;",
      },
      errors: [],
      meta: {
        delimiter: ",",
        linebreak: "\r\n",
        aborted: false,
        truncated: false,
        cursor: 590,
        fields: [
          "orderId",
          "customerId",
          "deliveryPincode",
          "orderDate",
          "items",
        ],
      },
    },
    {
      data: {
        orderId: "10",
        customerId: "1020",
        deliveryPincode: "560012",
        orderDate: "09/11/2019",
        items: "Wheat:6;Bread:10;Carrot:2;Onion:10;",
      },
      errors: [],
      meta: {
        delimiter: ",",
        linebreak: "\r\n",
        aborted: false,
        truncated: false,
        cursor: 653,
        fields: [
          "orderId",
          "customerId",
          "deliveryPincode",
          "orderDate",
          "items",
        ],
      },
    },
    {
      data: {
        orderId: "11",
        customerId: "1010",
        deliveryPincode: "560014",
        orderDate: "14/11/2019",
        items: "Sugar:7;Carrot:3;Onion:3;Yogurt:2;",
      },
      errors: [],
      meta: {
        delimiter: ",",
        linebreak: "\r\n",
        aborted: false,
        truncated: false,
        cursor: 715,
        fields: [
          "orderId",
          "customerId",
          "deliveryPincode",
          "orderDate",
          "items",
        ],
      },
    },
    {
      data: {
        orderId: "12",
        customerId: "1010",
        deliveryPincode: "560012",
        orderDate: "11/11/2019",
        items: "Carrot:7;Chocolate:5;Chocolate:1;Chocolate:1;",
      },
      errors: [],
      meta: {
        delimiter: ",",
        linebreak: "\r\n",
        aborted: false,
        truncated: false,
        cursor: 788,
        fields: [
          "orderId",
          "customerId",
          "deliveryPincode",
          "orderDate",
          "items",
        ],
      },
    },
    {
      data: {
        orderId: "13",
        customerId: "1014",
        deliveryPincode: "560015",
        orderDate: "15/11/2019",
        items: "Beans:5;Carrot:10;Carrot:6;",
      },
      errors: [],
      meta: {
        delimiter: ",",
        linebreak: "\r\n",
        aborted: false,
        truncated: false,
        cursor: 843,
        fields: [
          "orderId",
          "customerId",
          "deliveryPincode",
          "orderDate",
          "items",
        ],
      },
    },
  ];

  const classes = useStyles();
  const [currentData, setCurrentData] = useState(tableData);
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("orderId");
  const [searchText, setSearchText] = useState("");
  const [searchDate, setSearchDate] = useState("");

  console.log(searchDate, searchText);
  
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
  }, [order, orderBy]);

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
      return (a, b) => compare(a.data, b.data, orderBy);
    } else {
      return (a, b) => -compare(a.data, b.data, orderBy);
    }
  };


  const filteredData = (text, date) => {
    
  }

  if (tableData === undefined) return <></>;
  return (
    <>
      <Filter searchText={searchText} searchDate={searchDate} setSearchText={setSearchText} setSearchDate={setSearchDate} />
      <TableContainer className={classes.root} component={Paper} elevation={3}>
        <Table size="small">
          <HTableHead
            sortRequestHandler={handleRequestSort}
            order={order}
            orderBy={orderBy}
          />
          <TableBody>
            {currentData.map((row, id) => {
              const items = row.data.items.split(";");
              return (
                <TableRow hover key={id}>
                  <TableCell align="center">{row.data.orderId}</TableCell>
                  <TableCell align="center">{row.data.customerId}</TableCell>
                  <TableCell align="center">
                    {row.data.deliveryPincode}
                  </TableCell>
                  <TableCell align="center">{row.data.orderDate}</TableCell>
                  <TableCell align="center">
                    {items.map((e, idx) => (
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
};

export default HybridTable;
