import React from 'react';


const mapStateToProps = (state) => ({
  businesses: state.businesses
});

const mapDispatchToProps = (dispatch) => ({
  requestBusinesses: dispatch(requestBusinesses())
});

export default connect({ mapStateToProps, mapDispatchToProps })(BusinessIndex);