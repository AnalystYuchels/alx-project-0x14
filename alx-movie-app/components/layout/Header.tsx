cat > components/layout/Header.tsx <<'EOF'
import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => (
  <header className="border-b">
    <div className="container mx-auto px-4 py-4 flex items-center justify-between">
      <Link href="/">CineSeek</Link>
      <nav>
        <Link href="/movies">Movies</Link>
      </nav>
    </div>
  </header>
);

export default Header;
EOF
