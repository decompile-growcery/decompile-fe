import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import useUser from "../lib/hooks/useUser";
import putData from "../lib/utils/putData";
import styles from "../styles/components/EditOrder.module.scss";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";

export default function EditOrderDialog({ key, order_id }) {
  const user = useUser();
  const router = useRouter();
  const [open, setOpen] = React.useState(false);
  const [status, setStatus] = React.useState("");

  const handleChange = (e) => {
    setStatus(e.target.value);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    const data = {
      order_id: order_id,
      status_id: Number(status),
    };

    const [isError, response] = await putData(
      JSON.stringify(data),
      "order-status",
      user,
      true
    );

    if (isError) {
      toast.error("Update status failed, please try again");
    } else {
      handleClose();
      toast.success("Update order success");
      router.reload(window.location.pathname);
    }
  };

  return (
    <div>
      <Button
        style={{
          border: "2px solid #909090",
          height: "3vh",
        }}
        onClick={handleClickOpen}
      >
        <p className={styles.editOrder_bcText}>Edit Order Status</p>{" "}
        <ExpandMoreIcon />
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
          <p className={styles.editOrder_bcTextBold}>Change order status</p>
        </DialogTitle>

        <DialogContent>
          <p className={styles.editOrder_descText}>
            Update order status for all items with the
            <span style={{ fontWeight: 800 }}> same order id. </span>
          </p>
          <h3>Order Options</h3>
          <select value={status} onChange={handleChange}>
            <option value={0}>Choose one</option>
            <option value={1}>Waiting for payment</option>
            <option value={2}>Confirmed</option>
            <option value={3}>Shipped</option>
            <option value={4}>Ready for pick-up</option>
            <option value={5}>Completed</option>
          </select>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>
            <p className={styles.editOrder_descTextCancel}>Cancel</p>
          </Button>
          <Button onClick={handleUpdate}>
            <p className={styles.editOrder_descTextOk}>Ok</p>
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
