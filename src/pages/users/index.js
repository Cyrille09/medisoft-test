import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { viewUsers } from '../../services/usersServives';
import { Page } from '../../components/page';
import { Button } from '../../components/button';

function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    viewUsers()
      .then((response) => {
        setUsers(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <Page
      title="All Users"
      navigate={
        <Link to="/users/add">
          <Button small format="info">
            Add User
          </Button>
        </Link>
      }
    >
      <table className="table table-bordered table-hover">
        <thead className="headerTable">
          <tr>
            <th>Picture</th>
            <th>Full Name</th>
            <th>Title</th>
            <th colSpan="2" className="col-span">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>
                {user.picture ? (
                  <img className="imageRound" src={`${user.picture}`} />
                ) : (
                  <img
                    className="imageRound"
                    src={`https://via.placeholder.com/150`}
                  />
                )}
              </td>
              <td>{`${user.firstName} ${user.lastName}`}</td>
              <td>{`${
                user.title &&
                user.title.charAt(0).toUpperCase() + user.title.slice(1)
              }`}</td>
              <td className="col-span">
                <Link to={`/users/each/${user.id}`}>
                  <Button small format="primary">
                    View
                  </Button>
                </Link>
              </td>
              <td className="col-span">
                <Link to={`/users/edit/${user.id}`}>
                  <Button small format="secondary">
                    Edit
                  </Button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Page>
  );
}

export default Users;
