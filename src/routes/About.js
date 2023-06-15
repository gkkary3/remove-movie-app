import { Component } from '../core/heropy'
import aboutStore from '../store/about'

export default class About extends Component {
  render() {
    const { photo, name, email, github, blog } = aboutStore.state
    this.el.classList.add('container', 'about')
    this.el.innerHTML = /* html */`
      <div 
       style="background-image: url(${photo});"
       class="photo"></div>
      <p class="name">${name}</p>
      <P>
        <a 
        href="https://mail.google.com/mail/?view=cm&fs=1&to=${email}" 
        target="_blank">
        ${email}
        </a>
      </p>
      <P><a href="${github}" target="_blank">GitHub</a></p>
      <P><a href="${blog}" target="_blank">Blog</a></p>
    `
  }
}