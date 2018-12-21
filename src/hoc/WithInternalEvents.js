import { graphql } from 'react-apollo';
import { compose } from 'recompose';
import query from 'src/graphql/query';
import InternalEvents from 'src/components/pages/InternalEvents/';
import { WithAuthorization } from 'src/hoc/Sessions';

export default compose(WithAuthorization())(graphql(query.internalEvents)(InternalEvents));
