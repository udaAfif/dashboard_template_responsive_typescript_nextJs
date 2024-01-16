import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useHover } from '@uidotdev/usehooks'
import { SVGIcon } from '@/interfaces/svgicon'

const width = 24
const height = 24
const active = '#008DEB'
const inactive = '#696F8C'

const IconDashboard: React.FC<SVGIcon> = ({ item }) => {
  const pathName = usePathname()
  const [ref, hovering] = useHover<any>()

  return (
    <Link href={item.href}>
      <li ref={ref} className={`${pathName === item.href ? 'menu-selection' : 'text-[#474D66]'} navigation-menu`}>
        <svg xmlns="http://www.w3.org/2000/svg" width={`${width}`} height={`${height}`} viewBox="0 0 24 24" fill="none">
          <path
            d="M4 18H20.008C20 18 20 6 20 6H3.992C4 6 4 18 4 18ZM2 5.994C2 4.893 2.898 4 3.99 4H20.01C21.108 4 22 4.895 22 5.994V18.006C21.9992 18.5339 21.7894 19.04 21.4165 19.4137C21.0436 19.7873 20.5379 19.9981 20.01 20H3.99C3.46185 19.9989 2.9557 19.7884 2.58261 19.4146C2.20953 19.0407 2 18.5342 2 18.006V5.994Z"
            fill={hovering || pathName === item.href ? active : inactive}
          />
          <path d="M7 5V19H9V5H7Z" fill={hovering || pathName === item.href ? active : inactive} />
          <path d="M7 11H21V9H7V11Z" fill={hovering || pathName === item.href ? active : inactive} />
        </svg>
        <span className="ml-3">{item.name}</span>
      </li>
    </Link>
  )
}
const IconCatalog: React.FC<SVGIcon> = ({ item }) => {
  const pathName = usePathname()
  const [ref, hovering] = useHover<any>()

  return (
    <Link href={item.href}>
      <li ref={ref} className={`${pathName.includes(item.href) ? 'menu-selection' : 'text-[#474D66]'} navigation-menu`}>
        <svg xmlns="http://www.w3.org/2000/svg" width={`${width}`} height={`${height}`} viewBox="0 0 24 24" fill="none">
          <path
            d="M14 17H18V7H14V17ZM12 6.007C12 5.45 12.453 5 12.997 5H19.003C19.553 5 20 5.45 20 6.007V17.993C20 18.549 19.547 19 19.003 19H12.997C12.447 19 12 18.55 12 17.993V6.007Z"
            fill={hovering || pathName.includes(item.href) ? active : inactive}
          />
          <path
            d="M9 5H5C4.44772 5 4 5.44772 4 6C4 6.55228 4.44772 7 5 7H9C9.55228 7 10 6.55228 10 6C10 5.44772 9.55228 5 9 5Z"
            fill={hovering || pathName.includes(item.href) ? active : inactive}
          />
          <path
            d="M9 9H5C4.44772 9 4 9.44772 4 10C4 10.5523 4.44772 11 5 11H9C9.55228 11 10 10.5523 10 10C10 9.44772 9.55228 9 9 9Z"
            fill={hovering || pathName.includes(item.href) ? active : inactive}
          />
          <path
            d="M9 13H5C4.44772 13 4 13.4477 4 14C4 14.5523 4.44772 15 5 15H9C9.55228 15 10 14.5523 10 14C10 13.4477 9.55228 13 9 13Z"
            fill={hovering || pathName.includes(item.href) ? active : inactive}
          />
          <path
            d="M9 17H5C4.44772 17 4 17.4477 4 18C4 18.5523 4.44772 19 5 19H9C9.55228 19 10 18.5523 10 18C10 17.4477 9.55228 17 9 17Z"
            fill={hovering || pathName.includes(item.href) ? active : inactive}
          />
        </svg>
        <span className="ml-3">{item.name}</span>
      </li>
    </Link>
  )
}
const IconBucket: React.FC<SVGIcon> = ({ item }) => {
  const pathName = usePathname()
  const [ref, hovering] = useHover<any>()

  return (
    <Link href={item.href}>
      <li
        ref={ref}
        className={` ${pathName.includes(item.href) ? 'menu-selection' : 'text-[#474D66]'} navigation-menu`}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width={`${width}`} height={`${height}`} viewBox="0 0 24 24" fill="none">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M19 3H4.85001C4.34599 3.03791 3.87502 3.26524 3.5318 3.63628C3.18859 4.00733 2.99858 4.49456 3.00001 5V9H4.00001V19.45C4.03082 19.8896 4.23416 20.2993 4.56572 20.5896C4.89727 20.88 5.33015 21.0275 5.77001 21H18.23C18.6699 21.0275 19.1027 20.88 19.4343 20.5896C19.7659 20.2993 19.9692 19.8896 20 19.45V9H21V5C21 4.46957 20.7893 3.96086 20.4142 3.58579C20.0391 3.21071 19.5304 3 19 3V3ZM18 19H6.00001V9H18V19ZM19 7H5.00001V5H19V7ZM15 14H9.00001V12H15V14Z"
            fill={hovering || pathName === item.href ? active : inactive}
          />
        </svg>
        <span className="ml-3">{item.name}</span>
      </li>
    </Link>
  )
}

const MenuIcon = {
  IconDashboard,
  IconCatalog,
  IconBucket,
} as any

export default MenuIcon
