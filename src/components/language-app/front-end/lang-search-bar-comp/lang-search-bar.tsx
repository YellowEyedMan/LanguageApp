import { h, Component, Host, 
    Event, State, EventEmitter } from '@stencil/core'

@Component({
    tag: 'lang-search-bar',
    styleUrl: 'lang-search-bar.scss',
    shadow: true,
})

export class LangSearchBar {

    @Event() searchEntrySubmit: EventEmitter
    @State() searchInput: string;
    @State() searchEntries: string[] = []; 

    handleSearchInput(e) {
        
        let newSearch = e.target.value;

        this.searchEntries = [...this.searchEntries, newSearch]

        this.searchEntrySubmit.emit(this.searchEntries)
    }

    render() {


        return (
            <Host>
  
                <input onChange={this.handleSearchInput.bind(this)} type="search" name="input-search-bar" id="input-search-bar">
                </input>{
                <span class="search-bubbles">{
                    this.searchEntries.map((entry) => {
                        if(entry !== null){
                            return   <span class='search-entry'>{entry}</span>
                        } else if(entry === null){
                         console.error('Nothing in Search Bar.');
                        }
                    })
                }</span>
                }
            </Host>
        )
    }
} 