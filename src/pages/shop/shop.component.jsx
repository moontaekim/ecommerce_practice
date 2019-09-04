import React from "react";
import { Route } from "react-router-dom";

import CollectionsOverview from "../../component/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component";

//match is available because shoppage is rendered in a <Route> on App.js.  (match, history, location)
const ShopPage = ({ match }) => (
  <div className="shop-page">
    <Route exact path={`${match.path}`} component={CollectionsOverview} />
    <Route path={`${match.path}/:categoryId`} component={CollectionPage} />
  </div>
);

export default ShopPage;
