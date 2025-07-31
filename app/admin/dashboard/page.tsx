import StatsCard from './DashboardStats';
import { Package, Wallet, Tags } from 'lucide-react';

export default function DashboardPage() {
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <StatsCard title="Stock Product" value="1,234" icon={<Package />} />
        <StatsCard title="Pengeluaran" value="$5,678" icon={<Wallet />} />
        <StatsCard title="Pemasukan" value="$5,678" icon={<Wallet />} />
        <StatsCard title="Kategori" value="456" icon={<Tags />} />
      </div>
    </section>
  );
}