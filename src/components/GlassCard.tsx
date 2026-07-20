import { forwardRef } from 'react';
import { useSpotlight } from '../lib/useSpotlight';

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  spotlight?: boolean;
  children: React.ReactNode;
}

/**
 * Frosted glass surface with layered border, hover glow, and an optional
 * cursor-following spotlight.
 */
const GlassCard = forwardRef<HTMLDivElement, GlassCardProps>(
  ({ spotlight = true, className = '', children, ...rest }, _ref) => {
    const { ref, onMouseMove } = useSpotlight<HTMLDivElement>();

    return (
      <div
        ref={ref}
        onMouseMove={spotlight ? onMouseMove : undefined}
        className={`glass-card ${spotlight ? 'spotlight' : ''} overflow-hidden ${className}`}
        {...rest}
      >
        {children}
      </div>
    );
  }
);

GlassCard.displayName = 'GlassCard';

export default GlassCard;
