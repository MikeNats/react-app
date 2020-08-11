import { TransactionsAsyncActions } from '../store/transactions/actions/types'

export type AsynActionsState = {
  'REQUEST': Function,
  'SUCCESS': Function,
  'FAIL': Function
}

 
export type RequestType = {
  asyncActionName: AsynActionsState,
  actionArgs?: Array<any>,
  responseValidation?: Function
} 


export  const initRequestConfig = {
  asyncActionName: {
    'REQUEST': (...args: Array<any>) => null,
    'SUCCESS': (...args: Array<any>) => null,
    'FAIL': (...args: Array<any>) => null,
  },
  actionArgs: [],
  responseValidation: (...args: Array<any>) => true,
}

export type AsyncActions =  TransactionsAsyncActions
