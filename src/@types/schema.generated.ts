import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Address = {
  __typename?: 'Address';
  cityName?: Maybe<Scalars['String']>;
  countryCode?: Maybe<Scalars['String']>;
  lines?: Maybe<Array<Maybe<Scalars['String']>>>;
  postalCode?: Maybe<Scalars['String']>;
};

export type AddressInput = {
  cityName?: InputMaybe<Scalars['String']>;
  countryCode?: InputMaybe<Scalars['String']>;
  lines?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  postalCode?: InputMaybe<Scalars['String']>;
};

export type Aircraft = {
  __typename?: 'Aircraft';
  code?: Maybe<Scalars['String']>;
};

export type AircraftInput = {
  code?: InputMaybe<Scalars['String']>;
};

export type AllotmentDetails = {
  __typename?: 'AllotmentDetails';
  tourName?: Maybe<Scalars['String']>;
  tourReference?: Maybe<Scalars['String']>;
};

export type Arrival = {
  __typename?: 'Arrival';
  at?: Maybe<Scalars['String']>;
  iataCode?: Maybe<Scalars['String']>;
  terminal?: Maybe<Scalars['String']>;
};

export type ArrivalInput = {
  at?: InputMaybe<Scalars['String']>;
  iataCode?: InputMaybe<Scalars['String']>;
  terminal?: InputMaybe<Scalars['String']>;
};

export type AssociatedRecords = {
  __typename?: 'AssociatedRecords';
  creationDateTime?: Maybe<Scalars['String']>;
  flightOfferId?: Maybe<Scalars['String']>;
  originSystemCode?: Maybe<Scalars['String']>;
  reference?: Maybe<Scalars['String']>;
};

export type Co2Emissions = {
  __typename?: 'Co2Emissions';
  cabin?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['String']>;
  weightUnit?: Maybe<Scalars['String']>;
};

export type Contact = {
  __typename?: 'Contact';
  phones?: Maybe<Array<Maybe<Phones>>>;
};

export type ContactInput = {
  emailAddress?: InputMaybe<Scalars['String']>;
  phones?: InputMaybe<Array<InputMaybe<PhonesInput>>>;
};

export type Contacts = {
  __typename?: 'Contacts';
  address?: Maybe<Address>;
  companyName?: Maybe<Scalars['String']>;
  emailAddress?: Maybe<Scalars['String']>;
  phones?: Maybe<Array<Maybe<Phones>>>;
  purpose?: Maybe<Scalars['String']>;
};

export type ContactsInput = {
  address?: InputMaybe<AddressInput>;
  addresseeName?: InputMaybe<NameInput>;
  companyName?: InputMaybe<Scalars['String']>;
  emailAddress?: InputMaybe<Scalars['String']>;
  phones?: InputMaybe<Array<InputMaybe<PhonesInput>>>;
  purpose?: InputMaybe<Scalars['String']>;
};

export type CreateFlightOrderRequest = {
  data?: InputMaybe<DataInput>;
};

export type CreateFlightOrderResponse = {
  __typename?: 'CreateFlightOrderResponse';
  msg?: Maybe<Scalars['String']>;
  response?: Maybe<CreateFlightOrderResults>;
  status?: Maybe<Scalars['String']>;
};

export type CreateFlightOrderResults = {
  __typename?: 'CreateFlightOrderResults';
  data?: Maybe<Data>;
  dictionaries?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['String']>;
};

export type Data = {
  __typename?: 'Data';
  associatedRecords?: Maybe<Array<Maybe<AssociatedRecords>>>;
  contacts?: Maybe<Array<Maybe<Contacts>>>;
  flightOffers?: Maybe<Array<Maybe<FlightOffers>>>;
  id?: Maybe<Scalars['String']>;
  queuingOfficeId?: Maybe<Scalars['String']>;
  ticketingAggreement?: Maybe<TicketingAggreement>;
  travelers?: Maybe<Array<Maybe<Travelers>>>;
  type?: Maybe<Scalars['String']>;
};

export type DataInput = {
  contacts?: InputMaybe<Array<InputMaybe<ContactsInput>>>;
  flightOffers?: InputMaybe<Array<InputMaybe<FlightOffersInput>>>;
  formOfPayments?: InputMaybe<Array<InputMaybe<FormOfPaymentsInput>>>;
  remarks?: InputMaybe<RemarksInput>;
  ticketingAgreement?: InputMaybe<TicketingAgreementInput>;
  tokenId?: InputMaybe<Scalars['String']>;
  travelers?: InputMaybe<Array<InputMaybe<TravelersInput>>>;
  type?: InputMaybe<Scalars['String']>;
};

export type Documents = {
  __typename?: 'Documents';
  documentType?: Maybe<Scalars['String']>;
  expiryDate?: Maybe<Scalars['String']>;
  holder?: Maybe<Scalars['Boolean']>;
  issuanceCountry?: Maybe<Scalars['String']>;
  nationality?: Maybe<Scalars['String']>;
  number?: Maybe<Scalars['String']>;
};

export type DocumentsInput = {
  birthPlace?: InputMaybe<Scalars['String']>;
  documentType?: InputMaybe<Scalars['String']>;
  expiryDate?: InputMaybe<Scalars['String']>;
  holder?: InputMaybe<Scalars['Boolean']>;
  issuanceCountry?: InputMaybe<Scalars['String']>;
  issuanceDate?: InputMaybe<Scalars['String']>;
  issuanceLocation?: InputMaybe<Scalars['String']>;
  nationality?: InputMaybe<Scalars['String']>;
  number?: InputMaybe<Scalars['String']>;
  validityCountry?: InputMaybe<Scalars['String']>;
};

export type FareDetailsBySegment = {
  __typename?: 'FareDetailsBySegment';
  allotmentDetails?: Maybe<AllotmentDetails>;
  brandedFare?: Maybe<Scalars['String']>;
  cabin?: Maybe<Scalars['String']>;
  class?: Maybe<Scalars['String']>;
  fareBasis?: Maybe<Scalars['String']>;
  includedCheckedBags?: Maybe<IncludedCheckedBags>;
  isAllotment?: Maybe<Scalars['Boolean']>;
  segmentId?: Maybe<Scalars['String']>;
  sliceDiceIndicator?: Maybe<Scalars['String']>;
};

export type FareDetailsBySegmentInput = {
  brandedFare?: InputMaybe<Scalars['String']>;
  cabin?: InputMaybe<Scalars['String']>;
  class?: InputMaybe<Scalars['String']>;
  fareBasis?: InputMaybe<Scalars['String']>;
  includedCheckedBags?: InputMaybe<IncludedCheckedBagsInput>;
  segmentId?: InputMaybe<Scalars['String']>;
};

export type FareRules = {
  rules?: InputMaybe<Array<InputMaybe<Rules>>>;
};

export type Fees = {
  __typename?: 'Fees';
  amount?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type FeesInput = {
  amount?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
};

export type FlightOffers = {
  __typename?: 'FlightOffers';
  id?: Maybe<Scalars['String']>;
  itineraries?: Maybe<Array<Maybe<Itineraries>>>;
  price?: Maybe<Price>;
  pricingOptions?: Maybe<PricingOptions>;
  source?: Maybe<Scalars['String']>;
  travelerPricings?: Maybe<Array<Maybe<TravelerPricings>>>;
  type?: Maybe<Scalars['String']>;
  validatingAirlineCodes?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type FlightOffersInput = {
  fareRules?: InputMaybe<FareRules>;
  id?: InputMaybe<Scalars['String']>;
  instantTicketingRequired?: InputMaybe<Scalars['Boolean']>;
  itineraries?: InputMaybe<Array<InputMaybe<ItinerariesInput>>>;
  lastTicketingDate?: InputMaybe<Scalars['String']>;
  nonHomogeneous?: InputMaybe<Scalars['Boolean']>;
  numberOfBookableSeats?: InputMaybe<Scalars['Int']>;
  oneWay?: InputMaybe<Scalars['Boolean']>;
  paymentCardRequired?: InputMaybe<Scalars['Boolean']>;
  price?: InputMaybe<PriceInput>;
  pricingOptions?: InputMaybe<PricingOptionsInput>;
  source?: InputMaybe<Scalars['String']>;
  travelerPricings?: InputMaybe<Array<InputMaybe<TravelerPricingsInput>>>;
  type?: InputMaybe<Scalars['String']>;
  validatingAirlineCodes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type FormOfPaymentsInput = {
  other?: InputMaybe<OtherInput>;
};

export type GeneralInput = {
  subType?: InputMaybe<Scalars['String']>;
  text?: InputMaybe<Scalars['String']>;
};

export type IncludedCheckedBags = {
  __typename?: 'IncludedCheckedBags';
  quantity?: Maybe<Scalars['Int']>;
};

export type IncludedCheckedBagsInput = {
  quantity?: InputMaybe<Scalars['Int']>;
};

export type Itineraries = {
  __typename?: 'Itineraries';
  duration?: Maybe<Scalars['String']>;
  segments?: Maybe<Array<Maybe<Segments>>>;
};

export type ItinerariesInput = {
  duration?: InputMaybe<Scalars['String']>;
  segments?: InputMaybe<Array<InputMaybe<SegmentsInput>>>;
};

export type Name = {
  __typename?: 'Name';
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
};

export type NameInput = {
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
};

export type Operating = {
  __typename?: 'Operating';
  carrierCode?: Maybe<Scalars['String']>;
};

export type OperatingInput = {
  carrierCode?: InputMaybe<Scalars['String']>;
};

export type OtherInput = {
  flightOfferIds?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  method?: InputMaybe<Scalars['String']>;
};

export type Parameters = {
  clientRef?: InputMaybe<Scalars['String']>;
};

export type Phones = {
  __typename?: 'Phones';
  countryCallingCode?: Maybe<Scalars['String']>;
  deviceType?: Maybe<Scalars['String']>;
  number?: Maybe<Scalars['String']>;
};

export type PhonesInput = {
  countryCallingCode?: InputMaybe<Scalars['String']>;
  deviceType?: InputMaybe<Scalars['String']>;
  number?: InputMaybe<Scalars['String']>;
};

export type Price = {
  __typename?: 'Price';
  additionalServices?: Maybe<Array<Maybe<Fees>>>;
  base?: Maybe<Scalars['String']>;
  billingCurrency?: Maybe<Scalars['String']>;
  currency?: Maybe<Scalars['String']>;
  fees?: Maybe<Array<Maybe<Fees>>>;
  grandTotal?: Maybe<Scalars['String']>;
  total?: Maybe<Scalars['String']>;
};

export type PriceInput = {
  base?: InputMaybe<Scalars['String']>;
  billingCurrency?: InputMaybe<Scalars['String']>;
  currency?: InputMaybe<Scalars['String']>;
  fees?: InputMaybe<Array<InputMaybe<FeesInput>>>;
  grandTotal?: InputMaybe<Scalars['String']>;
  taxes?: InputMaybe<Array<InputMaybe<TaxesInput>>>;
  total?: InputMaybe<Scalars['String']>;
};

export type PricingOptions = {
  __typename?: 'PricingOptions';
  corporateCodes?: Maybe<Array<Maybe<Scalars['String']>>>;
  fareType?: Maybe<Array<Maybe<Scalars['String']>>>;
  includedCheckedBags?: Maybe<Scalars['Boolean']>;
};

export type PricingOptionsInput = {
  fareType?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  includedCheckedBagsOnly?: InputMaybe<Scalars['Boolean']>;
};

export type Query = {
  __typename?: 'Query';
  createFlightOrder?: Maybe<CreateFlightOrderResponse>;
};


export type QueryCreateFlightOrderArgs = {
  parameters?: InputMaybe<Parameters>;
  request?: InputMaybe<CreateFlightOrderRequest>;
};

export type RemarksInput = {
  general?: InputMaybe<Array<InputMaybe<GeneralInput>>>;
};

export type Rules = {
  category?: InputMaybe<Scalars['String']>;
  maxPenaltyAmount?: InputMaybe<Scalars['String']>;
  notApplicable?: InputMaybe<Scalars['Boolean']>;
};

export type Segments = {
  __typename?: 'Segments';
  aircraft?: Maybe<Aircraft>;
  arrival?: Maybe<Arrival>;
  blacklistedInEU?: Maybe<Scalars['Boolean']>;
  carrierCode?: Maybe<Scalars['String']>;
  co2Emissions?: Maybe<Array<Maybe<Co2Emissions>>>;
  departure?: Maybe<Arrival>;
  duration?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  number?: Maybe<Scalars['String']>;
  numberOfStops?: Maybe<Scalars['Int']>;
  operating?: Maybe<Operating>;
};

export type SegmentsInput = {
  aircraft?: InputMaybe<AircraftInput>;
  arrival?: InputMaybe<ArrivalInput>;
  blacklistedInEU?: InputMaybe<Scalars['Boolean']>;
  carrierCode?: InputMaybe<Scalars['String']>;
  departure?: InputMaybe<ArrivalInput>;
  duration?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  number?: InputMaybe<Scalars['String']>;
  numberOfStops?: InputMaybe<Scalars['Int']>;
  operating?: InputMaybe<OperatingInput>;
};

export type Taxes = {
  __typename?: 'Taxes';
  amount?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
};

export type TaxesInput = {
  amount?: InputMaybe<Scalars['String']>;
  code?: InputMaybe<Scalars['String']>;
};

export type TicketingAggreement = {
  __typename?: 'TicketingAggreement';
  dateTime?: Maybe<Scalars['String']>;
  option?: Maybe<Scalars['String']>;
};

export type TicketingAgreementInput = {
  delay?: InputMaybe<Scalars['String']>;
  option?: InputMaybe<Scalars['String']>;
};

export type TravelerPricings = {
  __typename?: 'TravelerPricings';
  associatedAdultId?: Maybe<Scalars['String']>;
  fareDetailsBySegment?: Maybe<Array<Maybe<FareDetailsBySegment>>>;
  fareOption?: Maybe<Scalars['String']>;
  price?: Maybe<Price>;
  travelerId?: Maybe<Scalars['String']>;
  travelerType?: Maybe<Scalars['String']>;
};

export type TravelerPricingsInput = {
  associatedAdultId?: InputMaybe<Scalars['String']>;
  fareDetailsBySegment?: InputMaybe<Array<InputMaybe<FareDetailsBySegmentInput>>>;
  fareOption?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<PriceInput>;
  travelerId?: InputMaybe<Scalars['String']>;
  travelerType?: InputMaybe<Scalars['String']>;
};

export type Travelers = {
  __typename?: 'Travelers';
  contact?: Maybe<Contact>;
  dateOfBirth?: Maybe<Scalars['String']>;
  documents?: Maybe<Array<Maybe<Documents>>>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Name>;
};

export type TravelersInput = {
  contact?: InputMaybe<ContactInput>;
  dateOfBirth?: InputMaybe<Scalars['String']>;
  documents?: InputMaybe<Array<InputMaybe<DocumentsInput>>>;
  gender?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<NameInput>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Address: ResolverTypeWrapper<Address>;
  AddressInput: AddressInput;
  Aircraft: ResolverTypeWrapper<Aircraft>;
  AircraftInput: AircraftInput;
  AllotmentDetails: ResolverTypeWrapper<AllotmentDetails>;
  Arrival: ResolverTypeWrapper<Arrival>;
  ArrivalInput: ArrivalInput;
  AssociatedRecords: ResolverTypeWrapper<AssociatedRecords>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Co2Emissions: ResolverTypeWrapper<Co2Emissions>;
  Contact: ResolverTypeWrapper<Contact>;
  ContactInput: ContactInput;
  Contacts: ResolverTypeWrapper<Contacts>;
  ContactsInput: ContactsInput;
  CreateFlightOrderRequest: CreateFlightOrderRequest;
  CreateFlightOrderResponse: ResolverTypeWrapper<CreateFlightOrderResponse>;
  CreateFlightOrderResults: ResolverTypeWrapper<CreateFlightOrderResults>;
  Data: ResolverTypeWrapper<Data>;
  DataInput: DataInput;
  Documents: ResolverTypeWrapper<Documents>;
  DocumentsInput: DocumentsInput;
  FareDetailsBySegment: ResolverTypeWrapper<FareDetailsBySegment>;
  FareDetailsBySegmentInput: FareDetailsBySegmentInput;
  FareRules: FareRules;
  Fees: ResolverTypeWrapper<Fees>;
  FeesInput: FeesInput;
  FlightOffers: ResolverTypeWrapper<FlightOffers>;
  FlightOffersInput: FlightOffersInput;
  FormOfPaymentsInput: FormOfPaymentsInput;
  GeneralInput: GeneralInput;
  IncludedCheckedBags: ResolverTypeWrapper<IncludedCheckedBags>;
  IncludedCheckedBagsInput: IncludedCheckedBagsInput;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Itineraries: ResolverTypeWrapper<Itineraries>;
  ItinerariesInput: ItinerariesInput;
  Name: ResolverTypeWrapper<Name>;
  NameInput: NameInput;
  Operating: ResolverTypeWrapper<Operating>;
  OperatingInput: OperatingInput;
  OtherInput: OtherInput;
  Parameters: Parameters;
  Phones: ResolverTypeWrapper<Phones>;
  PhonesInput: PhonesInput;
  Price: ResolverTypeWrapper<Price>;
  PriceInput: PriceInput;
  PricingOptions: ResolverTypeWrapper<PricingOptions>;
  PricingOptionsInput: PricingOptionsInput;
  Query: ResolverTypeWrapper<{}>;
  RemarksInput: RemarksInput;
  Rules: Rules;
  Segments: ResolverTypeWrapper<Segments>;
  SegmentsInput: SegmentsInput;
  String: ResolverTypeWrapper<Scalars['String']>;
  Taxes: ResolverTypeWrapper<Taxes>;
  TaxesInput: TaxesInput;
  TicketingAggreement: ResolverTypeWrapper<TicketingAggreement>;
  TicketingAgreementInput: TicketingAgreementInput;
  TravelerPricings: ResolverTypeWrapper<TravelerPricings>;
  TravelerPricingsInput: TravelerPricingsInput;
  Travelers: ResolverTypeWrapper<Travelers>;
  TravelersInput: TravelersInput;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Address: Address;
  AddressInput: AddressInput;
  Aircraft: Aircraft;
  AircraftInput: AircraftInput;
  AllotmentDetails: AllotmentDetails;
  Arrival: Arrival;
  ArrivalInput: ArrivalInput;
  AssociatedRecords: AssociatedRecords;
  Boolean: Scalars['Boolean'];
  Co2Emissions: Co2Emissions;
  Contact: Contact;
  ContactInput: ContactInput;
  Contacts: Contacts;
  ContactsInput: ContactsInput;
  CreateFlightOrderRequest: CreateFlightOrderRequest;
  CreateFlightOrderResponse: CreateFlightOrderResponse;
  CreateFlightOrderResults: CreateFlightOrderResults;
  Data: Data;
  DataInput: DataInput;
  Documents: Documents;
  DocumentsInput: DocumentsInput;
  FareDetailsBySegment: FareDetailsBySegment;
  FareDetailsBySegmentInput: FareDetailsBySegmentInput;
  FareRules: FareRules;
  Fees: Fees;
  FeesInput: FeesInput;
  FlightOffers: FlightOffers;
  FlightOffersInput: FlightOffersInput;
  FormOfPaymentsInput: FormOfPaymentsInput;
  GeneralInput: GeneralInput;
  IncludedCheckedBags: IncludedCheckedBags;
  IncludedCheckedBagsInput: IncludedCheckedBagsInput;
  Int: Scalars['Int'];
  Itineraries: Itineraries;
  ItinerariesInput: ItinerariesInput;
  Name: Name;
  NameInput: NameInput;
  Operating: Operating;
  OperatingInput: OperatingInput;
  OtherInput: OtherInput;
  Parameters: Parameters;
  Phones: Phones;
  PhonesInput: PhonesInput;
  Price: Price;
  PriceInput: PriceInput;
  PricingOptions: PricingOptions;
  PricingOptionsInput: PricingOptionsInput;
  Query: {};
  RemarksInput: RemarksInput;
  Rules: Rules;
  Segments: Segments;
  SegmentsInput: SegmentsInput;
  String: Scalars['String'];
  Taxes: Taxes;
  TaxesInput: TaxesInput;
  TicketingAggreement: TicketingAggreement;
  TicketingAgreementInput: TicketingAgreementInput;
  TravelerPricings: TravelerPricings;
  TravelerPricingsInput: TravelerPricingsInput;
  Travelers: Travelers;
  TravelersInput: TravelersInput;
};

export type AddressResolvers<ContextType = any, ParentType extends ResolversParentTypes['Address'] = ResolversParentTypes['Address']> = {
  cityName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  countryCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lines?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  postalCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AircraftResolvers<ContextType = any, ParentType extends ResolversParentTypes['Aircraft'] = ResolversParentTypes['Aircraft']> = {
  code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AllotmentDetailsResolvers<ContextType = any, ParentType extends ResolversParentTypes['AllotmentDetails'] = ResolversParentTypes['AllotmentDetails']> = {
  tourName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tourReference?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ArrivalResolvers<ContextType = any, ParentType extends ResolversParentTypes['Arrival'] = ResolversParentTypes['Arrival']> = {
  at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  iataCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  terminal?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AssociatedRecordsResolvers<ContextType = any, ParentType extends ResolversParentTypes['AssociatedRecords'] = ResolversParentTypes['AssociatedRecords']> = {
  creationDateTime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  flightOfferId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  originSystemCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Co2EmissionsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Co2Emissions'] = ResolversParentTypes['Co2Emissions']> = {
  cabin?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  weight?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  weightUnit?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ContactResolvers<ContextType = any, ParentType extends ResolversParentTypes['Contact'] = ResolversParentTypes['Contact']> = {
  phones?: Resolver<Maybe<Array<Maybe<ResolversTypes['Phones']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ContactsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Contacts'] = ResolversParentTypes['Contacts']> = {
  address?: Resolver<Maybe<ResolversTypes['Address']>, ParentType, ContextType>;
  companyName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  emailAddress?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  phones?: Resolver<Maybe<Array<Maybe<ResolversTypes['Phones']>>>, ParentType, ContextType>;
  purpose?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateFlightOrderResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateFlightOrderResponse'] = ResolversParentTypes['CreateFlightOrderResponse']> = {
  msg?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  response?: Resolver<Maybe<ResolversTypes['CreateFlightOrderResults']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateFlightOrderResultsResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateFlightOrderResults'] = ResolversParentTypes['CreateFlightOrderResults']> = {
  data?: Resolver<Maybe<ResolversTypes['Data']>, ParentType, ContextType>;
  dictionaries?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  timestamp?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DataResolvers<ContextType = any, ParentType extends ResolversParentTypes['Data'] = ResolversParentTypes['Data']> = {
  associatedRecords?: Resolver<Maybe<Array<Maybe<ResolversTypes['AssociatedRecords']>>>, ParentType, ContextType>;
  contacts?: Resolver<Maybe<Array<Maybe<ResolversTypes['Contacts']>>>, ParentType, ContextType>;
  flightOffers?: Resolver<Maybe<Array<Maybe<ResolversTypes['FlightOffers']>>>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  queuingOfficeId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ticketingAggreement?: Resolver<Maybe<ResolversTypes['TicketingAggreement']>, ParentType, ContextType>;
  travelers?: Resolver<Maybe<Array<Maybe<ResolversTypes['Travelers']>>>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DocumentsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Documents'] = ResolversParentTypes['Documents']> = {
  documentType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  expiryDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  holder?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  issuanceCountry?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nationality?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  number?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FareDetailsBySegmentResolvers<ContextType = any, ParentType extends ResolversParentTypes['FareDetailsBySegment'] = ResolversParentTypes['FareDetailsBySegment']> = {
  allotmentDetails?: Resolver<Maybe<ResolversTypes['AllotmentDetails']>, ParentType, ContextType>;
  brandedFare?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  cabin?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  class?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fareBasis?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  includedCheckedBags?: Resolver<Maybe<ResolversTypes['IncludedCheckedBags']>, ParentType, ContextType>;
  isAllotment?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  segmentId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sliceDiceIndicator?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FeesResolvers<ContextType = any, ParentType extends ResolversParentTypes['Fees'] = ResolversParentTypes['Fees']> = {
  amount?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FlightOffersResolvers<ContextType = any, ParentType extends ResolversParentTypes['FlightOffers'] = ResolversParentTypes['FlightOffers']> = {
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  itineraries?: Resolver<Maybe<Array<Maybe<ResolversTypes['Itineraries']>>>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['Price']>, ParentType, ContextType>;
  pricingOptions?: Resolver<Maybe<ResolversTypes['PricingOptions']>, ParentType, ContextType>;
  source?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  travelerPricings?: Resolver<Maybe<Array<Maybe<ResolversTypes['TravelerPricings']>>>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  validatingAirlineCodes?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IncludedCheckedBagsResolvers<ContextType = any, ParentType extends ResolversParentTypes['IncludedCheckedBags'] = ResolversParentTypes['IncludedCheckedBags']> = {
  quantity?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ItinerariesResolvers<ContextType = any, ParentType extends ResolversParentTypes['Itineraries'] = ResolversParentTypes['Itineraries']> = {
  duration?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  segments?: Resolver<Maybe<Array<Maybe<ResolversTypes['Segments']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type NameResolvers<ContextType = any, ParentType extends ResolversParentTypes['Name'] = ResolversParentTypes['Name']> = {
  firstName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lastName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OperatingResolvers<ContextType = any, ParentType extends ResolversParentTypes['Operating'] = ResolversParentTypes['Operating']> = {
  carrierCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PhonesResolvers<ContextType = any, ParentType extends ResolversParentTypes['Phones'] = ResolversParentTypes['Phones']> = {
  countryCallingCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  deviceType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  number?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PriceResolvers<ContextType = any, ParentType extends ResolversParentTypes['Price'] = ResolversParentTypes['Price']> = {
  additionalServices?: Resolver<Maybe<Array<Maybe<ResolversTypes['Fees']>>>, ParentType, ContextType>;
  base?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  billingCurrency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  currency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fees?: Resolver<Maybe<Array<Maybe<ResolversTypes['Fees']>>>, ParentType, ContextType>;
  grandTotal?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  total?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PricingOptionsResolvers<ContextType = any, ParentType extends ResolversParentTypes['PricingOptions'] = ResolversParentTypes['PricingOptions']> = {
  corporateCodes?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  fareType?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  includedCheckedBags?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  createFlightOrder?: Resolver<Maybe<ResolversTypes['CreateFlightOrderResponse']>, ParentType, ContextType, Partial<QueryCreateFlightOrderArgs>>;
};

export type SegmentsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Segments'] = ResolversParentTypes['Segments']> = {
  aircraft?: Resolver<Maybe<ResolversTypes['Aircraft']>, ParentType, ContextType>;
  arrival?: Resolver<Maybe<ResolversTypes['Arrival']>, ParentType, ContextType>;
  blacklistedInEU?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  carrierCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  co2Emissions?: Resolver<Maybe<Array<Maybe<ResolversTypes['Co2Emissions']>>>, ParentType, ContextType>;
  departure?: Resolver<Maybe<ResolversTypes['Arrival']>, ParentType, ContextType>;
  duration?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  number?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  numberOfStops?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  operating?: Resolver<Maybe<ResolversTypes['Operating']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TaxesResolvers<ContextType = any, ParentType extends ResolversParentTypes['Taxes'] = ResolversParentTypes['Taxes']> = {
  amount?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TicketingAggreementResolvers<ContextType = any, ParentType extends ResolversParentTypes['TicketingAggreement'] = ResolversParentTypes['TicketingAggreement']> = {
  dateTime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  option?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TravelerPricingsResolvers<ContextType = any, ParentType extends ResolversParentTypes['TravelerPricings'] = ResolversParentTypes['TravelerPricings']> = {
  associatedAdultId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fareDetailsBySegment?: Resolver<Maybe<Array<Maybe<ResolversTypes['FareDetailsBySegment']>>>, ParentType, ContextType>;
  fareOption?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['Price']>, ParentType, ContextType>;
  travelerId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  travelerType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TravelersResolvers<ContextType = any, ParentType extends ResolversParentTypes['Travelers'] = ResolversParentTypes['Travelers']> = {
  contact?: Resolver<Maybe<ResolversTypes['Contact']>, ParentType, ContextType>;
  dateOfBirth?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  documents?: Resolver<Maybe<Array<Maybe<ResolversTypes['Documents']>>>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['Name']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Address?: AddressResolvers<ContextType>;
  Aircraft?: AircraftResolvers<ContextType>;
  AllotmentDetails?: AllotmentDetailsResolvers<ContextType>;
  Arrival?: ArrivalResolvers<ContextType>;
  AssociatedRecords?: AssociatedRecordsResolvers<ContextType>;
  Co2Emissions?: Co2EmissionsResolvers<ContextType>;
  Contact?: ContactResolvers<ContextType>;
  Contacts?: ContactsResolvers<ContextType>;
  CreateFlightOrderResponse?: CreateFlightOrderResponseResolvers<ContextType>;
  CreateFlightOrderResults?: CreateFlightOrderResultsResolvers<ContextType>;
  Data?: DataResolvers<ContextType>;
  Documents?: DocumentsResolvers<ContextType>;
  FareDetailsBySegment?: FareDetailsBySegmentResolvers<ContextType>;
  Fees?: FeesResolvers<ContextType>;
  FlightOffers?: FlightOffersResolvers<ContextType>;
  IncludedCheckedBags?: IncludedCheckedBagsResolvers<ContextType>;
  Itineraries?: ItinerariesResolvers<ContextType>;
  Name?: NameResolvers<ContextType>;
  Operating?: OperatingResolvers<ContextType>;
  Phones?: PhonesResolvers<ContextType>;
  Price?: PriceResolvers<ContextType>;
  PricingOptions?: PricingOptionsResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Segments?: SegmentsResolvers<ContextType>;
  Taxes?: TaxesResolvers<ContextType>;
  TicketingAggreement?: TicketingAggreementResolvers<ContextType>;
  TravelerPricings?: TravelerPricingsResolvers<ContextType>;
  Travelers?: TravelersResolvers<ContextType>;
};

