'use client'

import React from 'react'
import { MENU_HEADER } from '@/utils/list'
import Image from 'next/image'
import images from '@/assets/images'
import { GetStorage } from '@/services/store'
import MenuIcon from './MenuIcon'
import { Icon } from '@/assets/icons'

export default function Menu({ isMobile, closeOpen }: Readonly<{ isMobile: boolean; closeOpen: () => void }>) {
  const sideBar = GetStorage('DATA_USER')
  const filteredMenuHeader = MENU_HEADER.filter(item => {
    if (sideBar?.group === 'Asset Auditor') {
      return item.name !== 'Role Management'
    }
    if (sideBar?.group === 'Departemen Head') {
      return item.name !== 'Dashboard'
    }
    if (sideBar?.group === 'PIC Asset Audit') {
      return item.name !== 'Role Management'
    }
    if (sideBar?.group === 'Division Head') {
      return item.name !== 'Dashboard' && item.name !== 'Role Management'
    }
    // if (sideBar?.group === 'Departemen Head' || sideBar?.group === 'Division Head') {
    //   return item.name !== 'Dashboard' && item.name !== 'Role Management'
    // }
    return true
  })

  return (
    <ul className="flex text-[#474D66] flex-col">
      <div className="min-w-[100px] py-5 flex px-5 items-center justify-between">
        <Image src={images.LOGO} width={25} height={25} alt="logo-acc" style={{ width: '25px', height: '25px' }} />
        <div className="ml-3">
          <h1 className="font-extrabold">{sideBar?.npk}</h1>
          <div className="font-thin">{sideBar?.group}</div>
        </div>
        <div className="justify-end flex">
          {isMobile && (
            <div>
              <button onClick={closeOpen}>
                <Icon name="x-circle" className="w-[24px] h-[24px]" />
              </button>
            </div>
          )}
        </div>
      </div>
      {filteredMenuHeader.map((item, index) => {
        const ListMenu = MenuIcon[item.icon]
        return <ListMenu key={index} item={item} />
      })}
    </ul>
  )
}
