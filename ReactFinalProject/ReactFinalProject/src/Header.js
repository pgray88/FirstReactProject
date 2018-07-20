import React from 'react';

const styles={
  headerwrapper: {
     width:'100%',
     display: 'flex',
     border: '1px solid black',
     padding: 10,
     fontsize: '100x',
     justifyContent: 'center',
     alignItems:'center',
     fontWeight:'bold',
     backgroundColor: '#00BFFF'
}

}
const header = () => 
<div style={styles.headerwrapper}> Contacts </div>

  export default header;