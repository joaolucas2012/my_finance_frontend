import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import { TableItem } from "../TableItem";

export const CategoriesTable = ({ categoriesList }) => {
  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer
        sx={{ color: "#FFF", borderRadius: 3, width: "80%", margin: "0 auto" }}
      >
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell
                sx={{ backgroundColor: "#000", color: "#FFF" }}
                align="center"
              >
                Categoria
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {categoriesList.map((category) => (
              <TableItem key={category.id} description={category.description} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};
