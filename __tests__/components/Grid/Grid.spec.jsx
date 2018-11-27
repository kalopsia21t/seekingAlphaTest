import React from 'react';
import { shallow, mount } from 'enzyme';

import Grid from '../../../src/components/Grid/Grid';
import Cell from '../../../src/components/Cell/Cell';

describe('<Grid />', () => {
    beforeEach(() => {
        jest.useFakeTimers();
    });

    test('must shallow ok', () => {
        const container = mount(<Grid />);
        expect(container).toMatchSnapshot();
    });

    test('should render Cell component', () => {
        const container = mount(<Grid />);
        expect(container).toContainReact(<Cell color={true} />);
    });

    test('should after sec should call setInterval and call callback', () => {
        const container = mount(<Grid />);
        expect(setInterval).toHaveBeenCalledTimes(1);
        expect(setInterval).toHaveBeenLastCalledWith(expect.any(Function), 1000);
    });
});