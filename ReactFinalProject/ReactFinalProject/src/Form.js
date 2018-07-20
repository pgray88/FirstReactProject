import React, {Component} from 'react';
import {connect} from 'react-redux';

const styles = {
    formWrapper: {
    width:'66%',
    height:'100vh',
    border: '1px solid black',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'verdana'
    },

    innerForm: {
    padding: 100, 
    border: 'none',
    backgroundColor: '#9370DB',
    fontWeight: 'bold'
    },

    buttonUpdate: {
    backgroundColor: 'Green',
    border: '1px solid white',
    buttonColor: 'Green',
    color: 'Green',
    padding: '15px 32px',
    alignItems: 'center'
    },

    buttonDelete: {
     buttonColor:'red',
    backgroundColor: 'Red',
    border: '1px solid white',    
    color: 'Red',
    padding: '15px 32px',
    alignItems: 'center'
    },

    buttonAddContact: {
    backgroundColor: 'yellow',
    border: '1px solid white',   
     color: 'yellow',
    padding: '15px 32px',
     display: 'flex',
    }
    }

    class Form extends Component {
        componentDidMount(){
            this.props.onListChange(this.props.match.params.listId)
        }

        
        submit (e) {
            e.preventDefault();
        }
        focus(e) {
            e.target.value ='';
        }
     render() {
        const {listId} = this.props.match.params,
        {name, email, number, onInputChange, onUpdate, onDelete, onAdd} =this.props;
    return (
    <form style ={styles.formWrapper} onSubmit={this.submit} > 
    <div style ={styles.innerForm}>
    <div>
    <label> Name:    
    <input type='text' name='name' value={name} onFocus={this.focus} onChange={(e)=> onInputChange(e.target.name, e.target.value)} /></label>
    <br />
    <br />
    <label> Email:
    < input type='text' name='email' value={email} onFocus={this.focus} onChange={(e)=> onInputChange(e.target.name, e.target.value)} /></label>
    <br />
    <br />
    <label> Phone:< input type='text'name='number'value={number} onFocus={this.focus} onChange={(e)=> onInputChange(e.target.name, e.target.value)} /></label>
    </div>

    <div style ={styles.buttonUpdate} >
    <input type='button' value='Update' onClick={() => onUpdate(listId)} /> </div>

    <div style ={styles.buttonDelete} > <input type='button' value='Delete'onClick={() => onDelete(listId)}/> </div>
    <br />

    </div>
    <div style ={styles.buttonAddContact} ><input type='button' value='Add New Contact' onClick={onAdd}/> </div>
    </form>
    );
    }
    }
    
    const mapStateToProps= state => {
    return {
    items: state.list,
    name: state.name,
    email: state.email,
    number: state.number
    }
    }
    const mapDispatchToProps= dispatch => {
    return {
        onListChange: (id) => dispatch({type:'CHANGE_LIST', id}),
        onInputChange: (name, value)=> dispatch({type: 'CAPTURE_INPUT', payload: {name,value}}),
        onUpdate: (id)=> dispatch({type:'UPDATE', id}),
        onDelete: (id)=> dispatch({type:'DELETE', id}),
        onAdd: ()=> dispatch({type:'ADD',}),
    }
    }

    export default connect(mapStateToProps, mapDispatchToProps) (Form);