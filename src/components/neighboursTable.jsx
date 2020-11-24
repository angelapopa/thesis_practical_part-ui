import React, { Component }  from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

//https://material-ui.com/components/tables/

class NeighboursTable extends Component{
  render() {

    return (
      <React.Fragment>
        <TableContainer component={Paper}>
          <Table
            //className={classes.table}
            size="small"
            aria-label="A table of similar dwellings">
            <TableHead>
              <TableRow>
                <TableCell align="right">Rating</TableCell>
                <TableCell align="right">Floor&nbsp;Area</TableCell>
                <TableCell align="right">
                  Yearly Energy&nbsp;Consumption
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.props.neighbours.map((row) => (
                <TableRow>
                  <TableCell align="right">{row['rating']}</TableCell>
                  <TableCell align="right">{row['totalFloorArea']}</TableCell>
                  <TableCell align="right">{row['finalEnergyDemand']}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </React.Fragment>
    );
  }
}

export default NeighboursTable;
