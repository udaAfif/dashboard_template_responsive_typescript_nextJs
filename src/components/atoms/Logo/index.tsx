import images from '@/assets/images'
import Image from 'next/image'
import Link from 'next/link'

export default function Logo() {
  return (
    <div className="flex-1 py-4">
      <Link href="/" className="flex flex-row">
        <Image src={images.LOGO} width={30} height={30} alt="logo-acc" style={{ width: '30px', height: '30px' }} />
        <h1 className="text-xl ml-2 font-extrabold text-white">CCRP Asset Audit</h1>
      </Link>
    </div>
  )
}
