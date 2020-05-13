import { useMutation } from '@apollo/client';
import mutation from 'src/graphql/mutation';

function useMutationExcuteUpdateExternalEvents() {
  return useMutation(mutation.excuteUpdateExternalEvents);
}

export default useMutationExcuteUpdateExternalEvents;
