import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@hedtech/react-design-system/core/styles';
import Pagination from '@hedtech/react-design-system/core/Pagination';
import Paper from '@hedtech/react-design-system/core/Paper';
import Table from '@hedtech/react-design-system/core/Table';
import TableBody from '@hedtech/react-design-system/core/Table/TableBody';
import TableCell from '@hedtech/react-design-system/core/Table/TableCell';
import TableRow from '@hedtech/react-design-system/core/Table/TableRow';
import TableFooter from '@hedtech/react-design-system/core/Table/TableFooter';
import { widthFluid } from '@hedtech/react-design-system/core/styles/tokens';
import TableHead from '@hedtech/react-design-system/core/Table/TableHead';

const customId = 'CustomPaginationActionsTable';

let counter = 0;
function createData(name, calories, fat) {
    counter += 1;
    return { id: counter, name, calories, fat };
}

const styles = theme => ({
    root: {
        width: widthFluid,
        marginTop: theme.spacing(3),
    },
    table: {
        minWidth: 500,
    },
    tableWrapper: {
        overflowX: 'auto',
    },
});

/**
 * Table with Pagination
 */
class CustomPaginationActionsTable extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [
                createData('Cupcake', 305, 3.7),
                createData('Donut', 452, 25.0),
                createData('Eclair', 262, 16.0),
                createData('Frozen yoghurt', 159, 6.0),
                createData('Gingerbread', 356, 16.0),
                createData('Honeycomb', 408, 3.2),
                createData('Ice cream sandwich', 237, 9.0),
                createData('Jelly Bean', 375, 0.0),
                createData('KitKat', 518, 26.0),
                createData('Lollipop', 392, 0.2),
                createData('Marshmallow', 318, 0),
                createData('Nougat', 360, 19.0),
                createData('Oreo', 437, 18.0),
            ].sort((a, b) => (a.calories < b.calories ? -1 : 1)),
            page: 0,
            rowsPerPage: 10,
        };
    }

  handleChangePage = (event, page) => {
      this.setState({ page });
  };

  handleChangeRowsPerPage = event => {
      this.setState({ rowsPerPage: event.target.value });
  };

  render() {
      const { classes } = this.props;
      const { data, rowsPerPage, page } = this.state;
      const emptyRows = rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);

      return (
          <div id={`${customId}_Container`}>
              <Paper className={classes.root}>
                  <div className={classes.tableWrapper}>
                      <Table className={classes.table}>
                          <TableHead>
                              <TableRow>
                                  <TableCell>Column1</TableCell>
                                  <TableCell align="right">Column2</TableCell>
                                  <TableCell align="right">Column3</TableCell>
                              </TableRow>
                          </TableHead>
                          <TableBody>
                              {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(n => {
                                  return (
                                      <TableRow key={n.id}>
                                          <TableCell component="th" scope="row">
                                              {n.name}
                                          </TableCell>
                                          <TableCell align="right">{n.calories}</TableCell>
                                          <TableCell align="right">{n.fat}</TableCell>
                                      </TableRow>
                                  );
                              })}
                              {emptyRows > 0 && (
                                  <TableRow style={{ height: 48 * emptyRows }}>
                                      <TableCell colSpan={6} />
                                  </TableRow>
                              )}
                          </TableBody>
                          <TableFooter>
                              <TableRow>
                                  <Pagination
                                      component="td"
                                      count={data.length}
                                      rowsPerPage={rowsPerPage}
                                      page={page}
                                      onChangePage={this.handleChangePage}
                                      onChangeRowsPerPage={this.handleChangeRowsPerPage}
                                  />
                              </TableRow>
                          </TableFooter>
                      </Table>
                  </div>
              </Paper>
          </div>
      );
  }
}

CustomPaginationActionsTable.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomPaginationActionsTable);