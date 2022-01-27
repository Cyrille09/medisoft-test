import React from 'react';
import { Formik, Form } from 'formik';
import { Link } from 'react-router-dom';
import { Input } from '../fields/input';
import { Select } from '../fields/select';
import { MaskedInput } from '../fields/maskedInput';
import { Button } from '../button';

function UserForm({ ui, initialValues, validator, submitRecord }) {
  return (
    <div>
      <Formik
        form
        initialValues={initialValues}
        validate={validator}
        onSubmit={submitRecord}
      >
        <Form>
          <div className="row">
            <div className="col-md-6 col-12 form-group">
              <Input
                label="First Name"
                placeholder="First Name"
                type="text"
                name="firstName"
                id="firstName"
              />
            </div>
            <div className="col-md-6 col-12 form-group">
              <Input
                label="Last Name"
                placeholder="Last Name"
                type="text"
                name="lastName"
                id="lastName"
              />
            </div>
            {ui === 'addUser' && (
              <div className="col-md-6 col-12 form-group">
                <Input
                  label="Email"
                  placeholder="Email"
                  type="text"
                  name="email"
                  id="email"
                />
              </div>
            )}
            {ui === 'addUser' && (
              <div className="col-md-6 col-12 form-group">
                <Input
                  label="Phone Number"
                  placeholder="Phone Number"
                  type="text"
                  name="phone"
                  id="phone"
                />
              </div>
            )}
            {ui === 'addUser' && (
              <div className="col-md-6 col-12 form-group">
                <MaskedInput
                  label="Date of birth"
                  mask="99/99/9999"
                  maskChar=" "
                  type="text"
                  placeholder="DD/MM/YYYY"
                  name="dateOfBirth"
                  id="dateOfBirth"
                />
              </div>
            )}
            {ui === 'addUser' && (
              <div className="col-md-6 col-12 form-group">
                <Select
                  label="Gender"
                  name="gender"
                  id="gender"
                  options={[
                    {
                      label: 'Male',
                      value: 'male',
                    },
                    {
                      label: 'Female',
                      value: 'femmale',
                    },
                  ]}
                />
              </div>
            )}
            <div className="col-md-6 col-12 form-group">
              <Select
                label="Title"
                name="title"
                id="title"
                options={[
                  {
                    label: 'Ms',
                    value: 'ms',
                  },
                  {
                    label: 'Miss',
                    value: 'miss',
                  },
                  {
                    label: 'Mr',
                    value: 'mr',
                  },
                  {
                    label: 'Mrs',
                    value: 'mrs',
                  },
                ]}
              />
            </div>
            <div className="col-12 form-group">
              <div className="row">
                <div className="col-6">
                  <Button format="success" type="submit">
                    Submit
                  </Button>
                </div>
                <div className="col-6 rightAlign">
                  <Link to="/users">
                    <Button format="primary" type="submit">
                      Cancel
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Form>
      </Formik>
    </div>
  );
}

export default UserForm;
