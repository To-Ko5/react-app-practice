import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup
} from '@mui/material'

const LoginRadioButton = () => {
  return (
    <>
      <FormControl>
        <FormLabel id="gender-group-label">Gender</FormLabel>
        <RadioGroup
          row
          aria-labelledby="gender-group-label"
          name="gender-buttons-group"
        >
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="male" control={<Radio />} label="Male" />
          <FormControlLabel value="other" control={<Radio />} label="Other" />
        </RadioGroup>
      </FormControl>
    </>
  )
}

export default LoginRadioButton
