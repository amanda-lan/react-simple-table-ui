import * as React from 'react';
import { useState, useEffect } from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CircularProgress from '@mui/material/CircularProgress';
import { fetchInvoices } from './api'
import InvoiceRow from './InvoiceRow'

export default function BasicTable() {
    const [invoices, setData] = useState([]); //table data

    useEffect( () => {
        async function getInvoices() {
            const invoices = await fetchInvoices();
            setData(invoices);
        }
        getInvoices()
    }, [])

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} role="basic-table">
                <TableHead>
                    <TableRow>
                        <TableCell role="header-cell" align="left">Invoiced Date</TableCell>
                        <TableCell role="header-cell" align="left">Invoice No.</TableCell>
                        <TableCell role="header-cell" align="left">Total Amount Net</TableCell>
                        <TableCell role="header-cell" align="left">Total Amount GST</TableCell>
                        <TableCell role="header-cell" align="left">Client ID</TableCell>
                        <TableCell role="header-cell" align="left">No. of Contracts</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {invoices.length > 0 ? invoices.map((invoice, index) => (
                        <InvoiceRow row={invoice} key={index} />
                    )) :
                        <TableRow>
                            <TableCell colSpan={6} align="center">
                                <CircularProgress />
                            </TableCell>
                        </TableRow>
                    }
                </TableBody>
            </Table>
        </TableContainer>
    );
}