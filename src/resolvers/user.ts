import { UserType } from "../type-defs/user";

export const User: UserType = {
  pets: (user) => user.pets,
  hostOffers: (user) => user.hostOffers,
  careRequests: (user) => user.careRequests,
  reviews: (user) => user.reviews
};