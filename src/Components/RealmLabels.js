import React from 'react';
import './style.scss';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
});

class RealmLabels extends React.Component {
constructor(props) {
  super(props);
  this.state = {value: props.value};

}

  handleChange = event => {
    this.setState({ value: event.target.value });
  };


  render() {

    const { classes } = this.props;

    //return <div> </div>;

    return (
    <Select
      value={this.state.value}
      onChange={this.handleChange}
      displayEmpty
      name="age"
      className={classes.selectEmpty}
    >
      <MenuItem value="">
        <em>None</em>
      </MenuItem>
      <MenuItem value='FirstName'>FirstName</MenuItem>
      <MenuItem value='LastName'>LastName</MenuItem>
      <MenuItem value='Address1'>Address1</MenuItem>
      <MenuItem value='City'>City</MenuItem>
      <MenuItem value='State'>State</MenuItem>
      <MenuItem value='Postal Code'>ZipCode</MenuItem>
    </Select>
    );
  }
}

export default withStyles(styles)(RealmLabels);

