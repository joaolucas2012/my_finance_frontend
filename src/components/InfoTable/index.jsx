import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import { TableItem } from "../TableItem";
import { Container } from "./styles";

export const InfoTable = ({ financesList }) => {
  return (
    <Container>
      <TableContainer sx={{ color: "#FFF", borderRadius: 3 }}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell
                sx={{ backgroundColor: "#000", color: "#FFF" }}
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
              <TableItem
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
    </Container>
  );
};
