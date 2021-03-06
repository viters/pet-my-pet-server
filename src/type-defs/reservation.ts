import gql from 'graphql-tag';
import { ResolverObject, ResolverFn } from '../types';
import { Reservation } from '../entities/reservation';
import { CareRequest } from '../entities/care-request';
import { HostOffer } from '../entities/host-offer';
import { IdHolder } from './interfaces/id-holder';

export const reservation = gql`
  type Reservation {
    id: ID
    careRequest: CareRequest
    hostOffer: HostOffer
  }

  input InputReservation {
    careRequestId: Int!
    hostOfferId: Int!
  }

  input ReservationSearchInput {
    id: Int!
  }
`;

export interface ReservationType extends ResolverObject {
  careRequest: ResolverFn<Reservation, {}, CareRequest>;
  hostOffer: ResolverFn<Reservation, {}, HostOffer>;
}

export interface InputReservation {
  careRequestId: number;
  hostOfferId: number;
}

export interface ReservationSearchInput extends IdHolder {
  
}