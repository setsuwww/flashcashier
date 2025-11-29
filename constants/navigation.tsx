import { House, Calculator, Package, Tags, History, FolderOutput } from 'lucide-react';

export const menuItems = [
  { icon: <House size={ 20} strokeWidth = { 1.75} />, label: 'Dashboard', href: '/admin/dashboard' },
  { icon: <Calculator size={ 20 } strokeWidth = { 1.75} />, label: 'Transaction', href: '/admin/dashboard/transaction' },
  { icon: <Package size={ 20 } strokeWidth = { 1.75} />, label: 'Products', href: '/admin/dashboard/product' },
  { icon: <Tags size={ 20 } strokeWidth = { 1.75} />, label: 'Categories', href: '/admin/dashboard/category' },
  { icon: <History size={ 20 } strokeWidth = { 1.75} />, label: 'Histories', href: '/admin/dashboard/history' },
  { icon: <FolderOutput size={ 20 } strokeWidth = { 1.75} />, label: 'Reports', href: '/admin/dashboard/report' },
];