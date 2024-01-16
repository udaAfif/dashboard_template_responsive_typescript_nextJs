'use client'

import Container from '@/components/organism/Container'
import { GetStorage } from '@/services/store'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function Home() {
  const profile = GetStorage('DATA_USER')
  const router = useRouter()

  useEffect(() => {
    if (profile?.group === 'Departemen Head' || profile?.group === 'Division Head') {
      router.push('/bucket')
    }
  }, [])

  return <Container padding={false}>TESTING</Container>
}
