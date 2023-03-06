import { h, Component, Host, Listen, State } from '@stencil/core'

@Component({
    tag: 'lang-header',
    styleUrl: 'lang-header.scss',
    shadow: true,
})

export class LangHeader {

    @State() activeSearches: string[] = [];

    @Listen('searchEntrySubmit')
    handleSearchEntrySubmit(e: CustomEvent) {
        this.activeSearches = [...this.activeSearches, ...e.detail ]
        let x = new Set(this.activeSearches)
        console.log(...x)
        // this.activeSearches = x

    }

    render() {


        return (
            <Host>

            <div class="lang-header">
                <h1>Header:</h1>
        <lang-search-bar></lang-search-bar>
            </div>
            <div class="lang-body">
            {
                this.activeSearches.map(searchItem => {
                    return <p class='term-bubble'>{searchItem}</p>
                })
            }
            </div>
            </Host>
        )
    }
} 