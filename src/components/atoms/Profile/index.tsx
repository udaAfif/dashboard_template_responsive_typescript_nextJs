import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'
import images from '@/assets/images'
import { capitalizeNames } from '@/utils/helper/StringUtils'
import { GetStorage } from '@/services/store'

export default function Profile() {
  const router = useRouter()

  const [showLogOut, setShowLogOut] = useState(false)
  const dropdownRef = useRef<HTMLDivElement | null>(null)

  const profileData = GetStorage('DATA_USER')
  const handleDropDown = () => {
    setShowLogOut(!showLogOut)
  }

  const handleLogOut = async () => {
    // await fetchDataLogout()
    //   .then((res: any) => {
    //     if (res.res === 'success') {
    //       router.push('/login')
    //     }
    //   })
    //   .catch(() => {
    //     toast.error('Error Logout.', {
    //       position: "top-right",
    //     })
    //   })
    // localStorage.removeItem('DATA_USER')
    // localStorage.removeItem('YEAR_SIGNOFF')
    // localStorage.removeItem('CYLE_NAME')
    // localStorage.removeItem('FILE_NAME')
    // deleteCookie('TOKEN')
    // router.push('/login')
    // localStorage.removeItem('refreshed')
  }

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowLogOut(false)
      }
    }
    document.addEventListener('click', handleClickOutside)
    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [])
  return (
    <div className="flex relative flex-1 py-4 items-center justify-end text-[#474D66]">
      <button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6 mr-3"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5"
          />
        </svg>
      </button>
      <Image src={images.LOGO} width={25} height={25} alt="logo-acc" style={{ width: '25px', height: '25px' }} />
      <div className="relative" ref={dropdownRef}>
        <div className="relative ml-3 text-[#474D66] cursor-pointer" onClick={handleDropDown} onKeyDown={() => {}}>
          {capitalizeNames(profileData?.name || 'Login')}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="inline-block ml-1"
          >
            <g opacity="0.51">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.29195 10.2929C8.10514 10.4818 8.00037 10.7368 8.00037 11.0024C8.00037 11.2681 8.10514 11.523 8.29195 11.7119L11.2309 14.6769C11.4489 14.8919 11.7309 14.9989 12.0099 14.9989C12.2889 14.9989 12.5659 14.8919 12.7789 14.6769L15.7089 11.7219C15.8955 11.5329 16.0001 11.278 16.0001 11.0124C16.0001 10.7469 15.8955 10.492 15.7089 10.3029C15.6171 10.2098 15.5077 10.1358 15.387 10.0853C15.2663 10.0347 15.1368 10.0087 15.0059 10.0087C14.8751 10.0087 14.7456 10.0347 14.6249 10.0853C14.5042 10.1358 14.3948 10.2098 14.3029 10.3029L12.0049 12.6199L9.69795 10.2929C9.60591 10.2001 9.4964 10.1264 9.37574 10.0762C9.25508 10.0259 9.12566 10 8.99495 10C8.86423 10 8.73481 10.0259 8.61415 10.0762C8.49349 10.1264 8.38398 10.2001 8.29195 10.2929Z"
                fill="#474D66"
              />
            </g>
          </svg>
        </div>
        {showLogOut && (
          <div className="absolute z-10 mt-2 ml-2 hover:bg-blue-500 hover:text-white bg-white border border-[#E6E8F0] rounded w-20">
            <button className="p-2 cursor-pointer" onClick={handleLogOut}>
              Log Out
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
