import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    query: "",
    results: [],
    loading: false,
    activeTab: "photos",
    error: null,
  },

  reducers: {
    setQuery: (state, action) => {
      state.query = action.payload;
    },
    setResults: (state, action) => {
      state.results = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = true;
      state.error = null;
    },
    setActiveTab: (state, action) => {
      state.activeTab = action.payload;
      
    },
    setError: (state,action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { setQuery, setResults, setLoading, setActiveTab, setError } =
  searchSlice.actions;
export default searchSlice.reducer;
