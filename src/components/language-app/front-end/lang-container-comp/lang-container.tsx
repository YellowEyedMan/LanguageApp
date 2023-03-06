import { h, Component, Host, Listen, State } from '@stencil/core';

@Component({
  tag: 'lang-container',
  styleUrl: 'lang-container.scss',
  shadow: true,
})
export class LangContainer {
  render() {
    return (
      <div class="lang-container">
        <lang-header></lang-header>
      </div>
    );
  }
}
