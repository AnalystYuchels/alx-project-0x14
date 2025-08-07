cat > components/commons/Button.tsx <<'EOF'
import React from 'react';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'ghost';
  className?: string;
};

const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', className = '', ...rest }) => {
  const base = 'px-4 py-2 rounded focus:outline-none inline-flex items-center gap-2';
  const variantClass =
    variant === 'primary' ? 'bg-blue-600 text-white hover:bg-blue-700' :
    variant === 'secondary' ? 'bg-gray-200 text-gray-900 hover:bg-gray-300' :
    'bg-transparent text-inherit';
  return (
    <button className={`${base} ${variantClass} ${className}`} {...rest}>
      {children}
    </button>
  );
};

export default Button;
EOF
