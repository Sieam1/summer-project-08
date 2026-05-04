'use client'

import Link from 'next/link'
import Image from 'next/image'
import { authClient } from '@/lib/auth-client'
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation'

export default function Navbar() {
  const router = useRouter()

  const { data: session, isPending } = authClient.useSession()
  const user = session?.user

  const handleLogout = async () => {
    try {
      await authClient.signOut({
        fetchOptions: {
          onSuccess: () => {
            toast.success('Logged out successfully')
            router.push('/login')
          },
        },
      })
    } catch (error) {
      toast.error('Logout failed')
    }
  }

  const navItems = (
    <>
      <li>
        <Link href='/#' className='hover:text-emerald-500 transition-colors'>
          Home
        </Link>
      </li>
      <li>
        <button className='hover:text-emerald-500'>Products</button>
      </li>
      <li>
        <button className='hover:text-emerald-500'> My Profile</button>
      </li>
    </>
  )

  return (
    <nav
      className='navbar bg-white shadow-md px-4 md:px-10 sticky top-0 z-50'
      data-theme='light'
    >
      {/* LEFT SIDE & MOBILE HAMBURGER */}
      <div className='navbar-start'>
       
        <div className='dropdown'>
          <div tabIndex={0} role='button' className='btn btn-ghost lg:hidden'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h8m-8 6h16'
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-semibold'
          >
            {navItems}
          </ul>
        </div>

        <Link href='/' className='flex items-center gap-2 group'>
          <div className='relative w-8 h-8 md:w-10 md:h-10 rounded-full overflow-hidden border-2 border-emerald-400 shrink-0'>
            <Image
              src='/logo/shoping.jpg'
              alt='logo'
              fill
              className='object-cover'
            />
          </div>

          <span className='font-bold text-sm md:text-xl text-slate-800 whitespace-nowrap'>
            Summer <span className='hidden sm:inline'>Essentials</span>{' '}
            <span className='text-emerald-500'>Store</span>
          </span>
        </Link>
      </div>

      {/* (Desktop Only) */}
      <div className='navbar-center hidden lg:flex'>
        <ul className='menu menu-horizontal gap-2 font-semibold text-slate-700'>
          {navItems}
        </ul>
      </div>

   
      <div className='navbar-end gap-2 md:gap-3'>
        {isPending ? (
          <span className='loading loading-spinner loading-sm text-emerald-500'></span>
        ) : user ? (
          <div className='flex items-center gap-2 md:gap-3'>
          
            <div className='flex items-center gap-2'>
              <div className='relative w-8 h-8 md:w-10 md:h-10 rounded-full overflow-hidden border shrink-0'>
                <Image
                  src={
                    user.image ||
                    `https://ui-avatars.com/api/?name=${user.name}`
                  }
                  alt='user'
                  fill
                  className='object-cover'
                />
              </div>

              <span className='hidden sm:block font-semibold text-xs md:text-sm'>
                {user.name.split(' ')[0]}
              </span>
            </div>

            <button
              onClick={handleLogout}
              className='btn btn-xs md:btn-sm bg-red-500 hover:bg-red-600 text-white border-none rounded-full px-3 md:px-5 transition-all active:scale-95'
            >
              Logout
            </button>
          </div>
        ) : (
          <div className='flex gap-1 md:gap-2'>
            <Link
              href='/login'
              className='btn btn-xs md:btn-sm btn-outline border-emerald-500 text-emerald-500 rounded-full px-3 md:px-5 hover:bg-emerald-50'
            >
              Login
            </Link>

            <Link
              href='/register'
              className='btn btn-xs md:btn-sm bg-emerald-500 hover:bg-emerald-600 text-white border-none rounded-full px-3 md:px-5 transition-all active:scale-95'
            >
              Register
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
