import { useMutation } from '@apollo/client';
import mutation from 'src/graphql/mutation';

function useMutationPublishNotification() {
  return useMutation(mutation.publishNotification);
}

export default useMutationPublishNotification;
