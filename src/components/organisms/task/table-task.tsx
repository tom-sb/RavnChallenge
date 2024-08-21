import { Paper, Table, TableContainer, TableHead } from "@mui/material";
import Row, { createData } from "./row-task";


interface RowProps {
  row: ReturnType<typeof createData>;
}

export default function CollapsibleTable({row}: RowProps) {
  return (      
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <Row key={row.name} row={row} />
        </TableHead>
      </Table>
    </TableContainer>
  );
}