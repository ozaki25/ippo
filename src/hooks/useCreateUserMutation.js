import { useMutation } from '@apollo/client';
import mutation from 'src/graphql/mutation';

function useCreateUserMutation() {
  const [createUser, { loading, error }] = useMutation(mutation.createUser);
  return { createUser, loading, error };
}

export default useCreateUserMutation;
