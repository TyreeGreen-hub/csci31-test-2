import Button from './Button'
import Tag from './Tag'
import { BeakerIcon, BugAntIcon } from '@heroicons/react/24/solid'

const navigationButtons = [
  {
    title: 'About',
    href: '/about',
    isNew: true,
  },
  {
    title: 'Home',
    href: '/',
    isNew: false,
  },
]

export default function Navbar() {
  return (
    <nav className="flex justify-between bg-purple-60 p-6 items-center sticky top-0 shadow-lg">
      <div className="h-10 w-10">
        <BugAntIcon />
      </div>
      <div className="flex gap-x-4 items-center">
        {navigationButtons.map(({ href, title, isNew }) => (
          <>
            <Button href={href} classNameProp="flex text-l">
              {isNew && <Tag classNames="mr-2 animate-pulse" />}
              {title}
            </Button>
          </>
        ))}
      </div>
    </nav>
  )
}
