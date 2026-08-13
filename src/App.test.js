// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders MeshNexus title', () => {
    render(<App />);
    const titleElement = screen.getByText(/MeshNexus/i);
    expect(titleElement).toBeInTheDocument();
});
