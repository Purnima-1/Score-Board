import React from "react";
import { useSelector } from "react-redux";
import { Card, Table } from "react-bootstrap";


const Total = () => {
  const counter1 = useSelector((state) => state.counterR.counter1);
  const counter2 = useSelector((state) => state.counterR.counter2);
  //const dispatch = useDispatch()
  return (
    <div>
      <hr />
      <h2 className="max"> Maximum scores : 25</h2>
      <Table striped bordered hover className='container'>
        <thead>
          <tr>
            <th>SL NO.</th>
            <th>Teams</th>
            <th>Scores</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Ace Holes</td>
            <td>{counter1}</td>
          </tr>
          <tr>
            <td>2</td>
            <td>All Net</td>
            <td>{counter2}</td>
          </tr>
          
        </tbody>
      </Table>

      <h2 className="winner">
        {" "}
        Winner:
        {counter1 > counter2
          ? " Ace Holes"
          : counter2 > counter1
          ? " All Net"
          : ""}{" "}
      </h2>
     
    </div>
  );
};

export default Total;
