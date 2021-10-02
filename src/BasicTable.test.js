import { render, screen } from '@testing-library/react';
import BasicTable from './BasicTable';
import React from 'react';

test('renders Basic Table', () => {
    render(<BasicTable />);
    const tableElement = screen.getByRole("basic-table");
    expect(tableElement).toBeInTheDocument();
});

test('Basic Table column width', () => {
    render(<BasicTable />);
    const colElements = screen.getAllByRole("header-cell");
    expect(colElements.length).toBe(6);
});
