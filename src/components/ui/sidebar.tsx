import React from 'react';
import { useRouter } from 'next/router';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { 
  Users, 
  Settings, 
  Shield,
  Home,
  UserCheck
} from 'lucide-react';

interface SidebarProps {
  className?: string;
  currentUser: any;
  onLogout: () => void;
}

export function Sidebar({ className, currentUser, onLogout }: SidebarProps) {
  const router = useRouter();
  const currentPath = router.pathname;

  const sidebarItems = [
    {
      title: "Dashboard",
      icon: Home,
      href: "/dashboard",
      active: currentPath === "/dashboard"
    },
    {
      title: "User",
      icon: Users,
      href: "/dashboard/users",
      active: currentPath === "/dashboard/users"
    },
    {
      title: "Admin Requests",
      icon: UserCheck,
      href: "/dashboard/admin-requests",
      active: currentPath === "/dashboard/admin-requests"
    },
    {
      title: "Settings",
      icon: Settings,
      href: "/dashboard/settings",
      active: currentPath === "/dashboard/settings"
    }
  ];

  const handleNavigation = (href: string) => {
    router.push(href);
  };

  return (
    <div className={cn("pb-12", className)}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <div className="flex items-center space-x-2 px-4 py-2">
            <Shield className="h-6 w-6 text-purple-600" />
            <h2 className="text-lg font-semibold text-purple-600 dark:text-purple-400">
              Admin Panel
            </h2>
          </div>
          <div className="px-4 py-2">
            <div className="text-sm font-medium text-gray-900 dark:text-gray-100">
              {currentUser?.username}
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400">
              {currentUser?.role}
            </div>
          </div>
        </div>
        <div className="px-3 py-2">
          <div className="space-y-1">
            {sidebarItems.map((item) => (
              <Button
                key={item.title}
                variant={item.active ? "secondary" : "ghost"}
                className={cn(
                  "w-full justify-start",
                  item.active && "bg-purple-100 text-purple-900 dark:bg-purple-900 dark:text-purple-100"
                )}
                onClick={() => handleNavigation(item.href)}
              >
                <item.icon className="mr-2 h-4 w-4" />
                {item.title}
              </Button>
            ))}
          </div>
        </div>
      </div>
      <div className="px-3 py-2">
        <Button
          variant="outline"
          className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50 dark:text-red-400 dark:hover:text-red-300 dark:hover:bg-red-950"
          onClick={onLogout}
        >
          <Shield className="mr-2 h-4 w-4" />
          Logout
        </Button>
      </div>
    </div>
  );
}
