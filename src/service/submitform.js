import { Amplify } from "aws-amplify";
import { generateClient } from 'aws-amplify/api';
import awsconfig from "../amplifyconfiguration.json";
import { createFormSubmission } from '../graphql/mutations'; // Adjust the path as needed

Amplify.configure(awsconfig);
const client = generateClient();

export const submitForm = async (formData) => {
  try {
    console.log("first", formData);
    const response = await client.graphql({
        query: createFormSubmission,
        variables: {
          input: formData
        }
      });
    if (response.data) {
     alert('Form submitted successfully');
    }
    else {
      alert('Error submitting form');
    }
  } catch (error) {
    console.error('Error submitting form:', error);
  }
};
