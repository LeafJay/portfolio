"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";


export default function ThemePicker() {
  
  const [isMounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true)
    console.log(theme)
  },[])
  
  if(!isMounted)
    return null

  return (
    <button className="transition-all" onClick={() => setTheme(theme == 'dark' ? 'light' : 'dark')}>
      <FontAwesomeIcon icon={theme == 'dark' ? faMoon : faSun}/>
    </button>
  )
}
