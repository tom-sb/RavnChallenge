import {
  Grid,
  Input,
  Stack,
  TextField,
} from '@mui/material';
import { FormikErrors, FormikTouched } from 'formik/dist/types';
import { InitValuesTicket } from './ticket-modal';
import SelectUser from './select-users';
import SelectEstimate from './select-estimate';
import SelectLabels from './select-labels';

interface BodyFormProps {
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

export default function BodyForm({ values, errors, handleChange }: BodyFormProps) {
  return (
    <Grid item xl={12} justifyContent="center">
      <Input
        required
        name="title"
        id="title"
        value={values.title}
        onChange={handleChange}
        sx={{ width: '30%', backgroundColor: 'whitesmoke' }}
        disableUnderline={true}
        placeholder="Task title"
        error={!!errors.title}
      />
      <div style={{ width: '100%' }} />
      <Stack
        direction={'row'}
        spacing={1}
      > 
        <SelectEstimate
          id="estimate"
          name="estimate"
          value={values.estimate.toString()}
          onChange={handleChange}
        />
        <SelectUser
          id="assignee"
          name="assignee"
          value={values.assignee}
          onChange={handleChange}
        />
        <SelectLabels
          id="labels"
          name="labels"
          value={values.labels}
          onChange={handleChange}
        />
        <TextField
          type='date'
          name="due_date"
          placeholder={"due_date"}
          id="due_date"
          onChange={handleChange}
          helperText={errors.due_date ?? ''}
          value={values.due_date}
          variant='outlined'
        />
      </Stack>
    </Grid>
  );
}
