import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  // Corrected import

test('renders learn react link', () => {
  render(
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </Router>
  );

  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

