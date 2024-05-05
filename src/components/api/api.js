import axios from "axios";

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    "API-KEY": "4344f6d1-6abe-4fa0-82a0-b9a81628275d",
  }
})

export const usersAPI = {
  getUsers(currentPage, pageSize) {
    return instance
      .get(
        `users?page=${currentPage}&count=${pageSize}`
      )
      .then((response) => {
        return response.data
      });
  },
  unfollow(id) {
    return instance
    .delete(
      `follow/${id}`,
    )
  },
  follow(id) {
    return instance
    .post(
      `follow/${id}`
    )
  }
}
