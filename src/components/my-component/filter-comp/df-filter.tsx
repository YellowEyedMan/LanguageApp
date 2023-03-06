import { h, Component, Host, Listen, State } from '@stencil/core'
import { FilterItem } from '../../../types-interfaces-templates/types/interfaces/filter-item-interface/filter-item-interface'

@Component({
  tag: 'df-filter',
  styleUrl: 'df-filter.scss',
  shadow: true,
})
export class DfFilter {
  @State() filterContent: FilterItem[] = [
    {
      id: 1,
      name: 'Bench Press',
      group: 'Chest',
    },
    {
        id: 1,
        name: 'Bench Press',
        group: 'Chest',
      },
      {
        id: 2,
        name: 'Bicep Curls',
        group: 'Biceps',
      },
      {
        id: 2,
        name: 'Chin-Ups',
        group: 'Biceps',
      },
  ];

  render() {
    return <Host></Host>;
  }
} 