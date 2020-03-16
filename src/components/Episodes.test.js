import React from 'react';
import { render } from '@testing-library/react';
import Episodes from './Episodes';

test('Episodes shows data when rerendered with new episodes', () => {
    const { queryAllByTestId, rerender } = render(
        <Episodes episodes={[]} />
    );

    expect(queryAllByTestId('episode')).toStrictEqual([]);
    expect(queryAllByTestId('episode')).toHaveLength(0);

    rerender(
        <Episodes episodes={episodes} />
    );

    expect(queryAllByTestId('episode')).toHaveLength(10);
});