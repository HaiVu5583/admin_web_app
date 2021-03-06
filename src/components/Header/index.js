import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { doLogout } from "src/redux/auth";
import { useHistory } from "react-router-dom";
import * as Icon from "react-icons/fi";

const Header = (props) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { username } = props;
  const history = useHistory();
  const _handleLogout = useCallback(() => {
    dispatch(doLogout({ history }));
  }, [dispatch, history]);

  return (
    <div className="flex items-center h-14 bg-gray-800 px-4 border-b border-gray-300 border-opacity-50">
      <Icon.FiMenu color={"white"} size={24} />
      <div className="flex flex-1 items-center justify-end">
        <div className="text-white text-sm">
          {t("hello")}, {username}
        </div>
        <button
          className={
            "bg-error py-2 px-4 max-w-md flex flex-row justify-center items-center text-white rounded-md shadow-sm focus:outline-none focus:ring-4 ml-4"
          }
          onClick={_handleLogout}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Header;
