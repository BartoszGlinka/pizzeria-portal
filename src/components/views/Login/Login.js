import React from 'react';
import styles from './Login.module.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';



const Login = () => (
  <Paper className={styles.component}>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>User Name</TableCell>
          <TableCell>Password</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
          <TableRow>
            <TableCell component="th" scope="row">
              <TextField required id="standard-required" label="Required" defaultValue="Login" />
            </TableCell>
            <TableCell>
              <TextField id="standard-password-input" label="Password" type="password" autoComplete="current-password" />
            </TableCell>
            <TableCell>
              <Button variant="contained" color="primary">Zaloguj się</Button>
         </TableCell>
          </TableRow>
      </TableBody>
    </Table>
  </Paper>
);

export default Login;
