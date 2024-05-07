export type Values = {
  uniqueSerialId: string;
  altId:string;
  dln: string;
  lastName: string;
  givenName: string;
  gender: string;
  dateOfBirth: string ;
  street: string;
  city: string;
  uniqueId: string;
  zip: string;
  country: string;
  telephone: string;
  email: string;
  sendALater: boolean;
  date: string;
  comments: string;
};


export type SetValuesFunction = <K extends keyof Values>(
    key: K,
    value: Values[K]
  ) => void;