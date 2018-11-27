import React from 'react';
import classnames from 'classnames';
import styles from './Cell.less'

class Cell extends React.PureComponent {
    static defaultProps = {
        color: false
    };
    
    constructor (props) {
        super(props);
    }
    
    render() {
        const { color } = this.props;
        return (<div className={classnames(styles.cell, color ? styles.cellBlack : styles.cellWhite )}>

        </div>)
    }
}

export default Cell;