
import React from 'react'
import {render, fireEvent, screen} from '@testing-library/react'
import HiddenMessage from './RTL'


test('shows the children when the checkbox is checked', () => {
    const testMessage = 'Test Message'
    render(<HiddenMessage>{testMessage}</HiddenMessage>)
  
    expect(screen.queryByText(testMessage)).toBeNull()
    fireEvent.click(screen.getByLabelText(/show/i))
    expect(screen.getByText(testMessage)).toBeDefined();
})