cat > components/layout/Button.tsx <<'EOF'
import React from 'react';
import CommonButton from '../commons/Button';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'ghost';
};

const Button: React.FC<Props> = ({ children, variant, ...rest }) => (
  <CommonButton variant={variant} {...rest}>
    {children}
  </CommonButton>
);

export default Button;
EOF
