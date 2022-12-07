import { TableRow, TableCell } from "@mui/material";

export const TableItem = ({ date, categoryId, description, value }) => {
  return (
    <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
      <TableCell sx={{ backgroundColor: "#000", color: "#FFF" }} align="center">
        {date}
      </TableCell>
      <TableCell sx={{ backgroundColor: "#000", color: "#FFF" }} align="center">
        {categoryId}
      </TableCell>
      <TableCell sx={{ backgroundColor: "#000", color: "#FFF" }} align="center">
        {description}
      </TableCell>
      <TableCell sx={{ backgroundColor: "#000", color: "#FFF" }} align="center">
        R$ {value}
      </TableCell>
    </TableRow>
  );
};
