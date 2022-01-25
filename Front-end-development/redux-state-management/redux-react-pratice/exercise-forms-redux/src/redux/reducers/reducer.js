import { PERSONAL_VALUE_UPDATE, PROFESSIONAL_VALUE_UPDATE } from '../actions';

const INITIAL_STATE = {
  personalForm: {
    nome: '',
    email: '',
    cpf: '',
    endereco: '',
    cidade: '',
    estado: '',
  },
  professionalForm: {
    curriculo: '',
    cargo: '',
    descricao: '',
  },
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case PERSONAL_VALUE_UPDATE:
    return ({
      ...state,
      personalForm: action.payload,
    });
  case PROFESSIONAL_VALUE_UPDATE:
    return ({
      ...state,
      professionalForm: action.payload,
    });
  default: return state;
  }
};

export default reducer;
