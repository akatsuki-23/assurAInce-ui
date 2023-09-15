import { RoundedErrorIcon, RoundedTickIcon } from "../icons";

const typeStyles = {
  error: {
    background: `max-w-lg min-w-[400px] items-center rounded-xl bg-semantic-light-red border border-semantic-red/30`,
  },
  success: {
    background: `max-w-lg min-w-[400px] items-center rounded-xl bg-semantic-light-green border border-semantic-green/30`,
  },
};

const Toast = ({ type, title, description }) => (
  <div className={typeStyles[type].background} role="alert">
    <div className="flex flex-row h-full">
      <div className="flex items-center pl-4">
        {type === "success" ? (
          <RoundedTickIcon className="w-6 h-6" />
        ) : (
          <RoundedErrorIcon className="w-6 h-6" />
        )}
      </div>
      <div className="flex flex-col items-start p-4">
        <div className="text-base text-gray-800 font-semibold">{title}</div>
        <div className="text-[15px] font-normal test-gray-800">
          {description}
        </div>
      </div>
    </div>
  </div>
);

export default Toast;
