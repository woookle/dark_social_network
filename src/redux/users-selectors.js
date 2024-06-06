// import { createSelector } from "reselect";

export const getAccounts = (state) => (state.usersPage.users)

export const getPageSize = (state) => (state.usersPage.pageSize)

export const getTotalUsersCount = (state) => (state.usersPage.totalUsersCount)

export const getCurrentPage = (state) => (state.usersPage.currentPage)

export const getIsFetching = (state) => (state.usersPage.isFetching)

export const getFollowingInProgress = (state) => (state.usersPage.followingInProgress)


// ПРИМЕР СЕЛЕКТОРА
// export const getUsersSuper = createSelector(getAccounts, (users) => {
//   return users.filter(u => (console.log("yes")));
// })
