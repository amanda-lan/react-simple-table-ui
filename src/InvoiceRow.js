import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import { Link } from "react-router-dom";
import * as React from "react";

export default function InvoiceRow(row) {
    const invoice = row.row;
    return (
        <TableRow
            role="table-row"
            key={invoice.id}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
            <TableCell role="body-cell" align="left">{invoice.invoiced}</TableCell>
            <TableCell role="body-cell" align="left">
                <Link to={{
                    pathname: "/" + invoice.invoice_no,
                    detailProps: { data: invoice }
                }}>{invoice.invoice_no}</Link>
            </TableCell>
            <TableCell role="body-cell" align="left">{invoice.total_amount_net}</TableCell>
            <TableCell role="body-cell" align="left">{invoice.total_amount_gst}</TableCell>
            <TableCell role="body-cell" align="left">{invoice.client_id}</TableCell>
            <TableCell role="body-cell" align="right">{invoice.contract_id}</TableCell>
        </TableRow>
    );
}