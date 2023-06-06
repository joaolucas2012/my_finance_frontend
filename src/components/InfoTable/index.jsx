import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import { FinanceTableItem } from "../FinanceTableItem";

export const InfoTable = ({ financesList }) => {
  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer
        sx={{
          color: "#FFF",
          borderRadius: 3,
          width: "80%",
          margin: "0 auto",
        }}
      >
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell
                sx={{ backgroundColor: "#000", color: "#FFF", lineHeight: 1 }}
                align="center"
              >
                Data
              </TableCell>
              <TableCell
                sx={{ backgroundColor: "#000", color: "#FFF" }}
                align="center"
              >
                Categoria
              </TableCell>
              <TableCell
                sx={{ backgroundColor: "#000", color: "#FFF" }}
                align="center"
              >
                Título
              </TableCell>
              <TableCell
                sx={{ backgroundColor: "#000", color: "#FFF" }}
                align="center"
              >
                Valor
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {financesList.map((finance) => (
              <FinanceTableItem
                key={finance.id}
                date={`${finance.date.substring(
                  8,
                  10
                )}/${finance.date.substring(5, 7)}/${finance.date.substring(
                  0,
                  4
                )}`}
                categoryId={finance.Category.description}
                description={finance.title}
                value={finance.value}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};
