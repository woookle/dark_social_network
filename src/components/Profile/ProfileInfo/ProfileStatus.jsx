import React from "react";
import style from "./ProfileInfo.module.css";

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.status
  };

  setModeActivate = () => {
    this.setState({
      editMode: true
    })
  }

  setModeDeactiv = () => {
    this.setState({
      editMode: false
    })
    this.props.updateStatus(this.state.status)
  }

  onStatusChange = (e) => {
    this.setState({
      status: e.currentTarget.value
    });
  }

  render() {
    return (
      <div>
        {!this.state.editMode ? (
          <span onClick={this.setModeActivate}>{this.props.status || 'Status not found'}</span>
        ) : (
          <input
            type="text"
            onChange={this.onStatusChange}
            value={this.state.status}
            className={style.change_status}
            onBlur={this.setModeDeactiv}
            autoFocus={true}
          />
        )}
      </div>
    );
  }
}

export default ProfileStatus;
