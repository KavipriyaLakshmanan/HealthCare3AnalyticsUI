// import { Component } from "react";
// import {
//   Button,
//   Dialog,
//   DialogActions,
//   DialogContent,
//   DialogContentText,
//   DialogTitle,
// } from "@mui/material";
// import { ConfirmationDialogProps } from "../interface/Interface";

// export default class ConfirmationDialog extends Component<ConfirmationDialogProps> {
//   state = {
//     isConfirmClicked: false,
//   };

//   handleCancel = () => {
//     // Call the onCancel prop only if the confirmation button was not clicked
//     if (!this.state.isConfirmClicked && this.props.onCancel) {
//       this.props.onCancel();
//     }
//     this.setState({ isConfirmClicked: false });
//   };

//   handleConfirm = () => {
//     // Set the state to indicate that the confirmation button was clicked
//     this.setState({ isConfirmClicked: true });

//     // Call the onConfirm prop
//     if (this.props.onConfirm) {
//       this.props.onConfirm();
//     }
//   };

//   render() {
//     const { open } = this.props;

//     return (
//       <>
//         {typeof open === "boolean" && (
//           <Dialog open={open} onClose={this.handleCancel}>
//             <DialogTitle>Confirmation</DialogTitle>
//             <DialogContent>
//               <DialogContentText>
//                 Are you sure you want to buy this product?
//               </DialogContentText>
//             </DialogContent>
//             <DialogActions>
//               <Button onClick={this.handleCancel} color="primary">
//                 Cancel
//               </Button>
//               <Button onClick={this.handleConfirm} color="primary" autoFocus>
//                 Confirm
//               </Button>
//             </DialogActions>
//           </Dialog>
//         )}
//       </>
//     );
//   }
// }
