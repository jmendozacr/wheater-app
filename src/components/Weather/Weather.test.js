import React from 'react';
import { render } from '@testing-library/react';
import Weather from './Weather'; // SUT
import '@testing-library/jest-dom/extend-expect';

// TDD
test("Weather render", async () => {
    const { findByRole } = render(<Weather temperature={20} state="clouds"/>);

    const temp = await findByRole("heading");

    expect(temp).toHaveTextContent("20");
});