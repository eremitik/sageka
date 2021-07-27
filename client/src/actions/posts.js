import axios from "axios";

const url = "http://localhost:5000/posts";

const fetchPostsAPI = () => axios.get(url);
const createPostAPI = (newPost) => axios.post(url, newPost);
const updatePostAPI = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);
const deletePostAPI = (id) => axios.delete(`${url}/${id}`)
const likePostAPI = (id) => axios.patch(`${url}/${id}/likePost`);

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await fetchPostsAPI();
    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (err) {
    console.log(err)
  }
}

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await createPostAPI(post);
    dispatch({ type: "CREATE", payload: data });
  } catch (err) {
    console.log(err)
  }
}

export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await updatePostAPI(id, post);
    dispatch({ type: "UPDATE", payload: data });
  } catch (err) {
    console.log(err)
  }
}

export const deletePost = (id) => async (dispatch) => {
  try {
    await deletePostAPI(id);
    dispatch({ type: "DELETE", payload: id })
  } catch (err) {
    console.log(err)
  }
}

export const likePost = (id) => async (dispatch) => {
  try {
    const { data } = await likePostAPI(id);
    dispatch({ type: "UPDATE", payload: data })

  } catch (err) {
    console.log(err)
  }
}