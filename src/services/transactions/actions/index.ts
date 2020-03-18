import { Dispatch } from 'redux'
import { 
  TransactionPayloadItemType, 
  TransactionsActionTypes,
  RequestTransactionsActionType,
  ResponseTransactionsActionsType,
  FailGetTransactionsActionType,
  ACTIONS_ENUM_TYPES
} from './types';
import axios from 'axios';

export const requestTransactions = (index: number): RequestTransactionsActionType => ({
  type: ACTIONS_ENUM_TYPES.REQUEST_TRANSACTIONS,
  index
})

export const responseTransactions = (payload:TransactionPayloadItemType[]): ResponseTransactionsActionsType => ({
  type: ACTIONS_ENUM_TYPES.RECEIVE_TRANSACTIONS,
  payload
})

export const failGetTransactions = (errorCode: number): FailGetTransactionsActionType => ({
  type: ACTIONS_ENUM_TYPES.FAILED_TRANSACTIONS,
  errorCode
})

export const fetchtransactions = (n: number): Function => 
  (dispatch: Dispatch<TransactionsActionTypes>): Promise<TransactionsActionTypes> =>  {
    dispatch(requestTransactions(n));

    return axios.get(`http://localhost:3000/mockData/transactions.json`)
      .then(response => dispatch(responseTransactions(response.data)))
      .catch(error => dispatch(failGetTransactions(error.errorCode)))
  }
