import React from 'react';
import '@testing-library/jest-dom/extend-expect'
import ContactForm from '..'
import { render, cleanup } from '@testing-library/react'

afterEach(cleanup)

describe('CONTACT COMPONENT', () => {
    it('renders?', () => {
        render(<ContactForm/>)
    })

    it('matches snapshot?', () => {
        const { asFragment } = render(<ContactForm/>)
        expect(asFragment()).toMatchSnapshot()
    })

})

describe('H1 and BUTTON VISIBLE?', () => {

    it('renders?', () => {
        const { getByTestId } = render(<ContactForm/>)  
        expect(getByTestId('h1tag')).toHaveTextContent('Contact me')
        expect(getByTestId('submit')).toHaveTextContent('Submit') 
    })
})