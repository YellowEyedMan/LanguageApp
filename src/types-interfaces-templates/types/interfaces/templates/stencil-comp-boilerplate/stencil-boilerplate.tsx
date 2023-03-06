import { h, Component, Host, Listen, State } from '@stencil/core'

@Component({
    tag: 'stencil-boilerplate',
    styleUrl: 'stencil-boilerplate.scss',
    shadow: true,
})

export class StencilBoilerPlate {
    render() {
        return (
            <div class="boilerplate-wrapper">
                This is your Stencil Boilerplate.
                <slot />
            </div>
        )
    }
} 