import { TableRow, TableCell } from "@mui/material";

export const CategoryTableItem = ({ description }) => {
  return (
    <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
      <TableCell align="center">{description}</TableCell>
    </TableRow>
  );
};
