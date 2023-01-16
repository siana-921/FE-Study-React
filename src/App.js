import "./App.css";
import React, { Component } from "react";
import Customer from "./components/Customer";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";

/*
const styles = (theme) => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto",
  },
  table: {
    minWidth: 1080,
  },
});
*/

const customers = [
  {
    id: 1,
    name: "sua",
    image: "https://placeimg.com/64/64/1",
    birthday: "920112",
    gender: "여자",
    job: "학생",
  },
  {
    id: 2,
    name: "sua2",
    image: "https://placeimg.com/64/64/2",
    birthday: "920113",
    gender: "남자",
    job: "학생",
  },
];

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Paper>
        <Table>
          <TableHead>
            <TableCell>번호</TableCell>
            <TableCell>이미지</TableCell>
            <TableCell>이름</TableCell>
            <TableCell>생년월일</TableCell>
            <TableCell>성별</TableCell>
            <TableCell>직업</TableCell>
          </TableHead>
          <TableBody>
            {customers.map((c) => {
              return (
                <Customer
                  id={c.id}
                  name={c.name}
                  image={c.image}
                  birthday={c.birthday}
                  gender={c.gender}
                  job={c.job}
                ></Customer>
              );
            })}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default App;
