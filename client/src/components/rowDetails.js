
import React from 'react'
import { Link } from 'react-router-dom'

function RowDetails({ Email, Lastname, Firstname, Age, _id, onDelete }) {
 
  return (
    <tr>
    <th>{Email}</th>
    <td>{Lastname}</td>
    <td>{Firstname}</td>
    <td>{Age}</td>
    <td className="gap__actions">
     
     <span className="badge bg-info"><Link to={`/${_id}`} className="text-white"><i className="fas fa-edit"></i></Link></span>
     
      <span className="badge bg-danger" ><i
        className="fas fa-trash-alt" onClick={()=>onDelete(_id)}
      ></i></span>
    </td>
  </tr>
  )
}

export default RowDetails