import { generateGridMap, updateGridMap } from '../../src/utils/helper.utils';

const gridMock = [
    [ false, false, false, false, false ],
    [ false, false, true, false, false ],
    [ false, false, true, false, false ],
    [ false, false, true, false, false ],
    [ false, false, false, false, false ]
];

const gridMockUpdated = [
    [ false, false, false, false, false ],
    [ false, false, false, false, false ],
    [ false, true, true, true, false ],
    [ false, false, false, false, false ],
    [ false, false, false, false, false ]
];

test('function that generate map must return array', () => {
    const mapLength = 3;
    expect(generateGridMap(mapLength)).toHaveLength(mapLength);
});

test('function that updated map must return correct grid', () => {
    expect(updateGridMap(gridMock)).toEqual(gridMockUpdated);
});
