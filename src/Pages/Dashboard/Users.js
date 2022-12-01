import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import UsersInfo from './UsersInfo';

const Users = () => {
    const { isLoading, error, data: users, refetch} = useQuery(["users"], () =>
    fetch(`http://localhost:5000/user`, {
        method: 'GET', 
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res =>
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
      {
        users.map(user => <UsersInfo key={user._id} user={user} refetch={refetch}></UsersInfo>)
      }
    </tbody>
  </table>
</div>
    );
};

export default Users;