import React from 'react'; 
import {connect} from 'react-redux';
import {Link } from 'react-router-dom';

const styles = {
    listWrapper: {
    overflow: 'hidden',
    padding: '10px'
    },
    innerList: {
        padding: 10, 
        overflow: 'hidden',
        backgroundColor: '	#FFC0CB',
        justifyContent: 'center'
        },
    bold: {
    fontWeight: 'bold'
    }
    }
const contactItem = props => {
    const list = props.myList.map(item => {
        return (
        <Link to={'${item.id}'} key={item.id}>
        <div style={styles.listWrapper}> 
        <div style={styles.innerList}>
        <p><span style={styles.bold}>Name:</span>{item.name}</p>
        <p><span style={styles.bold}>Email: </span>{item.email}</p>
        </div>
        </div>
        </Link>
        );
    });
    return <div> {list}  </div>
}

const mapStatetoProps = state => {
    return {
        myList: state.list
    }
}
export default connect(mapStatetoProps,null) (contactItem);
