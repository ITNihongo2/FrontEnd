import React from "react";
import { Formik, Form, Field } from "formik";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Button,
} from "@chakra-ui/react";

function EditForm({ onSubmit, itemActive }) {
  
  function requiredName(value) {
    let error;
    if (!value) {
      error = "Name is required";
    }
    return error;
  }

  function requiredAddress(value) {
    let error;
    if (!value) {
      error = "Address is required";
    }
    return error;
  }
  
  return (
    <Formik
      initialValues={itemActive}
      onSubmit={(values) => {
        onSubmit(values);
      }}
    >
      {(props) => (
        <Form>
          <Field name="name" validate={requiredName}>
            {({ field, form }) => (
              <FormControl isInvalid={form.errors.name && form.touched.name}>
                <FormLabel>Name</FormLabel>
                <Input {...field} placeholder="name" />
                <FormErrorMessage>{form.errors.name}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Field name="price">
            {({ field }) => (
              <FormControl
              >
                <FormLabel>Price</FormLabel>
                <Input {...field} placeholder="Price" />
              </FormControl>
            )}
          </Field>
          <Field name="description">
            {({ field }) => (
              <FormControl
              >
                <FormLabel>Description</FormLabel>
                <Input {...field} placeholder="Description" />
              </FormControl>
            )}
          </Field>
          <Field name="images">
            {({ field }) => (
              <FormControl
              >
                <FormLabel>Images</FormLabel>
                <Input {...field} placeholder="Images" />
              </FormControl>
            )}
          </Field>
          <Button mt={4} colorScheme="teal" type="submit">
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
}

export default EditForm;