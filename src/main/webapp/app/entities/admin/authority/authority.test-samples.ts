import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: 'e83ef9b4-a982-4824-b16a-5ef3bdf930c5',
};

export const sampleWithPartialData: IAuthority = {
  name: '8a1fcf32-72fb-470c-9a64-f431647844b7',
};

export const sampleWithFullData: IAuthority = {
  name: 'afbf5e8f-3576-44f8-9d63-7310e527bee9',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
