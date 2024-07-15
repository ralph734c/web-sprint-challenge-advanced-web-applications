import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import Spinner from './Spinner';

describe('Spinner Component', () => {
  test('renders spinner when on is true', async () => {
    render(<Spinner on={true} />);
    await waitFor(() => expect(screen.getByText('Please wait...')).toBeInTheDocument());
    expect(screen.getByText('Please wait...')).toHaveTextContent('Please wait...');
    expect(screen.getByText('Please wait...')).toBeVisible();
  });

  test('does not render spinner when on is false', async () => {
    render(<Spinner on={false} />);
    await waitFor(() => expect(screen.queryByText('Please wait...')).not.toBeInTheDocument());
  });
});