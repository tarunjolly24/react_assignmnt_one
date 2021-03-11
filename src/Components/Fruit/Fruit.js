import React from 'react';

const Fruit =(props)=>{

    return (
        <div>
            <input type="text" onChange={props.currentadd} value={props.currentvalue} onKeyPress={props.onkeypress}></input>
            <button type="button" onClick={props.add} >Submit</button>
        </div>


    )


}

export default Fruit;