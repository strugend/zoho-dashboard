import Table from 'react-bootstrap/Table';

function Tables(props) {
  return (
    <Table  bordered hover>
      <thead>
        <tr>
            {props.heading.map((item,key)=>{
                return (
                <th key={key}>{item}</th>
                )
            })}
        </tr>
      </thead>
      <tbody>
            {props.row.map((row,key)=>{
                return(
                    <tr key={key}>
                        {row.map((item,key)=>{
                            return(
                             
                                <td key={key}>{item}</td>
                                
                            )
                        })}
                    </tr>
                    
                )

                
            })}
        
      </tbody>
    </Table>
  );
}

export default Tables;