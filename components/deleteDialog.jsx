import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import useUser from "../lib/hooks/useUser";
import deleteData from "../lib/utils/deleteData";
import { toast } from "react-toastify";
import styles from "../styles/components/EditOrder.module.scss";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";
import { Trash } from "react-feather";

export default function DeleteDialog({ key, product_id }) {
  const user = useUser();
  const router = useRouter();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    const [isError, response] = await deleteData("", "product/" + product_id, user);
    if (isError) toast.error("Delete product failed, please try again");
    else {
        handleClose();
        toast.success("Delete product success");
        router.reload(window.location.pathname);
    }
  };

  return (
    <div>
      <Button
        style={{
          border: "2px solid #909090",
          width: "2vw",
          height: "4vh",
        }}
        onClick={handleClickOpen}
      >
        <Trash />
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
          <p className={styles.editOrder_bcTextBold}>Are you sure you want to delete this product?</p>
        </DialogTitle>
        <DialogActions>
          <Button onClick={handleClose}>
            <p className={styles.editOrder_descTextCancel}>Cancel</p>
          </Button>
          <Button onClick={handleDelete}>
            <p className={styles.editOrder_descTextOk}>Delete this product</p>
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
