import { ImClock } from 'react-icons/im'
import { NavigationBlock } from '../types'

const Config: NavigationBlock[] = [
  {
    header: 'Track',
    routes: [{ href: '/timer', title: 'Timer', iconElement: ImClock }],
  },
  {
    header: 'Analyze',
    routes: [{ href: '/timer', title: 'Timer', iconElement: ImClock }],
  },
  {
    header: 'Manage',
    routes: [{ href: '/timer', title: 'Timer', iconElement: ImClock }],
  },
]

export default Config
