import Button from "@components/Button";
import Loading from "@components/Loading";
import Typography from "@components/Typography";
import { Dispatch, SetStateAction } from "react";

type TPopUp = {
  title: string;
  subtitle?: string;
  isPopup: boolean;
  setIsPopup: Dispatch<SetStateAction<boolean>>;
  actionText: string;
  actionLink?: string;
  handleAction: (() => Promise<void>) | (() => void);
  secondaryActiontext?: string;
  handleSecondaryAction?: (() => Promise<void>) | (() => void);
  secondaryActionLink?: string;
  errorMessage?: string | null;
  isLoading?: boolean;
};

const Popup = ({
  title,
  subtitle,
  setIsPopup,
  isPopup,
  actionText,
  actionLink,
  handleAction,
  handleSecondaryAction,
  secondaryActionLink,
  secondaryActiontext,
  errorMessage,
  isLoading,
}: TPopUp) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full h-full z-20 backdrop-brightness-75 items-center justify-center ${
        isPopup ? "flex " : "hidden"
      }`}
    >
      {/* close on outside click */}
      <div
        className="block w-full h-full"
        onClick={() => (!isLoading ? setIsPopup(false) : undefined)}
      />
      <div
        className={`absolute ${
          isLoading ? "w-fit" : "w-10/12 max-w-sm"
        } bg-primary-100  rounded-2xl transition-all p-6`}
      >
        <div className="flex flex-col text-center gap-2 ">
          {isLoading ? (
            <Loading loadingText="Please wait.." />
          ) : (
            <>
              <Typography size="body1/semi-bold">{title}</Typography>
              {subtitle ? (
                <Typography size="body2/normal" className="break-words">
                  {subtitle}
                </Typography>
              ) : null}
            </>
          )}
        </div>

        {!isLoading ? (
          <div className="flex gap-4 justify-center items-center mt-8 sm:mt-2">
            {actionText ? (
              actionLink ? (
                <Button link={actionLink} title={actionText} variant="primary">
                  {actionText}
                </Button>
              ) : (
                <Button
                  type="button"
                  title={actionText}
                  variant="primary"
                  onClick={handleAction}
                >
                  {actionText}
                </Button>
              )
            ) : null}
            {secondaryActiontext ? (
              secondaryActionLink ? (
                <Button
                  link={secondaryActionLink}
                  title={secondaryActiontext}
                  variant="danger"
                >
                  {secondaryActiontext}
                </Button>
              ) : (
                <Button
                  type="button"
                  title={secondaryActiontext}
                  variant="danger"
                  onClick={handleSecondaryAction}
                >
                  {secondaryActiontext}
                </Button>
              )
            ) : null}
          </div>
        ) : null}
        {errorMessage ? (
          <Typography variant="error" className="text-center mt-2">
            {errorMessage}
          </Typography>
        ) : null}
      </div>
    </div>
  );
};

export default Popup;
