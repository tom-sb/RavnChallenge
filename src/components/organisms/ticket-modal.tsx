import { Button, Grid, Stack, Typography } from "@mui/material";
import { Form, Formik } from "formik";
import { useState } from "react";
import { array, number, object, string } from "yup";
import BodyForm from "./body-form";
import {
  Task,
  UpdateTaskDocument,
  UpdateTaskMutation,
  UpdateTaskMutationVariables,
  GetTasksDocument,
  CreateTaskDocument,
	CreateTaskMutationVariables,
	CreateTaskMutation,
	PointEstimate,
  Status,
  TaskTag,
 } from "../../gql/graphql";
import { useMutation } from "@apollo/client";
export interface InitValuesTicket {
  title: string;
  estimate: number;
  assignee: string;
  labels: TaskTag[];
  due_date: string;
}

interface TicketModalProps {
  cancelClick: () => void;
  toEdit?: Task;
}

export default function TicketModal( { cancelClick, toEdit }: TicketModalProps ) {
  const [initialValues] = useState<InitValuesTicket>(
    toEdit
      ? {
          title: toEdit.name,
          estimate: toEdit.position,
          assignee: toEdit.assignee?.id || '',
          labels: toEdit.tags,
          due_date: toEdit.dueDate || '',
        }
      : {
          title: '',
          estimate: 0,
          assignee: '',
          labels: [],
          due_date: '',
        },
  );

  const [updateTicket] = useMutation<UpdateTaskMutation, UpdateTaskMutationVariables>(UpdateTaskDocument, {
    refetchQueries: [GetTasksDocument]
  });
  const [createTask] = useMutation<CreateTaskMutation, CreateTaskMutationVariables>(CreateTaskDocument, {
		variables: {
			input: {
				name: initialValues.title,
				pointEstimate: "TWO" as PointEstimate,
				dueDate: initialValues.due_date,
				tags: [],
				status: "TODO" as any,
				assigneeId: initialValues.assignee,
			}
		},
		refetchQueries: [GetTasksDocument]
	});
  const validationSchema = object({
    title: string().required('title required'),
    estimate: number(),
    assignee: string(),
    labels: array(),
    due_date: string(),
  });

  const handleSubmit = async (values: InitValuesTicket) => {
    const input = {
      title: values.title,
      estimate: values.estimate,
      assignee: values.assignee,
      labels: values.labels,
      due_date: values.due_date,
    };
    try {
      if (toEdit) {
        updateTicket({
          variables: {
            input: {
              id: toEdit.id,
              name: input.title,
              pointEstimate: "FOUR" as PointEstimate,
              dueDate: input.due_date,
              tags: input.labels,
              status: toEdit.status,
              assigneeId: input.assignee,
            },
          },
        });
        cancelClick();
      } else {
        const responseClient = await createTask({ variables: {
          input: {
            name: input.title,
            pointEstimate: "TWO" as PointEstimate,
            dueDate: input.due_date,
            tags: input.labels,
            status: Status.Backlog,
            assigneeId: input.assignee,
          }
        } });
        if (responseClient) {
          cancelClick();
        }
      }
    } catch (error) {
      console.error(error);
    }
  };
  
  return (
    <Formik
      enableReinitialize={true}
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ values, errors, touched, handleChange }) => (
        <Form>
          <Grid container xl={12} justifyContent="flex-end" sx={{ pt:1 }}>
            <BodyForm
              values={values}
              errors={errors}
              touched={touched}
              handleChange={handleChange}
            />
          </Grid>
          <Grid container xl={12} justifyContent="flex-end" sx={{ py:2 }}>
            <Stack direction={'row'} gap={1}>
              <Button
                type="button"
                size="large"
                variant="contained"
                //disabled={!(isValid && dirty)}
                onClick={cancelClick}
              >
                <Typography variant="button" >
                  {'cancel' }
                </Typography>
              </Button>
              <Button
                type="submit"
                size="large"
                variant="contained"
                //disabled={!(isValid && dirty)}
              >
                <Typography variant="button" >
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