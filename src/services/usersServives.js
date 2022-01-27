import client from '../utils/client';

/**
 * View users service
 */
export async function viewUsers() {
  return await client.get(`/user/`, {});
}

/**
 * View each user service
 */
export async function viewEachUser(id) {
  return await client.get(`/user/${id}`, {});
}

/**
 * Add user service
 */
export async function addUser(addData) {
  return await client.post(`/user/create`, {
    firstName: addData.firstName,
    lastName: addData.lastName,
    title: addData.title,
    email: addData.email,
    gender: addData.gender,
    dateOfBirth: addData.dateOfBirth,
    phone: addData.phone,
  });
}

/**
 * Update user service
 */
export async function updateUser(id, updateData) {
  return await client.put(`/user/${id}`, {
    firstName: updateData.firstName,
    lastName: updateData.lastName,
    title: updateData.title,
  });
}
