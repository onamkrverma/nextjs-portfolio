import Typography from "@components/Typography";

const Loading = ({ loadingText }: { loadingText?: string }) => {
  return (
    <div className="w-full h-full flex justify-center">
      <div className="flex justify-center items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="w-6 h-6 dark:text-primary-100"
        >
          <path
            fill="none"
            stroke="currentColor"
            strokeDasharray="15"
            strokeDashoffset="15"
            strokeLinecap="round"
            strokeWidth="2"
            d="M12 3C16.9706 3 21 7.02944 21 12"
          >
            <animate
              fill="freeze"
              attributeName="stroke-dashoffset"
              dur="0.3s"
              values="15;0"
            />
            <animateTransform
              attributeName="transform"
              dur="1.5s"
              repeatCount="indefinite"
              type="rotate"
              values="0 12 12;360 12 12"
            />
          </path>
        </svg>
        {loadingText ? (
          <Typography size="body1/semi-bold" className="capitalize">
            {loadingText}...
          </Typography>
        ) : null}
      </div>
    </div>
  );
};

export default Loading;
