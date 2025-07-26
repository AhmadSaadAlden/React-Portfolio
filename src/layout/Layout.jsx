import React from 'react'
import Header from '../components/Header/Header'
import { NavbarProvider } from '../Context/NavbarContext'
import ThemeWrapper from '../Context/ThemeWrapper'
import { useTheme } from '../Context/ThemeContext'
import Footer from '../components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import { CardProvider } from '../Context/CardContext'


const Layout = () => {
  const {isDarkMode} = useTheme()
  return (
    <div className='min-h-screen flex flex-col bg-[var(--bg-color)]' data-theme={isDarkMode ? 'dark' : 'light'}>
      <div className='flex flex-col py-10 px-16'>
        <NavbarProvider>
          <ThemeWrapper >
            <CardProvider>
              <Header />
                <main>
                  <Outlet />
                </main>
              <Footer />
            </CardProvider>
          </ThemeWrapper>
        </NavbarProvider>
    </div>
    </div>

  )
}

export default Layout