import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing(3),
  },
}));

export default function CheckboxesGroup() {
  const classes = useStyles();
  const [politician, setPolitician] = useState({
    abe: true,
    suga: false,
    mori: false,
  })

  const handleChange = (e) => {
    setPolitician({ ...politician, [e.target.name]: e.target.checked })
  }

  const { abe, suga, mori } = politician;

  return (
    <div className={classes.root}>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Select Politician</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox checked={abe} onChange={handleChange} name="abe" />}
            label="Shinzo Abe"
          />
          <FormControlLabel
            control={<Checkbox checked={suga} onChange={handleChange} name="suga" />}
            label="Yoshihide Suga"
          />
          <FormControlLabel
            control={<Checkbox checked={mori} onChange={handleChange} name="mori" />}
            label="Yoshiro Mori"
          />
        </FormGroup>
      </FormControl>
    </div>
  )

}
