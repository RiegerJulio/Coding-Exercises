export const PERSONAL_VALUE_UPDATE = 'PERSONAL_VALUE_UPDATE';
export const PROFESSIONAL_VALUE_UPDATE = 'PROFESSIONAL_VALUE_UPDATE';

export const personalValueUpdate = (payload) => (
  {
    type: PERSONAL_VALUE_UPDATE,
    payload,
  }
);

export const professionalValueUpdate = (payload) => (
  {
    type: PROFESSIONAL_VALUE_UPDATE,
    payload,
  }
);
