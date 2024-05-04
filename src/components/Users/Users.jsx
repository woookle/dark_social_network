import React from "react";
import userPhoto from "../../assets/images/userPNG.jpg";
import style from "./Users.module.css";

let Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  let curP = props.currentPage;
  let curPF = curP - 5 < 0 ? 0 : curP - 5;
  let curPL = curP + 5;
  let slicedPages = pages.slice(curPF, curPL);

  return (
    <div>
      <div className={style.pagesCountBlock}>
        {slicedPages.map((p) => {
          return (
            <span
              className={props.currentPage === p && style.selectedPage}
              onClick={() => {
                props.onPageChanged(p);
              }}
            >
              {p}
            </span>
          );
        })}
      </div>
      {props.users.map((u) => <div key={u.id} className={style.user_block}>
          <div className={style.left_block}>
            <span className={style.avatar_and_btn}>
              <div>
                <img
                  className={style.userPhoto}
                  src={u.photos.small != null ? u.photos.small : userPhoto}
                />
              </div>
              <div>
                {u.followed ? (
                  <button
                    className={style.flw_btn}
                    onClick={() => {
                      props.unfollow(u.id);
                    }}
                    value='active'
                  >
                    Unfollow
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      props.follow(u.id);
                    }}
                    className={style.flw_btn}
                  >
                    Follow
                  </button>
                )}
              </div>
            </span>
            <span className={style.fullname_and_status}>
              <div className={style.user_full_name}>{u.name}</div>
              <div className={style.user_status}>{u.status}</div>
            </span>
          </div>
          <span className={style.location}>
            <div>{"u.location.country"}</div>
            <div>{"u.location.city"}</div>
          </span>
        </div>
      )}
    </div>
  );
};

export default Users;
