import React from 'react';
import ContactItem from './ContactItem';

const styles = {
    ContactListWrapper: {
        width: '33%',
        border: '1px solid black',
        padding: '50px 30px',
        overflow: 'scroll',
        backgroundColor: '#FFE4B5'
        }
}


const ContactList = () => 
<div style ={styles.ContactListWrapper}><ContactItem /></div>

export default  ContactList;