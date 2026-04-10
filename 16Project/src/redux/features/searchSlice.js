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
    clearResults: (state) => {
      state.results = [];
    }
  },
});

export const { setQuery, setResults, setLoading, setActiveTab, setError, clearResults } = searchSlice.actions;
export default searchSlice.reducer;
