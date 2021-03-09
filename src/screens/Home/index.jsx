import React, { useState, useCallback, useEffect } from "react";
import logo from "../../logo.svg";
import { useTranslation } from "react-i18next";
import Button from "src/components/Button";
import storeImage from "src/assets/photo.jpeg";
import PopupConfirm from "src/components/PopupConfirm";
import TextInput, { useTextInputValue } from "src/components/TextInput";
import Dropdown, { useDropdownValue } from "src/components/Dropdown";
import DatePicker from "src/components/DatePicker";
import useAuth from "src/hooks/useAuth";
import { useHistory } from "react-router-dom";
import { doLogout } from "src/redux/auth";
import { useDispatch } from "react-redux";
import ComponentWithAuth from "./ComponentWithAuth.jsx";

const DropDownValues = [
  { id: 1, name: "Hà Nội" },
  { id: 2, name: "TP Hồ Chí Minh" },
  { id: 3, name: "Hải Phòng" },
  { id: 4, name: "Đà Nẵng" },
  { id: 5, name: "Cần Thơ" },
  { id: 6, name: "Bình Dương" },
];
const Home = (props) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const history = useHistory();
  const { username } = useAuth();
  const [showingConfirm, setShowinConfirm] = useState(false);
  const [workingUnit, setWorkingUnit] = useState("");
  const [email, onChangeEmail] = useTextInputValue("");
  const [province, onChangeProvince] = useDropdownValue("");
  const [birthDate, setBirthDate] = useState();

  const _handleOkConfirm = useCallback(() => {
    setShowinConfirm(false);
  }, []);

  const _handleChangeWorkingUnit = useCallback((event) => {
    setWorkingUnit(event.target.value);
  }, []);

  const _handleCancelConfirm = useCallback(() => {
    setShowinConfirm(false);
  }, []);

  const _handleClickNew = useCallback(() => {
    setShowinConfirm(true);
  }, []);

  const _handleChangeDay = useCallback((date) => setBirthDate(date), []);

  const _handleLogout = useCallback(() => {
    dispatch(doLogout({ history }));
  }, [dispatch, history]);

  useEffect(() => {
    console.log("username from localStorage", username);
  }, [username]);

  return (
    <div className="bg-gray-100">
      <PopupConfirm
        visible={showingConfirm}
        onOk={_handleOkConfirm}
        onCancel={_handleCancelConfirm}
        title={"Xác nhận"}
        content={
          "Thông tin và sản phẩm trong giỏ hàng sẽ không được lưu lại khi chưa hoàn tất việc thanh toán. Bạn có chắc chắn muốn dừng lại?"
        }
        redConfirm={false}
      />
      <div className="max-w-md mx-auto">
        <ComponentWithAuth />
      </div>
      <div className="max-w-md mx-auto">
        <div className="p-2 pt-4">
          <div className="bg-white p-6 rounded-xl shadow-md flex items-center space-x-4">
            <div className="flex-shrink-0">
              <img className="h-12 w-12" src={logo} alt="ChitChat Logo" />
            </div>
            <div>
              <div className="text-xl font-medium text-black">ChitChat</div>
              <p className="text-primary text-lg">{t("welcome")}</p>
            </div>
          </div>
        </div>
        <div className="p-2">
          <TextInput
            placeholder="Đơn vị công tác"
            value={workingUnit}
            onChange={_handleChangeWorkingUnit}
            inputMode={"text"}
          />
        </div>
        <div className="p-2">
          <TextInput
            placeholder="Email"
            value={email}
            onChange={onChangeEmail}
            inputMode={"email"}
          />
        </div>

        <div className="p-2">
          <Dropdown
            placeholder="Tỉnh/ Thành phố"
            listValue={DropDownValues}
            value={province}
            onChange={onChangeProvince}
          />
        </div>
        <div className="p-2">
          <DatePicker
            placeholder="Ngày sinh"
            value={birthDate}
            onDayChange={_handleChangeDay}
          />
        </div>
        <div className="p-2 flex flex-row justify-center space-x-4">
          <Button
            text="Explore your way"
            onClick={() => {
              console.log("Test test test");
            }}
          />
          <button
            className="flex items-center rounded-md bg-blue-100 text-blue-600 text-sm font-medium px-4 py-2 focus:outline-none"
            onClick={_handleClickNew}
          >
            <svg
              className="text-blue-500 mr-2"
              width="12"
              height="20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6 5a1 1 0 011 1v3h3a1 1 0 110 2H7v3a1 1 0 11-2 0v-3H2a1 1 0 110-2h3V6a1 1 0 011-1z"
              />
            </svg>
            New
          </button>
          <button
            className={
              "bg-error py-2 px-4 max-w-md flex flex-row justify-center items-center text-white rounded-md shadow-sm focus:outline-none focus:ring-4"
            }
            onClick={_handleLogout}
          >
            Logout
          </button>
        </div>
        <div className="p-2 max-w-md mx-auto">
          <form className="relative">
            <svg
              width="20"
              height="20"
              fill="currentColor"
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              />
            </svg>
            <input
              className="focus:border-primary focus:ring-1 focus:ring-light-blue-500 focus:outline-none w-full text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md py-2 pl-10"
              type="text"
              aria-label="Filter projects"
              placeholder="Filter projects"
            />
          </form>
        </div>
        <div className="p-2">
          <div className="mt-4 max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
            <div className="md:flex">
              <div className="md:flex-shrink-0">
                <img
                  className="h-48 w-full object-cover md:w-48"
                  src={storeImage}
                  alt="Man looking at item at a store"
                />
              </div>
              <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                  Case study
                </div>
                <a
                  href="#"
                  className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
                >
                  Finding customers for your new business
                </a>
                <p className="mt-2 text-gray-500">
                  Getting a new business off the ground is a lot of hard work.
                  Here are five ideas you can use to find your first customers.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* You have a new message! */}
        <div className="p-2 flex flex-col justify-center sm:py-12">
          <div className="relative py-3 sm:max-w-xl sm:mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
            <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
              <div className="max-w-md mx-auto">
                <div>
                  <img src={logo} className="h-7 sm:h-8" />
                </div>
                <div className="divide-y divide-gray-200">
                  <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                    <p>
                      An advanced online playground for Tailwind CSS, including
                      support for things like:
                    </p>
                    <ul className="list-disc space-y-2">
                      <li className="flex items-start">
                        <span className="h-6 flex items-center sm:h-7">
                          <svg
                            className="flex-shrink-0 h-5 w-5 text-cyan-500"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                        <p className="ml-2">
                          Customizing your
                          <code className="text-sm font-bold text-gray-900">
                            tailwind.config.js
                          </code>{" "}
                          file
                        </p>
                      </li>
                      <li className="flex items-start">
                        <span className="h-6 flex items-center sm:h-7">
                          <svg
                            className="flex-shrink-0 h-5 w-5 text-cyan-500"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                        <p className="ml-2">
                          Extracting classes with
                          <code className="text-sm font-bold text-gray-900">
                            @apply
                          </code>
                        </p>
                      </li>
                      <li className="flex items-start">
                        <span className="h-6 flex items-center sm:h-7">
                          <svg
                            className="flex-shrink-0 h-5 w-5 text-cyan-500"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                        <p className="ml-2">
                          Code completion with instant preview
                        </p>
                      </li>
                    </ul>
                    <p>
                      Perfect for learning how the framework works, prototyping
                      a new idea, or creating a demo to share online.
                    </p>
                  </div>
                  <div className="pt-6 text-base leading-6 font-bold sm:text-lg sm:leading-7">
                    <p>Want to dig deeper into Tailwind?</p>
                    <p>
                      <a
                        href="https://tailwindcss.com/docs"
                        className="text-cyan-600 hover:text-cyan-700"
                      >
                        {" "}
                        Read the docs &rarr;{" "}
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
