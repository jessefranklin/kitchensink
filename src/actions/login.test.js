import * as types from './action-types'
import * as actions from './login'
import exchange from '../test/fixtures/exchange';

import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'
const middlewares = [thunk]
const mockStore = configureMockStore(middlewares);



// describe('async actions', () => {
//     afterEach(() => {
//       fetchMock.restore()
//     })

//     it('creates FETCH_TODOS_SUCCESS when fetching todos has been done', () => {
      
//         fetchMock.getOnce('/', {
//             body: { },
//             headers: { 'content-type': 'application/json' }
//         })

//       const expectedActions = [
//         { type: types.LOGIN_REQUEST },
//         { type: types.LOGIN_SUCCESS, body: { } }
//       ]
//       const store = mockStore({ })
//       return store.dispatch(actions.fetchPosts(1)).then(() => {
//         // return of async actions
//         expect(store.getActions()).toEqual(expectedActions)
//       })
//     })
//   })


describe('actions', () => {
    it('should create an action to add a todo', () => {
      const text = 'Finish docs'
      const expectedAction = {
        type: types.ADD_REQUEST,
        text
      }
      expect(actions.addRequest(text)).toEqual(expectedAction)
    })
})

describe("Exchange Actions", () => {
    // Test for isLoading to be dispatched
    it("should dispatch isLoading", () => {
      const action = actions.fetchExchangeBegin();
      expect(action).toEqual({
        type: types.GET_EXCHANGE_BEGIN
      });
    });
  
    // Test for Error with message
    it("should dispatch error", () => {
      const errorObj = { error: { message: "any" } };
      const action = actions.fetchExchangeError(errorObj);
      expect(action).toEqual({
        type: types.GET_EXCHANGE_FAILURE,
        payload: {
          error: errorObj
        }
      });
    });
  
    // Test dispatch fetch success
    it("should load exchange", () => {
      const action = actions.fetchExchangeSuccess(exchange);
      expect(action).toEqual({
        type: types.GET_EXCHANGE,
        payload: {
          data: exchange
        }
      });
    });
  });
  