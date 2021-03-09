import loadingIcon from "src/assets/loading.gif";
import throttle from "lodash/throttle";

const Button = (props) => {
  const { text, loading = false, onClick, ...passProps } = props;

  const _handleClick = throttle(() => {
    if (loading) return;
    !!onClick && onClick();
  }, 500);

  return (
    <button
      className={`${
        loading ? "bg-gray-200" : "bg-primary"
      } py-2 px-4 max-w-md flex flex-row justify-center items-center text-white rounded-md shadow-sm focus:outline-none focus:ring-4`}
      {...passProps}
      onClick={_handleClick}
    >
      {!!loading ? (
        <img src={loadingIcon} className="w-6 h-6" alt={"loading"} />
      ) : (
        text
      )}
    </button>
  );
};

export default Button;
