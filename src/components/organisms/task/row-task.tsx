import { Box, Collapse, IconButton, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import React from "react";
import { useState } from "react";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

export function createData(
  name: string,
) {
  return {
    name,
    history: [
      {
        date: '2020-01-05',
        customerId: '11091700',
        amount: 1,
      },
      {
        date: '2020-01-02',
        customerId: 'Anonymous',
        amount: 2,
      },
      {
        date: '2020-01-02',
        customerId: 'Anonymous',
        amount: 3,
      },
    ],
  };
}

export default function Row(props: { row: ReturnType<typeof createData> }) {
  const { row } = props;
  const [open, setOpen] = useState(false);

  return (
    <React.Fragment>
      <TableRow >
        <TableHead>
          <TableCell>
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={() => setOpen(!open)}
            >
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </TableCell>
          <TableCell align="left" >
            {row.name}
          </TableCell>
        </TableHead>
      </TableRow>
      <TableRow>
        
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box >
              <Table size="medium" aria-label="purchases">
                <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.customerId}>
                      <TableCell align="left">{historyRow.date}</TableCell>
                      <TableCell align="center">{historyRow.customerId}</TableCell>
                      <TableCell align="center">{historyRow.date}</TableCell>
                      <TableCell align="center">{historyRow.date}</TableCell>
                      <TableCell align="center">{historyRow.date}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        
      </TableRow>
    </React.Fragment>
  );
}