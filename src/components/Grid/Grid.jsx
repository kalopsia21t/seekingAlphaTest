import React from 'react';
import styles from './Grid.less';

import Cell from '../Cell/Cell';
import { generateGridMap, updateGridMap } from '../../utils/helper.utils'

class Grid extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            gridMap: generateGridMap(50),         
        }
    }

    componentDidMount() {
        setInterval(this.updateGridMap, 1000);
    }

    componentWillUnmount() {
        clearInterval();
    }
    
    updateGridMap = () => {
        this.setState({ gridMap: updateGridMap(this.state.gridMap) });
    }
    
    renderRows = () => {
        return this.state.gridMap.map((row, rowIndex) => (
            <div key={`row-${rowIndex}`} className={styles.row}>
                {
                    row.map((cell, cellIndex) => (
                        <Cell key={`cell-${cellIndex}`} color={cell} />
                    ))
                }
            </div>
        ));
    };

    render () {
        return (
        <div className={styles.gridWrapper}>
            <div className={styles.grid}>
                { this.renderRows() }
            </div>
        </div>)
    }
}

export default Grid;