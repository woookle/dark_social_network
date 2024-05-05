import React from 'react';
import { connect } from 'react-redux';
import { follow, setUsers, unfollow, setCurrentPage, setTotalUsersCount, toggleIsFetching } from '../../redux/users-reducer';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import { usersAPI } from '../api/api';


// АПИШНЫЙ КЛАСС
class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetching(true)
    usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then((data) => {
      this.props.toggleIsFetching(false)
      this.props.setUsers(data.items);
      this.props.setTotalUsersCount(data.totalCount)
    });
  }
  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber)
    this.props.toggleIsFetching(true)
    usersAPI.getUsers(pageNumber, this.props.pageSize).then((data) => {
      this.props.toggleIsFetching(false)
      this.props.setUsers(data.items);
    });
  }
  render() {

    return (
      <>
      {this.props.isFetching ? <Preloader /> : 
      <Users 
      totalUsersCount={this.props.totalUsersCount}
      pageSize={this.props.pageSize}
      currentPage={this.props.currentPage}
      onPageChanged={this.onPageChanged}
      users={this.props.users}
      follow={this.props.follow}
      unfollow={this.props.unfollow}
      />}
      </>
    );
  }
}

// СТЭЙТЫ
let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching
  }
}

// ДИСПАТЧИ УЖЕ В ЭКСПОРТЕ

export default connect(mapStateToProps, 
  {follow, setUsers, unfollow, setCurrentPage, setTotalUsersCount, toggleIsFetching})(UsersContainer)