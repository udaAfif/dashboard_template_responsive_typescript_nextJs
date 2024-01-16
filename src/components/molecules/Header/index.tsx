import { Icon } from '@/assets/icons'
import Logo from '@/components/atoms/Logo'
import Profile from '@/components/atoms/Profile'

export default function Header({ openNav }: { openNav: () => void }) {
  return (
    <header className="px-5 flex flex-row bg-white shadow-md relative z-10">
      <div className="mr-4 flex items-center">
        <Icon name="menu" className="max-w-[24px] max-h-[24px] cursor-pointer" onClick={openNav} />
      </div>
      <Logo />
      <Profile />
    </header>
  )
}
