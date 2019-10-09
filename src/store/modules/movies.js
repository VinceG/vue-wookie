import http from "@/services/http";
import { flatten, sortBy, filter, includes, find } from "@/utils/lodash";

const state = {
  rows: []
};

// getters
const getters = {
  rows: state => state.rows,
  genres: state => {
    return sortBy([...new Set(flatten(state.rows.map(r => r.genres)))]);
  },
  findByGenre: state => genre => {
    return filter(state.rows, movie => includes(movie.genres, genre));
  },
  findBySlug: state => slug => {
    return find(state.rows, movie => movie.slug == slug);
  }
};

// actions
const actions = {
  async all({ commit }) {
    let { data } = await http.get("movies");

    commit("SET_MOVIES", data.movies);

    return data.data;
  }
};

// mutations
const mutations = {
  SET_MOVIES(state, rows) {
    state.rows = rows;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
