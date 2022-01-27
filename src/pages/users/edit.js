import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { viewEachUser, updateUser } from '../../services/usersServives';
import { Page } from '../../components/page';
import { Button } from '../../components/button';
import UserForm from '../../components/user-form';

function EditUser() {
  const [user, setUser] = useState({});
  const match = { params: useParams() };
  let id = `${match.params.id}`;
  const navigate = useNavigate();

  useEffect(() => {
    getData();
  }, [match.params.id]);

  function validator(values) {
    const errors = {};

    if (!values.firstName) {
      errors.firstName = 'First name is required';
    }
    if (!values.lastName) {
      errors.lastName = 'Last name is required';
    }

    if (!values.title) {
      errors.title = 'title is required';
    }

    return errors;
  }

  const initialValues = {
    firstName: user.firstName || '',
    lastName: user.lastName || '',
    title: user.title || '',
  };

  async function getData() {
    viewEachUser(id)
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  async function updateRecord(values) {
    const updateData = {
      ...values,
    };
    console.log(updateData);

    updateUser(id, updateData)
      .then((response) => {
        console.log(response.data);
        navigate(`/users`);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  }

  return (
    <Page
      title="Add User"
      navigate={
        <Link to="/users">
          <Button
            small
            format="info"
            onClick={() => {
              navigate(`/users`);
            }}
          >
            View user lists
          </Button>
        </Link>
      }
    >
      {user.firstName && (
        <UserForm
          initialValues={initialValues}
          validator={validator}
          submitRecord={updateRecord}
        />
      )}
    </Page>
  );
}

export default EditUser;
