import {
  createAction,
  createAsyncThunk,
  createReducer,
} from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '..';

interface CommentState {
  content?: string;
}

export const initialState: CommentState = {
  content: undefined,
};

const storedToken = localStorage.getItem('jwt');
const token = storedToken ? JSON.parse(storedToken) : '';

export const postComment = createAsyncThunk(
  'comment/postComment',
  async (id: number, thunkAPI) => {
    const state = thunkAPI.getState() as RootState;
    const response = await axios.post(
      `${import.meta.env.VITE_API_PATH}secure/comment`,
      { content: state.comments.content, object: id },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  }
);

export const setComment = createAction<string>('comment/setComment');
export const setObject = createAction<number>('comment/setObject');

const commentsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(postComment.pending, (state, action) => {
      console.log('post pending');
    })
    .addCase(postComment.fulfilled, (state, action) => {
      console.log('post successfully');
    })
    .addCase(postComment.rejected, (state, action) => {
      console.log('post rejected');
    })
    .addCase(setComment, (state, action) => {
      state.content = action.payload;
    });
});

export default commentsReducer;
