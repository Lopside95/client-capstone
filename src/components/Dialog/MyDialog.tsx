import { Button, Dialog, Spinner } from "evergreen-ui";
import PrimaryButton from "../ui/PrimaryButton/PrimaryButton";
import { tertiary } from "../../pages/Home/Home";
import "./MyDialog.scss";

interface MyDialogProps {
  handleDelete: () => void;
  dialogIsShown: boolean;
  setDialogIsShown: (isShown: boolean) => void;
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
  item: string;
}

const MyDialog = ({
  handleDelete,
  dialogIsShown,
  setDialogIsShown,
  isLoading,
  setIsLoading,
  item,
}: MyDialogProps) => {
  return (
    <Dialog
      hasClose={false}
      shouldAutoFocus={false}
      overlayProps={{
        style: { backgroundColor: "rgba(0, 0, 0, 0.5)" },
      }}
      containerProps={{
        className: "dialog",
        style: { padding: 0 },
      }}
      contentContainerProps={{
        className: "dialog__content ",
        style: { padding: 0 },
      }}
      title="Are you sure?"
      isShown={dialogIsShown}
      hasFooter={false}
      onCloseComplete={() => setDialogIsShown(false)}
    >
      <div className="dialog__content">
        {isLoading ? (
          <Spinner size={30} />
        ) : (
          <>
            <Button onClick={() => setDialogIsShown(false)} borderRadius={10}>
              Cancel
            </Button>
            <PrimaryButton
              onClick={(e) => {
                e.preventDefault();
                setIsLoading(true);
                handleDelete();
              }}
              height={"2rem"}
              backColor={tertiary}
              buttonWidth={"9.375rem"}
              className={`primary__button primary__button-destructive ${
                isLoading && "hidden-button"
              }`}
            >
              {`Delete ${item}`}
            </PrimaryButton>
          </>
        )}
      </div>
    </Dialog>
  );
};

export default MyDialog;
