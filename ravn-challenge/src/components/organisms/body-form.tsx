import {
  FormControl,
  Grid,
  Input,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
} from '@mui/material';
import { FormikErrors, FormikTouched } from 'formik/dist/types';
import { InitValuesTicket } from './ticket-modal';

interface BodyFormPersonProps {
  values: InitValuesTicket;
  errors: FormikErrors<InitValuesTicket>;
  touched: FormikTouched<InitValuesTicket>;
  handleChange: {
    (e: React.ChangeEvent<string>): void;
    <T = string | React.ChangeEvent<string>>(
      field: T,
    ): T extends React.ChangeEvent<string> ? void : (e: string | React.ChangeEvent<string>) => void;
  };
}
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
export const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
const estimates = [
  { id: 1, name: '1' },
  { id: 2, name: '2' },
  { id: 3, name: '3' },
  { id: 5, name: '5' },
]

export default function BodyForm({ values, errors, handleChange }: BodyFormPersonProps) {

  return (
    <Grid item xl={12} justifyContent="center">
      <Input
        required
        name="title"
        id="title"
        value={values.title}
        onChange={handleChange}
        sx={{ width: '47%', m: 1 }}
        disableUnderline={true}
        placeholder="Task title"
        error={!!errors.title}
      />
      <div style={{ width: '100%' }} />
      <FormControl sx={{ width: '47%', m: 1 }}>
        <InputLabel id="demo-multiple-name-label">
          {'estimate'}
        </InputLabel>
        <Select
          required
          name="estimate"
          label={'estimate'}
          placeholder={'estimate'}
          id="estimate"
          value={values.estimate}
          onChange={handleChange}
          input={<OutlinedInput label="estimate" />}
          MenuProps={MenuProps}
          //defaultValue={values.client_type}
          error={!!errors.estimate}
        >
          {estimates?.map((item) => (
            <MenuItem key={item.id} value={item.name}>
              {item.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <TextField
        type='date'
        required
        name="due_date"
        //label={"due_date"}
        placeholder={"due_date"}
        id="due_date"
        sx={{ width: '47%', m: 1 }}
        onChange={handleChange}
        error={!!errors.due_date}
        helperText={errors.due_date ?? ''}
        value={values.due_date}
      />
    </Grid>
  );
}
