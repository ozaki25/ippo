import { graphql } from 'react-apollo';
import { compose } from 'recompose';
import query from 'src/graphql/query';
import InternalEvents from 'src/components/pages/InternalEvents/';
import { withAuthorization } from 'src/hoc/Sessions';

export default compose(withAuthorization)(graphql(query.internalEvents)(InternalEvents));
