import { create } from 'zustand';
import Router from 'next/router';
import { toast } from 'react-toastify';
import { persist } from 'zustand/middleware';
import { Role } from 'types/enums';

interface AuthState {
  token?: string;
  role?: Role;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      logout: () => {
        set({}, true);
        Router.push('/').then(() => {
          toast.info('Logged out!');
        });
      },
    }),
    {
      name: 'auth',
    }
  )
);
