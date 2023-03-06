import { h, Component, Host, Listen, State } from '@stencil/core'
import { LangHeader } from '../../../language-app/front-end/lang-header-comp/lang-header'

@Component({
    tag: 'filter-container',
    styleUrl: 'filter-container.scss',
    shadow: true,
})

export class FilterContainer {
    render() {
        return (
            <div class="filter-conainer">
            </div>
        )
    }
} 