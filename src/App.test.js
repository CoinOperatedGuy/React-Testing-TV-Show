import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('App renders properly', () => {
    const mockGetData = jest.fn();
    const { getByText, queryByText } = render(
        <App getData={mockGetData} show={false} />
);  
    getByText(/get data/i);
    expect(queryByText(/we are fetching data/i)).toBeNull();
});

test('App transitions to loading state when isFetchingData is true', () => {
    const mockGetData = jest.fn();
    const { getByText, queryByText, rerender } = render(
        <App getData={getMockData} show={false} />
    );
    
    getByText(/get data/i);
    expect(queryByText(/we are fecthing data/i)).toBeNull();

    rerender(
        <App getData={mockGetData} show={true} />
    );

    getByText(/we are fetching data/i);
    expect(queryByText(/get data/i)).toBeNull();
});