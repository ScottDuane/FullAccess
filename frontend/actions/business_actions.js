export const BusinessConstant = {
  RECEIVE_BUSINESSES: "RECEIVE_BUSINESSES",
  REQUEST_BUSINESSES: "REQUEST_BUSINESSES"
}

export const requestBusinesses = () => {
  return { type: BusinessConstants.REQUEST_BUSINESSES };
}

export const receiveBusinesses = (businesses) => {
  return { type: BusinessConstants.RECEIVE_BUSINESSES, businesses: businesses };
}