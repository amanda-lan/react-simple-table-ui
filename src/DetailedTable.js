import * as React from 'react';
import { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CircularProgress from '@mui/material/CircularProgress';
import { fetchInvoiceDetail } from './api'
import { useParams } from "react-router-dom";
import InvoiceSum from "./InvoiceSum";

export default function DetailedTable() {
    const [transactions, setTransactions] = useState([]); //table data
    const [summary, setSummary] = useState([]); //table data
    const { invoice_no } = useParams();
    useEffect( () => {
        async function getInvoice() {
            const invoice = await fetchInvoiceDetail(invoice_no);
            setTransactions(invoice.transactions);
            setSummary(invoice.summary);
        }
        getInvoice()
    },[])

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} role="detail-table">
                <TableHead>
                    <TableRow>
                        <TableCell align="left" role="header-cell">ID</TableCell>
                        <TableCell align="left" role="header-cell">Invoiced No.</TableCell>
                        <TableCell align="left" role="header-cell">Amount Net</TableCell>
                        <TableCell align="left" role="header-cell">Amount GST</TableCell>
                        <TableCell align="left" role="header-cell">Gross Amount</TableCell>
                        <TableCell align="left" role="header-cell">Client ID</TableCell>
                        <TableCell align="left" role="header-cell">Contract ID</TableCell>
                        <TableCell align="left" role="header-cell">Description</TableCell>
                        <TableCell align="left" role="header-cell">Registration</TableCell>
                        <TableCell align="left" role="header-cell">Invoice At</TableCell>
                        <TableCell align="left" role="header-cell">Created At</TableCell>
                        <TableCell align="left" role="header-cell">Modified At</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {transactions.length > 0 ? transactions.map((transaction, index) => (
                            <TableRow
                                key={index}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell align="left">{transaction.id}</TableCell>
                                <TableCell align="left">{transaction.invoice_no}</TableCell>
                                <TableCell align="left">{transaction.amount_gross}</TableCell>
                                <TableCell align="left">{transaction.amount_gst}</TableCell>
                                <TableCell align="left">{transaction.amount_net}</TableCell>
                                <TableCell align="left">{transaction.client_id}</TableCell>
                                <TableCell align="left">{transaction.contract_id}</TableCell>
                                <TableCell align="left">{transaction.description}</TableCell>
                                <TableCell align="left">{transaction.registration}</TableCell>
                                <TableCell align="left">{transaction.invoiced}</TableCell>
                                <TableCell align="left">{transaction.created}</TableCell>
                                <TableCell align="left">{transaction.modified}</TableCell>
                            </TableRow>
                        )) :
                        <TableRow>
                            <TableCell colSpan={12} align="center">
                                <CircularProgress />
                            </TableCell>
                        </TableRow>
                    }
                    {summary.length > 0 && summary.map((invoice, index) => (
                        <InvoiceSum row={invoice} key={index} />
                        ))
                    }
                </TableBody>
            </Table>
        </TableContainer>
    );
}