import React from 'react'

export type Route = {
  href: string
  iconElement: React.ReactNode
  title: string
}

export type NavigationBlock = {
  header: string
  routes: Route[]
}
