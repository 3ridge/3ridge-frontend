import * as React from "react";
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import {Button, DialogActions, DialogContent, DialogContentText} from "@mui/material";

interface SimpleDialogProps {
  open: boolean;
  selectedValue?: string;
  onClose: (value: string) => void;
}

const QuestQuizDialog = (props: SimpleDialogProps) => {
  const {onClose, selectedValue, open} = props;

  const handleClose = () => {
    onClose('');
  };

  return (
      <>
        <Dialog onClose={handleClose} open={open}>
          <DialogTitle>Set backup account</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Let Google help apps determine location. This means sending anonymous
              location data to Google, even when no apps are running.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Disagree</Button>
            <Button onClick={handleClose} autoFocus>
              Agree
            </Button>
          </DialogActions>
        </Dialog>
      </>
  );
};

export default QuestQuizDialog;
