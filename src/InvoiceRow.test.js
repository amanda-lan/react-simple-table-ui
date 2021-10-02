import { render, screen } from '@testing-library/react';
import InvoiceRow from './InvoiceRow';
import React from 'react';
import {
    BrowserRouter as Router,
} from "react-router-dom";

const invoice = {
    invoiced : "true"
}

test('renders Invoice Row', () => {
    render(
        <Router>
            <table>
                <tbody>
                    <InvoiceRow row={invoice}/>
                </tbody>
            </table>
        </Router>
    );
    const tableElement = screen.getByRole("table-row");
    expect(tableElement).toBeInTheDocument();
});

test('Invoice row column width', () => {
    render(
        <Router>
            <table>
                <tbody>
                <InvoiceRow row={invoice}/>
                </tbody>
            </table>
        </Router>
    );
    const colElements = screen.getAllByRole("body-cell");
    expect(colElements.length).toBe(6);
});
