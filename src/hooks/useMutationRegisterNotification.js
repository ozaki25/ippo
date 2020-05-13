import { useMutation } from '@apollo/client';
import mutation from 'src/graphql/mutation';

function useMutationRegisterNotification() {
  return useMutation(mutation.registerNotification);
}

export default useMutationRegisterNotification;
