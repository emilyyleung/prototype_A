import React from 'react';
import { Route } from 'react-router-dom';

import RbitemList from './layouts/RbitemListView';
import RbitemDetail from './layouts/RbitemDetailView';

const BaseRouter = () => (
  <div>
    <Route exact path='/' component={RbitemList} />
    <Route exact path='/:rbitemID' component={RbitemDetail} />
  </div>
);

export default BaseRouter;
