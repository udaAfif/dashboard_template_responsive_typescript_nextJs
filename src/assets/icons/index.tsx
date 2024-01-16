'use client'

import React, { useEffect, useRef } from 'react'
import { toast } from 'react-toastify'

interface IconProps extends React.SVGAttributes<HTMLOrSVGElement> {
  name: string
  width?: number
  height?: number
  color?: string
}

const replaceColor = (svgString: string, newColor?: string) => {
  if (newColor) {
    const regex = /fill="(#[A-Fa-f0-9]{6})|(none)"/g
    const replacement = `fill="var(${newColor})"`
    return svgString.replace(regex, replacement)
  }

  return svgString
}

export const Icon: React.FC<IconProps> = ({ name, width, height, color, ...props }) => {
  const svgRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    const loadAndSetSvg = async () => {
      try {
        const svgModule = await import(`../../../public/icons/${name}.svg`)
        const svgString = svgModule.default
        if (svgRef.current) {
          svgRef.current.innerHTML = replaceColor(svgString, color)
        }
      } catch (error) {
        toast.error(`Error loading SVG for ${name}:`, {
          position: 'top-right',
        })
      }
    }

    loadAndSetSvg()
  }, [name, color])

  return <svg width={width} height={height} ref={svgRef} {...props}></svg>
}
