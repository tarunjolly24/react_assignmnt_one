import React from 'react';
import './Table.css';
const Table = (props ) => {

    //fnction
    // const todelete=(e,index)=>{
    //     //  console.log(index);
    //     console.log(e);
    //     props.delete(index);
    // }

    return (
        <table className="table">
            <tbody>
            {
                props.list.map((item, index) => (
                     <tr key={index}>
                        <td>{item.name}</td>
                        <td>{item.quantity}</td>
                        <td><button onClick={() => props.delete(index)}>Delete</button></td>

                    </tr>
                ))
            }

            </tbody>
        </table>

    )


}

export default Table;