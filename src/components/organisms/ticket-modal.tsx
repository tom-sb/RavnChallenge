import { Button, Grid, Stack, Typography } from "@mui/material";
import { Form, Formik } from "formik";
import { useState } from "react";
import { object, string } from "yup";
import BodyForm from "./body-form";

export interface InitValuesTicket {
  title: string;
  estimate: string;
  assignee: string;
  labels: string;
  due_date: string;
}

interface TicketModalProps {
  cancelClick: () => void;
  toEdit?: boolean;
}

export default function TicketModal( { cancelClick, toEdit }: TicketModalProps ) {
  const [initialValues] = useState<InitValuesTicket>(
    toEdit
      ? {
        title: '',
        estimate: '',
        assignee: '',
        labels: '',
        due_date: '',
        }
      : {
          title: '',
          estimate: '',
          assignee: '',
          labels: '',
          due_date: '',
        },
  );

  const validationSchema = object({
    title: string().required('title required'),
    estimate: string().required('title required'),
    assignee: string().required('name_required'),
    labels: string().required('address_required'),
    due_date: string(),
  });

  const handleSubmit = async (values: InitValuesTicket) => {
    const input = {//TODO crear el tipo y quitar el any
      title: values.title,
      estimate: values.estimate,
      assignee: values.assignee,
      labels: values.labels,
      due_date: values.due_date,
    };
    console.log(input);
    /* try {
      if (toEdit) {
        //TODO update ticket
        cancelClick();
      } else {
        const responseClient = await createTicket(input);
        if (responseClient) {
          cancelClick();
        }
      }
    } catch (error) {
      console.error(error);
    } */
  };
  
  return (
    <Formik
      enableReinitialize={true}
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ values, errors, touched, handleChange, isValid, dirty }) => (
        <Form>
          <Grid container xl={12} justifyContent="center" sx={{ ml: 2 }}>
            <BodyForm
              values={values}
              errors={errors}
              touched={touched}
              handleChange={handleChange}
            />
          </Grid>
          <Grid container xl={12} justifyContent={'end'} sx={{ mb: 2, mt: 2 }}>
            <Stack direction={'row'} gap={2}>
              <Button
                type="button"
                size="large"
                sx={{ mr: 1 }}
                variant="contained"
                disabled={!(isValid && dirty)}
                onClick={cancelClick}
              >
                <Typography variant="button" sx={{ mr: 1 }}>
                  {'cancel' }
                </Typography>
              </Button>
              <Button
                type="submit"
                size="large"
                sx={{ mr: 1 }}
                variant="contained"
                disabled={!(isValid && dirty)}
              >
                <Typography variant="button" sx={{ mr: 1 }}>
                  {toEdit ? 'Update' : 'Create' }
                </Typography>
              </Button>
            </Stack>
          </Grid>
        </Form>
      )}
    </Formik>
  );
}