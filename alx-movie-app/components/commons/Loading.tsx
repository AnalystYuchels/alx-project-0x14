cat > components/commons/Loading.tsx <<'EOF'
import React from 'react';

const Loading: React.FC<{ size?: number; label?: string }> = ({ size = 24, label = 'Loading...' }) => (
  <div role="status" style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
    <svg width={size} height={size} viewBox="0 0 50 50" aria-hidden="true">
      <circle cx="25" cy="25" r="20" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeDasharray="31.415, 31.415" transform="rotate(-90 25 25)">
        <animateTransform attributeName="transform" type="rotate" from="0 25 25" to="360 25 25" dur="1s" repeatCount="indefinite" />
      </circle>
    </svg>
    <span style={{ position: 'absolute', left: '-9999px' }}>{label}</span>
  </div>
);

export default Loading;
EOF
