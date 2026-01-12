import React from 'react'
import { render, screen } from '@testing-library/react'

import NotFoundPage from '../pages/404'
test('Displays the correct title', () => {
  const { getByText } = render(<NotFoundPage />)
  expect(screen.getByText('Error 404')).toBeInTheDocument()
})
