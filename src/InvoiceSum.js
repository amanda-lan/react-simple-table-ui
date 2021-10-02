import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import * as React from "react";

export default function InvoiceRow(summary) {
    const invoice = summary.row;
    console.log(invoice)
    return (
        <>
            <TableRow>
                <TableCell rowSpan={6} colSpan={9} />
                <TableCell colSpan={2}>Invoiced Date:</TableCell>
                <TableCell colSpan={1} align="left">{invoice.invoiced}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell colSpan={2}>Invoice NO.:</TableCell>
                <TableCell colSpan={1} align="left">{invoice.invoice_no}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell colSpan={2}>Total Amount Net:</TableCell>
                <TableCell colSpan={1} align="left">{invoice.total_amount_net}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell colSpan={2}>Total Amount GST:</TableCell>
                <TableCell colSpan={1} align="left">{invoice.total_amount_gst}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell colSpan={2}>Client ID</TableCell>
                <TableCell colSpan={1} align="left">{invoice.client_id}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell colSpan={2}>No. of Contracts:</TableCell>
                <TableCell colSpan={1} align="left">{invoice.contract_id}</TableCell>
            </TableRow>
        </>
    );
}