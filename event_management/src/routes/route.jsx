import EventList from '../pages/EventList/EventList'
import EventDetails from '../pages/EventDetails/EventDetails'
import FilterEvents from '../pages/FilterEvents/FilterEvents'

export const route = [
    { path: '/',element: <EventList/>},
    { path: '/find-events',element: <FilterEvents/>},
    {path: '/events/:id',element: <EventDetails/>}
  ]