import { Component } from "../core/heropy";
import MovieStore from '../store/movie';
import MovieItem from './MovieItem'

export default class MovieList extends Component {
  constructor() {
    super()
    MovieStore.subscribe('movies', () => {
      this.render()
    })  
    MovieStore.subscribe('loading', () => {
      this.render()
    })  
    MovieStore.subscribe('message', () => {
      this.render()
    })  
  }
  render() {
    this.el.classList.add('movie-list')
    this.el.innerHTML = /* html */`
      ${MovieStore.state.message 
      ? `<div class="message">${MovieStore.state.message}</div>`
      : '<div class="movies"></div>'}
      <div class="the-loader hide"></div>
    `
    const moviesEl = this.el.querySelector('.movies')
    moviesEl?.append(
      ...MovieStore.state.movies.map(movie => new MovieItem({
        movie
      }).el)
    )

    const loaderEl = this.el.querySelector('.the-loader')
    MovieStore.state.loading 
    ? loaderEl.classList.remove('hide')
    : loaderEl.classList.add('hide')
  }
}