import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import { Container } from "./styles";

export const InfoTable = () => {
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
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell
                sx={{ backgroundColor: "#000", color: "#FFF" }}
                align="center"
              >
                05/12/2022
              </TableCell>
              <TableCell
                sx={{ backgroundColor: "#000", color: "#FFF" }}
                align="center"
              >
                Salário Mensal
              </TableCell>
              <TableCell
                sx={{ backgroundColor: "#000", color: "#FFF" }}
                align="center"
              >
                Salário da empresa X
              </TableCell>
              <TableCell
                sx={{ backgroundColor: "#000", color: "#FFF" }}
                align="center"
              >
                R$ 1900.00
              </TableCell>
            </TableRow>
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell
                sx={{ backgroundColor: "#000", color: "#FFF" }}
                align="center"
              >
                05/12/2022
              </TableCell>
              <TableCell
                sx={{ backgroundColor: "#000", color: "#FFF" }}
                align="center"
              >
                Salário Mensal
              </TableCell>
              <TableCell
                sx={{ backgroundColor: "#000", color: "#FFF" }}
                align="center"
              >
                Salário da empresa X
              </TableCell>
              <TableCell
                sx={{ backgroundColor: "#000", color: "#FFF" }}
                align="center"
              >
                R$ 1900.00
              </TableCell>
            </TableRow>
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell
                sx={{ backgroundColor: "#000", color: "#FFF" }}
                align="center"
              >
                05/12/2022
              </TableCell>
              <TableCell
                sx={{ backgroundColor: "#000", color: "#FFF" }}
                align="center"
              >
                Salário Mensal
              </TableCell>
              <TableCell
                sx={{ backgroundColor: "#000", color: "#FFF" }}
                align="center"
              >
                Salário da empresa X
              </TableCell>
              <TableCell
                sx={{ backgroundColor: "#000", color: "#FFF" }}
                align="center"
              >
                R$ 1900.00
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};
