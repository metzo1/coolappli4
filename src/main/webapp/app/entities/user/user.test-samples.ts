import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 22098,
  login: 'V',
};

export const sampleWithPartialData: IUser = {
  id: 2282,
  login: '6W@A5\\kAWbgvO',
};

export const sampleWithFullData: IUser = {
  id: 4718,
  login: '*-VA8s@Nr\\IYpDpU8\\b21-L\\-VncNZx\\bbI3nh',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
