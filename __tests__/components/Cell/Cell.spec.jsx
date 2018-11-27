import React from 'react';
import { shallow, mount } from 'enzyme';

import Cell from '../../../src/components/Cell/Cell';

describe('<Cell />', () => {
    // test('must render black if color prop is true', () => {
    //     const container = mount(<Cell color={true}/>);
    //     expect(container).toMatchSnapshot();
    // });

    test('must render white if color prop is false', () => {
        const container = mount(<Cell color={false}/>);
        expect(container).toMatchSnapshot();
    });

    test('must have property color equal false if props wasn\'t passed', () => {
        const container = mount(<Cell />);
        expect(container).toHaveProp({ color: false });
    });
});