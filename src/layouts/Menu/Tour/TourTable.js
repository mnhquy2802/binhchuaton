/* eslint-disable */
import { useEffect, useState } from "react";
import TourApi from "../../../api/tour";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import SuiButton from "components/SuiButton";
import "./index.scss";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";

const data = [
  {
    id: "1",
    _username: "CBA",
    _tourName: "Admin",
    _status: "1",
    _description: "admin",
  },
  {
    id: "2",
    _username: "ABC",
    _tourName: "Admin",
    _status: "1",
    _description: "super admin",
  },
  {
    id: "3",
    _username: "BAC",
    _tourName: "Admin",
    _status: "1",
    _description: "user",
  },
];

const TourTable = () => {
  const [tourValue, setTourValue] = useState([]);
  const [open, setOpen] = useState(false);

  // const a = localStorage.getItem("role");

  // eslint-disable-next-line no-unused-vars
  // const getTour = async () => {
  //   const tours = await TourApi.ListTour();
  //   setTourValue(tours?.data?.data);
  // };

  // console.log("QUUY", tourValue);
  var tourRole = null;

  // useEffect(() => {
  //   getTour();
  // }, []);

  const button_action = () => {
    // var role = localStorage.getItem("role");
    // role = JSON.parse(role);
    // role = Object.entries(role);
    // console.log("role at tour: ---> ", role);
    // role.map(([key, value]) => {
    //   if (key === "tour") {
    //     tourRole = value;
    //     return value;
    //   }
    // });
    // try {
    //   tourRole = Object.entries(tourRole);
    //   let result = tourRole.map((item, key) => {
    //     console.log("tour result item : -----> ", item[1]);
    //     if (item[1] === "update") {
    //       return (
    //         <SuiButton variant="text" buttonColor="secondary">
    //           Update
    //         </SuiButton>
    //       );
    //     }
    //     if (item[1] === "delete") {
    //       return (
    //         <SuiButton variant="text" buttonColor="secondary">
    //           DELETE
    //         </SuiButton>
    //       );
    //     }
    //     if (item[1] === "show_tourdetail") {
    //       return (
    //         <SuiButton variant="text" buttonColor="secondary">
    //           Show Tour Detail
    //         </SuiButton>
    //       );
    //     }
    //   });
    //   return result;
    // } catch {
    //   return null;
    // }
  };

  const showListTourDetail = (item) => {
    console.log("item : -----> ", item);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="AuthorTable">
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Create</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We will send updates
            occasionally.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>

      <TableContainer component={Paper}>
        <Table>
          <TableHead className="AuthorTable-header">
            <TableRow>
              <TableCell align="center">Tour Name</TableCell>
              <TableCell align="center">Description</TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => {
              return (
                <TableRow key={row._username} onClick={showListTourDetail()}>
                  <TableCell align="center">{row._tourName}</TableCell>
                  <TableCell align="center">{row._description}</TableCell>
                  <TableCell align="center">
                    <i
                      className="fas fa-pencil-alt"
                      onClick={handleClickOpen}
                      style={{ cursor: "pointer" }}
                    />
                  </TableCell>
                  {/* {button_action()} */}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TourTable;
