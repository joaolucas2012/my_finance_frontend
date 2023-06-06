import { TableRow, TableCell } from "@mui/material";

export const FinanceTableItem = ({ date, categoryId, description, value }) => {
  return (
    <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
      <TableCell
        sx={
          categoryId === "Ganhos"
            ? { backgroundColor: "#008000", color: "#FFF" }
            : { backgroundColor: "#ce0404", color: "#FFF" }
        }
        align="center"
      >
        {date}
      </TableCell>
      <TableCell
        sx={
          categoryId === "Ganhos"
            ? { backgroundColor: "#008000", color: "#FFF" }
            : { backgroundColor: "#ce0404", color: "#FFF" }
        }
        align="center"
      >
        {categoryId}
      </TableCell>
      <TableCell
        sx={
          categoryId === "Ganhos"
            ? { backgroundColor: "#008000", color: "#FFF" }
            : { backgroundColor: "#ce0404", color: "#FFF" }
        }
        align="center"
      >
        {description}
      </TableCell>
      <TableCell
        sx={
          categoryId === "Ganhos"
            ? { backgroundColor: "#008000", color: "#FFF" }
            : { backgroundColor: "#ce0404", color: "#FFF" }
        }
        align="center"
      >
        R$ {value}
      </TableCell>
    </TableRow>
  );
};
