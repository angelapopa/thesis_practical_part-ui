import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

//https://material-ui.com/components/tables/

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(nr, floor_area, energy_consumption, rating) {
  return { nr, floor_area, energy_consumption, rating };
}

const rows = [
  createData("1", 159, 609, "C"),
  createData("2", 237, 900, "D"),
  createData("3", 262, 160, "G"),
];

export default function DenseTable() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <TableContainer component={Paper}>
        <Table
          className={classes.table}
          size="small"
          aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Nr.</TableCell>
              <TableCell align="right">Floor&nbsp;Area</TableCell>
              <TableCell align="right">
                Yearly Energy&nbsp;Consumption
              </TableCell>
              <TableCell align="right">Rating</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.nr}
                </TableCell>
                <TableCell align="right">{row.floor_area}</TableCell>
                <TableCell align="right">{row.energy_consumption}</TableCell>
                <TableCell align="right">{row.rating}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </React.Fragment>
  );
}

//export default DenseTable;
