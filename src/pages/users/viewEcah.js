import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import formatDate from 'date-fns/format';
import { viewEachUser } from '../../services/usersServives';
import { Page } from '../../components/page';
import { Button } from '../../components/button';

function EcahUser() {
  const [user, setUser] = useState({});
  const [location, setLocation] = useState({});
  const match = { params: useParams() };
  const navigate = useNavigate();

  useEffect(() => {
    getData();
  }, [match.params.id]);

  async function getData() {
    const id = `${match.params.id}`;
    viewEachUser(id)
      .then((response) => {
        console.log(response.data);
        setUser(response.data);
        setLocation(response.data.location);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <Page
      title="Ecah User"
      navigate={
        <Button
          small
          format="info"
          onClick={() => {
            navigate(`/users`);
          }}
        >
          View Users
        </Button>
      }
    >
      <>
        <div className="row">
          <div className="col-12 each-top">
            <div className="row">
              <div className="col-12 each-detail">
                <h5>User details</h5>
              </div>

              <div className="col-md-3 col-12 each-p">
                {user.picture ? (
                  <img className="userImage" src={`${user.picture}`} />
                ) : (
                  <img
                    className="userImage"
                    src={`https://via.placeholder.com/150`}
                  />
                )}
              </div>
              <div className="col-md-8 col-12 each-p">
                <div className="row">
                  <div className="col-md-6 col-12 each-p">
                    <p>
                      <span>Full Name</span>:{' '}
                      {user.firstName + ' ' + user.lastName}
                    </p>
                  </div>
                  <div className="col-md-6 col-12 each-p">
                    <p>
                      <span>Email</span>: {user.email}
                    </p>
                  </div>
                  <div className="col-md-6 col-12 each-p">
                    <p>
                      <span>Gender</span>:{' '}
                      {user.gender &&
                        user.gender.charAt(0).toUpperCase() +
                          user.gender.slice(1)}
                    </p>
                  </div>
                  <div className="col-md-6 col-12 each-p">
                    <p>
                      <span>Phone</span>: {user.phone}
                    </p>
                  </div>
                  <div className="col-md-6 col-12 each-p">
                    <p>
                      <span>Title</span>:{' '}
                      {user.title &&
                        user.title.charAt(0).toUpperCase() +
                          user.title.slice(1)}
                    </p>
                  </div>
                  <div className="col-md-6 col-12 each-p">
                    <p>
                      <span>Date of Birth</span>:{' '}
                      {user.dateOfBirth &&
                        formatDate(new Date(user.dateOfBirth), 'dd/MM/yyyy')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 each-top">
            <div className="row">
              <div className="col-12 each-detail">
                <h5>User location</h5>
              </div>
              <div className="col-md-6 col-12 each-p">
                <p>
                  <span>Country</span>: {location.country}
                </p>
              </div>
              <div className="col-md-6 col-12 each-p">
                <p>
                  <span>State</span>: {location.state}
                </p>
              </div>
              <div className="col-md-6 col-12 each-p">
                <p>
                  <span>City</span>: {location.city}
                </p>
              </div>
              <div className="col-md-6 col-12 each-p">
                <p>
                  <span>Street</span>: {location.street}
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    </Page>
  );
}

export default EcahUser;
