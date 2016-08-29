import React from 'react';
import { requestBusinesses } from '../actions/business_actions';

const BusinessIndex extends React.Component {
  componentDidMount () {
    requestBusinesses();
  };

  render () {
    <div>
      <BusinessMap />
      <SearchFilters />
      this.state.map(business, () => {
        return <BusinessIndexItem business={business} />
      });
    </div>
  };
}
