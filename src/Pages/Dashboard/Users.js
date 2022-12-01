import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';

const Users = () => {
    const { isLoading, error, data: users, refetch} = useQuery(["users"], () =>
    fetch(`http://localhost:5000/user`).then(res =>
      res.json()
    ))
  
  
    console.log(users);
    if (isLoading) {
      return <Loading></Loading>;
    }
  
    return (
        <div className="overflow-x-auto">
  <table className="table w-full">
    {/* <!-- head --> */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
      {/* <!-- row 1 --> */}
      <tr>
        <th>1</th>
        <td>Cy Ganderton</td>
        <td>Quality Control Specialist</td>
        <td>Blue</td>
      </tr>
    </tbody>
  </table>
</div>
    );
};

export default Users;