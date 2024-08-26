import { configureStore } from "@reduxjs/toolkit"
import bikes from "./bikes/bikeSlice";
import cart from "./cart/cartSlice";
import categories from "./categories/categorySlice";
import pagination from "./pagination/paginationSlice";

export const store= configureStore({reducer:{bikes,cart,categories,pagination}});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch