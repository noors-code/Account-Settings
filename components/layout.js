import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import {Home,BookOpen,Trophy,User as UserIcon,Settings,} from 'lucide-react';

export default function Layout({ children }) {
  const router = useRouter();
  const { pathname } = router;

  
  const tabs = [
  
    { href: '/', label: 'Account Settings' },
  ];


  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentPassword && newPassword && confirmPassword) {
      setShowSuccess(true);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 flex">
    
      <aside className="w-64 h-screen bg-white shadow p-4">
        <h1 className="mb-8 text-2xl font-bold">LinguLeap</h1>
        <ul className="space-y-2">
          <li className="flex items-center space-x-2 text-gray-700     
            hover:bg-green-50 hover:text-black          
            p-2 rounded cursor-pointer transition-colors duration-150">
            <Home size={20} />
            <span>Home</span>
          </li>
          <li className="flex items-center space-x-2 text-gray-700     
            hover:bg-green-50 hover:text-black          
            p-2 rounded cursor-pointer transition-colors duration-150">
            <BookOpen size={20} />
            <span>Learn</span>
          </li>
          <li className="flex items-center space-x-2 text-gray-700     
            hover:bg-green-50 hover:text-black          
            p-2 rounded cursor-pointer transition-colors duration-150">
            <Trophy size={20} />
            <span>Challenge</span>
          </li>
          <li className="flex items-center space-x-2 text-gray-700     
            hover:bg-green-50 hover:text-black          
            p-2 rounded cursor-pointer transition-colors duration-150">
            <UserIcon size={20} />
            <span>Profile</span>
          </li>
          <li className="flex items-center space-x-2 text-gray-700     
            hover:bg-green-50 hover:text-black          
            p-2 rounded cursor-pointer transition-colors duration-150">
            <Settings size={20} />
            <span>Settings</span>
          </li>
        </ul>
      </aside>

     
      <div className="flex-1 flex flex-col">
       
        <header className="border-b bg-white">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
            <h1 className="text-2xl font-bold">Settings</h1>

           
            <div className="flex items-center gap-3">
              <Image
                src="/man.jpg"
                alt="User Avatar"
                width={64}
                height={64}
                className="rounded-full"
              />
              <div className="text-right leading-tight">
                <p className="font-medium">Michael Jordan</p>
                <p className="text-sm text-gray-500">micheal@gmail.com</p>
              </div>
            </div>
          </div>

          
          <nav className="border-t">
            <ul className="mx-auto flex max-w-6xl gap-10 px-6">
              {tabs.map((tab) => {
                const isActive = pathname.startsWith(tab.href);
                return (
                  <li key={tab.href}>
                    <Link href={tab.href}>
                      <span
                        className={`block border-b-2 py-4 text-sm font-medium transition-colors duration-150 ${
                          isActive
                            ? 'border-green-300 text-gray-900'
                            : 'border-transparent text-gray-500 hover:text-gray-700'
                        }`}
                      >
                        {tab.label}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </header>

       
        <main className="mx-auto max-w-6xl flex-1 px-6 py-8">
         
          <section className="mb-8">
            <h2 className="text-lg font-semibold">Change Password</h2>
            <p className="mt-1 text-sm text-gray-600">
              Your password must be a strong combination of letters, alphabets and numbers.
            </p>
          </section>

         
          <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl">
           
            <div>
              <label htmlFor="current-password" className="mb-2 block text-sm font-medium text-gray-700">
                Current Password
              </label>
              <input
                id="current-password"
                type="password"
                placeholder="***********"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                className="w-full rounded-md border border-gray-300 p-3 focus:border-green-400 focus:ring-green-200"
              />
            </div>

           
            <div>
              <label htmlFor="new-password" className="mb-2 block text-sm font-medium text-gray-700">
                New Password
              </label>
              <input
                id="new-password"
                type="password"
                placeholder="Enter New Password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full rounded-md border border-gray-300 p-3 focus:border-green-400 focus:ring-green-200"
              />
            </div>

            
            <div>
              <label htmlFor="confirm-password" className="mb-2 block text-sm font-medium text-gray-700">
                Confirm Password
              </label>
              <input
                id="confirm-password"
                type="password"
                placeholder="Re-enter your Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full rounded-md border border-gray-300 p-3 focus:border-green-400 focus:ring-green-200"
              />
            </div>

           
            <div className="flex justify-end gap-4 pt-4">
              <button
            type="button"
            onClick={() => router.back()}
            className="rounded-lg border border-gray-300 px-6 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 active:border-gray-500"
              >
                Back
              </button>
              <button
                type="submit"
                className="rounded-lg border border-green-300 bg-green-100 px-6 py-2 text-sm font-medium text-gray-900 shadow-inner hover:bg-green-200 focus:outline-none focus:ring-2 focus:ring-green-400 active:border-green-600"
              >
                Save
              </button>
            </div>
          </form>

         
          {showSuccess && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
              <div className="w-full max-w-sm rounded-lg bg-white p-6 text-center shadow-lg">
                <h3 className="mb-4 text-lg font-medium text-gray-900">Successfully saved!</h3>
                <button
                  onClick={() => setShowSuccess(false)}
                  className="rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 active:border-gray-500"
                >
                  Back
                </button>
              </div>
            </div>
          )}

        
          {children}
        </main>
      </div>
    </div>
  );
}
