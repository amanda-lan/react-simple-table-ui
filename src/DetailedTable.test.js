import { render, screen } from '@testing-library/react';
import React from 'react';
import DetailedTable from "./DetailedTable";

test('renders Detailed Table', () => {
    render(<DetailedTable />);
    const tableElement = screen.getByRole("detail-table");
    expect(tableElement).toBeInTheDocument();
});

test('Detailed Table column width', () => {
    render(<DetailedTable />);
    const colElements = screen.getAllByRole("header-cell");
    expect(colElements.length).toBe(12);
});