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

  return (
    <nav className='navbar bg-white shadow-md px-4 md:px-10 sticky top-0 z-50' data-theme="light">
      {/* LEFT: LOGO */}
      <div className='navbar-start'>
        <Link href='/' className='flex items-center gap-2 group'>
          <div className="relative w-10 h-10 overflow-hidden rounded-full border-2 border-emerald-400 group-hover:scale-110 transition-transform">
            <Image
              src='/logo/logo.jpg'  
              alt='logo'
              fill
              className='object-cover'
            />
          </div>
          <span className='font-bold text-xl tracking-tight text-slate-800'>
            Summer<span className='text-emerald-500'>Store</span>
          </span>
        </Link>
      </div>

      {/* CENTER: LINKS */}
      <div className='navbar-center hidden md:flex'>
        <ul className='menu menu-horizontal px-1 font-semibold text-slate-600 gap-2'>
          <li><Link href='/' className="hover:text-emerald-500 transition-colors">Home</Link></li>
          <li><Link href='/products' className="hover:text-emerald-500 transition-colors">Products</Link></li>
          {user && <li><Link href='/my-profile' className="hover:text-emerald-500 transition-colors">My Profile</Link></li>}
        </ul>
      </div>

      {/* RIGHT: AUTH */}
      <div className='navbar-end gap-3'>
        {isPending ? (
          <span className="loading loading-spinner loading-sm text-emerald-500"></span>
        ) : user ? (
          <div className="flex items-center gap-3">
            {/* User Name (Desktop) */}
            <div className='hidden lg:flex flex-col items-end leading-tight'>
              <span className='font-bold text-sm text-slate-800'>{user.name}</span>
              <span className='text-[10px] text-slate-400 uppercase tracking-widest'>Member</span>
            </div>

            {/* User Avatar Dropdown */}
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar border border-emerald-100 ring ring-emerald-50 ring-offset-2">
                <div className="w-10 rounded-full relative">
                  <Image
                    src={user.image || 'https://ui-avatars.com/api/?name=' + user.name}
                    alt='user'
                    fill
                    className='object-cover'
                  />
                </div>
              </label>
              <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow-xl menu menu-sm dropdown-content bg-base-100 rounded-2xl w-52 border border-slate-100">
                <li className="p-2 font-bold text-slate-500 md:hidden border-b mb-1">{user.name}</li>
                <li><Link href='/my-profile'>My Profile</Link></li>
                <li><Link href='/orders'>My Orders</Link></li>
                <div className="divider my-1"></div>
                <li>
                  <button onClick={handleLogout} className='text-error font-bold hover:bg-error/10'>
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <Link href='/login' className='btn btn-sm btn-ghost font-bold text-slate-600 hover:text-emerald-500'>
              Login
            </Link>
            <Link href='/register' className='btn btn-sm bg-emerald-500 hover:bg-emerald-600 text-white border-none shadow-lg shadow-emerald-100 px-6 rounded-full'>
              Register
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}