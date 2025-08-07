cat > components/layout/Footer.tsx <<'EOF'
import React from 'react';

const Footer: React.FC = () => (
  <footer className="border-t">
    <div className="container mx-auto px-4 py-6 text-center text-sm">
      &copy; {new Date().getFullYear()} CineSeek. All rights reserved.
    </div>
  </footer>
);

export default Footer;
EOF
