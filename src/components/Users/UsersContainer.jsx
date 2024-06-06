import React from 'react';
import { connect } from 'react-redux';
import { follow, unfollow, setCurrentPage, getUsers } from '../../redux/users-reducer';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { getAccounts, getCurrentPage, getFollowingInProgress, getIsFetching, getPageSize, getTotalUsersCount } from '../../redux/users-selectors';
import { compose } from 'redux';


// АПИШНЫЙ КЛАСС
class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize)
  }
  onPageChanged = (pageNumber) => {
    this.props.getUsers(pageNumber, this.props.pageSize)
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
      followingInProgress={this.props.followingInProgress}
      />}
      </>
    );
  }
}

// СТЭЙТЫ
let mapStateToProps = (state) => {
  return {
    users: getAccounts(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state)
  }
}

// ДИСПАТЧИ УЖЕ В ЭКСПОРТЕ
export default compose(
  connect(mapStateToProps, {follow, unfollow, setCurrentPage, getUsers}),
  withAuthRedirect
)(UsersContainer)