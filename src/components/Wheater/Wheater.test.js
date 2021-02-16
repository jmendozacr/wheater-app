import React from 'react';
import { render } from '@testing-library/react';
import Wheater from './Wheater'; // SUT
import '@testing-library/jest-dom/extend-expect';

// TDD
test("Wheater render", async () => {
    const { findByRole } = render(<Wheater temperature={20} state="rain"/>);

    const temp = await findByRole("heading");

    expect(temp).toHaveTextContent("20");
});