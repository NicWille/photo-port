import React from 'react'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import About from '..'

afterEach(cleanup)

describe('ABOUT COMPONENT', () => {

    it('renders?', () => {
        render(<About />)
    })

    it('matches snapshot DOM node structure', () => {
        const { asFragment } = render(<About />)
        expect(asFragment()).toMatchSnapshot()
    })

})