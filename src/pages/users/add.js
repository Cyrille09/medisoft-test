import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { parsePhoneNumberFromString } from 'libphonenumber-js';
import parseDate from 'date-fns/parse';
import { addUser } from '../../services/usersServives';
import { Page } from '../../components/page';
import { Button } from '../../components/button';
import UserForm from '../../components/user-form';

function AddUser() {
  const navigate = useNavigate();

  function validator(values) {
    let emailReg = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    let dateReg =
      /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;
    let phoneParsed = parsePhoneNumberFromString(values.phone, 'GB');

    const errors = {};

    if (!values.firstName) {
      errors.firstName = 'First name is required';
    }
    if (!values.lastName) {
      errors.lastName = 'Last name is required';
    }
    if (!values.email) {
      errors.email = 'Email is required';
    } else if (!emailReg.test(values.email)) {
      errors.email = 'Invalid email';
    }
    if (!values.gender) {
      errors.gender = 'Gender is required';
    }
    if (!values.title) {
      errors.title = 'Title is required';
    }

    if (!values.phone) {
      errors.phone = 'Phone number is required';
    } else if (values.phone && (!phoneParsed || !phoneParsed.isValid())) {
      errors.phone =
        'Please enter a valid phone number including country code (e.g. +44)';
    }

    if (!values.dateOfBirth) {
      errors.dateOfBirth = 'Date of birth is required';
    } else if (!dateReg.test(values.dateOfBirth)) {
      errors.dateOfBirth = 'Invalid date';
    }

    return errors;
  }

  const initialValues = {
    title: '',
    firstName: '',
    lastName: '',
    email: '',
    gender: '',
    phone: '',
    dateOfBirth: '',
  };

  async function addRecord(values) {
    const addData = {
      ...values,
      dateOfBirth: parseDate(values.dateOfBirth, 'dd/MM/yyyy', new Date()),
    };

    addUser(addData)
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
      <UserForm
        initialValues={initialValues}
        validator={validator}
        submitRecord={addRecord}
        ui="addUser"
      />
    </Page>
  );
}

export default AddUser;
