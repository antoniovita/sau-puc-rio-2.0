'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  FiUser,
  FiSettings,
  FiLogOut,
  FiBell,
  FiSearch
} from 'react-icons/fi';
import { FaBell, FaFolderClosed, FaGraduationCap, FaSteam, FaUser } from 'react-icons/fa6';
import { FaBars, FaBook, FaCog, FaHome } from 'react-icons/fa';

interface NavItem {
  label: string;
  href: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
}

const navItems: NavItem[] = [
  { label: 'Início', href: '/', icon: FaHome },
  { label: 'Disciplinas', href: '/profile', icon: FaFolderClosed },
  { label: 'Acadêmico', href: '/projects', icon: FaBook },
  { label: 'Graus', href: '/reports', icon: FaGraduationCap },
  { label: 'Mais', href: '/messages', icon: FaBars },
  { label: 'Notificações', href: '/notifications', icon: FaBell },
  { label: 'Configurações', href: '/settings', icon: FaCog },
];

const Sidebar: React.FC = () => {
  const pathname = usePathname();

  return (
    <>
      <div className="hidden lg:block fixed left-0 top-0 h-full w-64 bg-white shadow-xl border-r border-gray-200 z-40">

        <div className="flex items-center px-6 h-16  border-b border-gray-200 ">
            <div className='flex-row flex gap-2'>
                <h1 className='text-lg text-black mt-1'> <span className='font-bold mr-1 '> SAU. </span>PUC - Rio </h1>
            </div>
        </div>

        {/* Search bar */}
        <div className="p-4">
          <div className="relative">
            <FiSearch className="absolute focus:outline-none focus:ring-0 left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Buscar..."
              className="w-full pl-10 pr-4 py-2 text-sm bg-gray-100  rounded-lg focus:outline-none focus:ring-0 focus:border-gray-200"
            />
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-4">
          <ul className="space-y-1 px-3">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              const Icon = item.icon;
              
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`flex items-center space-x-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 group ${
                      isActive
                        ? 'bg-[#DEA02E] text-white shadow-md'
                        : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                    }`}
                  >
                    <Icon
                      size={20}
                      className={`${
                        isActive
                          ? 'text-white'
                          : 'text-gray-500 group-hover:text-gray-700'
                      } transition-colors`}
                    />
                    <span>{item.label}</span>
                    {isActive && (
                      <div className="ml-auto w-2 h-2 bg-white rounded-full" />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Bottom section */}
        <div className="border-t border-gray-200 p-4">
          
          {/* User profile */}
          <div className="flex items-center space-x-3 px-3 py-2 bg-[#DEA02E] rounded-lg  border-gray-200">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <FaUser size={16} className="text-[#DEA02E]" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-white truncate">
                João Silva
              </p>
            </div>
          </div>
          
          <button className="w-full mt-3 flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium text-red-600 hover:bg-red-50 transition-colors">
            <FiLogOut size={20} />
            <span>Sair</span>
          </button>
        </div>
      </div>

      {/* Mobile Bottom Navigation */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50">
        <nav className="flex items-center justify-around py-2">
          {navItems.slice(0, 5).map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;
            
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex flex-col items-center justify-center p-2 rounded-lg transition-all duration-200 ${
                  isActive
                    ? 'text-[#DEA02E]'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                <div className={`p-2 rounded-lg ${
                  isActive 
                    ? 'bg-[#DEA02E]/20' 
                    : 'hover:bg-gray-100'
                }`}>
                  <Icon
                    size={20}
                    className={isActive ? 'text-[#DEA02E]' : 'text-gray-500'}
                  />
                </div>
                <span className="text-xs mt-1 font-bold">
                  {item.label}
                </span>
              </Link>
            );
          })}
        </nav>
      </div>

    </>
  );
};

export default Sidebar;