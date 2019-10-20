import {
  FETCH_POSTS_BEGIN,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
  LIKE_POST,
  LOVE_POST,
  CLAP_POST,
  SUPER_POST,
  DISLIKE_POST
} from "../actions/postAction";

const initialState = {
  items: [],
  loading: false,
  error: null
};

export default function postReducer(state = initialState, action) {
  let index = {};
  switch (action.type) {
    case FETCH_POSTS_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };

    case FETCH_POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload.posts.aData
      };

    case FETCH_POSTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        items: []
      };

    case LIKE_POST:
      index = state.items.findIndex(post => post.id === action.id);
      return {
        ...state,
        loading: false,
        items: [
          ...state.items.slice(0, index),
          {
            ...state.items[index],
            likeCount: ++state.items[index].likeCount
          },
          ...state.items.slice(index + 1)
        ]
      };

    case LOVE_POST:
      index = state.items.findIndex(post => post.id === action.id);
      return {
        ...state,
        loading: false,
        items: [
          ...state.items.slice(0, index),
          {
            ...state.items[index],
            likeCount: ++state.items[index].likeCount
          },
          ...state.items.slice(index + 1)
        ]
      };

    case CLAP_POST:
      index = state.items.findIndex(post => post.id === action.id);
      return {
        ...state,
        loading: false,
        items: [
          ...state.items.slice(0, index),
          {
            ...state.items[index],
            likeCount: ++state.items[index].likeCount
          },
          ...state.items.slice(index + 1)
        ]
      };

    case SUPER_POST:
      index = state.items.findIndex(post => post.id === action.id);
      return {
        ...state,
        loading: false,
        items: [
          ...state.items.slice(0, index),
          {
            ...state.items[index],
            likeCount: ++state.items[index].likeCount
          },
          ...state.items.slice(index + 1)
        ]
      };

    case DISLIKE_POST:
      index = state.items.findIndex(post => post.id === action.id);
      return {
        ...state,
        loading: false,
        items: [
          ...state.items.slice(0, index),
          {
            ...state.items[index],
            likeCount: ++state.items[index].likeCount
          },
          ...state.items.slice(index + 1)
        ]
      };

    default:
      return state;
  }
}
