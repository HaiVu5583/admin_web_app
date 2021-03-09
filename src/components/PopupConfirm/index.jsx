import React, { useEffect } from "react";

const ConfirmPopup = (props) => {
  const {
    visible,
    children,
    onOk,
    onCancel,
    title,
    content,
    redConfirm = false,
  } = props;

  useEffect(() => {
    if (visible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [visible]);

  if (!visible) return <div />;
  return (
    <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-20 flex px-2">
      <div className="relative p-4 bg-white w-full max-w-md m-auto flex-col flex rounded-lg items-center">
        <div className="py-4">
          <p className="text-base font-semibold text-appBack">{title}</p>
        </div>
        {!!children ? (
          <div className="py-4">{children}</div>
        ) : (
          <div className="pt-1 pb-4">
            <p className="text-sm text-center text-appGray">{content}</p>
          </div>
        )}
        <div className="flex flex-row space-x-4 w-full">
          {!!onCancel && (
            <button
              className="h-11 font-semibold py-2 px-4 max-w-md bg-lightGray text-gray-900 rounded-md shadow-sm focus:outline-none focus:ring-4 flex-1"
              type="submit"
              onClick={onCancel}
            >
              Cancel
            </button>
          )}
          {!!onOk && (
            <button
              className={`${
                redConfirm ? "bg-error" : "bg-primary"
              } h-11 font-semibold py-2 px-4 min-w-md text-white rounded-md shadow-sm focus:outline-none focus:ring-4 flex-1`}
              type="submit"
              onClick={onOk}
            >
              Ok
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
export default ConfirmPopup;
