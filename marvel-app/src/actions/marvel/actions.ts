import { AnyAction } from "redux";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import actionTypes from "../actionTypes";

export const resetState = (type: string) => ({
  type,
});

export const updateInput = (type: string, value: string) => ({
  type,
  value,
});

export const toggleFormVisibility = (show: boolean) => ({
  type: actionTypes.TOGGLE_FORM,
  show,
});

const BASE_URL = `https://bp-marvel-api.herokuapp.com/`;

export const getCharacters =
  (): ThunkAction<void, {}, unknown, AnyAction> =>
  async (dispatch: ThunkDispatch<{}, unknown, AnyAction>) => {
    dispatch({ type: actionTypes.CHARACTERS_REQUEST });

    try {
      const response = await fetch(BASE_URL + "marvel-characters?idAuthor=7");
      if (!response.ok) {
        dispatch({ type: actionTypes.CHARACTERS_FAILED });
        return;
      }

      const data = await response.json();

      dispatch({
        type: actionTypes.CHARACTERS_SUCCESS,
        characters: data,
      });
    } catch (error) {
      dispatch({ type: actionTypes.CHARACTERS_FAILED });
    }
  };

export const createCharacter =
  (payload: any): ThunkAction<void, {}, unknown, AnyAction> =>
  async (dispatch: ThunkDispatch<{}, unknown, AnyAction>) => {
    dispatch({ type: actionTypes.CHARACTERS_CREATE_REQUEST });

    try {
      const response: any = await fetch(
        BASE_URL + "marvel-characters?idAuthor=7",
        {
          method: "POST",
          body: JSON.stringify(payload),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        dispatch({ type: actionTypes.CHARACTERS_CREATE_FAILED });
        return;
      }

      const data = await response.json();

      dispatch({
        type: actionTypes.CHARACTERS_CREATE_SUCCESS,
        newCharacter: data,
      });
      window.location.reload();
    } catch (error) {
      dispatch({ type: actionTypes.CHARACTERS_CREATE_FAILED });
    }
  };

export const deleteCharacter =
  (id: any): ThunkAction<void, {}, unknown, AnyAction> =>
  async (dispatch: ThunkDispatch<{}, unknown, AnyAction>) => {
    dispatch({ type: actionTypes.CHARACTERS_DELETE_REQUEST });

    try {
      const response: any = await fetch(`${BASE_URL}${id}?idAuthor=7`, {
        method: "DELETE",
      });
      if (!response.ok) {
        dispatch({ type: actionTypes.CHARACTERS_DELETE_FAILED });
        return;
      }

      const data = await response.json();

      dispatch({
        type: actionTypes.CHARACTERS_DELETE_SUCCESS,
        newCharacter: data,
      });
      window.location.reload();
    } catch (error) {
      dispatch({ type: actionTypes.CHARACTERS_DELETE_FAILED });
    }
  };
