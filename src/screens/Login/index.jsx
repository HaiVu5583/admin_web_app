import React, { useState, useCallback } from "react";
import { useTranslation } from "react-i18next";
import Button from "src/components/Button";
import TextInput, { useTextInputValue } from "src/components/TextInput";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { requestLogin, selectLoading } from "src/redux/auth";

const Login = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { t } = useTranslation();
  const [username, onChangeUserName] = useTextInputValue("");
  const [password, onChangePassword] = useTextInputValue("");
  const loading = useSelector(selectLoading);
  const _handlePressLogin = useCallback(async () => {
    dispatch(requestLogin({ username, password, history }));
  }, [username, password, history]);

  return (
    <div className="bg-gray-100 w-screen h-screen pt-16 px-4">
      <div className="max-w-md shadow-md bg-white p-4 rounded-md mx-auto">
        <div className="p-2 pt-4">
          <p className="text-primary text-lg">{t("app_name")}</p>
        </div>
        <div className="p-2">
          <TextInput
            placeholder={t("username")}
            value={username}
            onChange={onChangeUserName}
            inputMode={"text"}
            type={"text"}
          />
        </div>
        <div className="p-2">
          <TextInput
            placeholder={t("password")}
            value={password}
            onChange={onChangePassword}
            inputMode={"email"}
            type={"password"}
          />
        </div>

        <div className="p-2 flex flex-row justify-center space-x-4">
          <Button
            text={t("login")}
            onClick={_handlePressLogin}
            style={{ flex: 1 }}
            loading={loading}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
