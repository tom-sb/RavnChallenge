import { Paper, Table, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

export default function HeaderTasks() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="sticky table">
        <TableHead>
          <TableRow>
            <TableCell align="left" sx={{paddingY:2}}># Task Name</TableCell>
            <TableCell align="center">Task Tags</TableCell>
            <TableCell align="center">Estimate</TableCell>
            <TableCell align="center">Task Assign Name</TableCell>
            <TableCell align="center">Due Date</TableCell>
          </TableRow>
        </TableHead>
      </Table>
    </TableContainer>
  );
}