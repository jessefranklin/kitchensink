import '@testing-library/jest-dom/extend-expect'
import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import Login from './Login'

// https://codesandbox.io/s/github/kentcdodds/react-testing-library-examples/tree/master/?fontsize=14&module=%2Fsrc%2F__tests__%2Freact-redux.js&previewwindow=tests

test('allows the user to login successfully', async () => {
  const fakeUserResponse = {token: 'fake_user_token'}
  jest.spyOn(window, 'fetch').mockImplementationOnce(() => {
    return Promise.resolve({
      json: () => Promise.resolve(fakeUserResponse),
    })
  })

  render(<Login />)

  fireEvent.change(screen.getByLabelText(/username/i), {
    target: {value: 'chuck'},
  })
  fireEvent.change(screen.getByLabelText(/password/i), {
    target: {value: 'norris'},
  })

  fireEvent.click(screen.getByText(/submit/i))

  const alert = await screen.findByRole('alert')

  expect(alert).toHaveTextContent(/congrats/i)
  expect(window.localStorage.getItem('token')).toEqual(fakeUserResponse.token)
})
