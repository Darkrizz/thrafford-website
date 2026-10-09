import { lazy, Suspense, useEffect, useState } from 'react';

const GradientScene = lazy(() => import('./GradientScene'));

/**
 * Slow-moving shader gradient behind every page (ruucm/shadergradient).
 * Colours are pale tints of the brand cobalt and teal on the light canvas, so text
 * contrast is unchanged. The static CSS gradient in global.css stays as the fallback
 * for reduced motion, no WebGL, and the first paint before this island loads.
 */
export default function GradientBackdrop() {
  const [enabled, setEnabled] = useState(false);
  const [ready, setReady] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const gl = document.createElement('canvas').getContext('webgl2') ?? document.createElement('canvas').getContext('webgl');
    if (reduced || !gl) return;
    setEnabled(true);

    // Stop rendering while the tab is hidden.
    const onVisibility = () => setVisible(document.visibilityState === 'visible');
    document.addEventListener('visibilitychange', onVisibility);
    const t = window.setTimeout(() => setReady(true), 900);
    return () => {
      document.removeEventListener('visibilitychange', onVisibility);
      window.clearTimeout(t);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div className={`gradient-backdrop${ready ? ' is-ready' : ''}`} aria-hidden="true">
      <Suspense fallback={null}>
        <GradientScene animate={visible} />
      </Suspense>
    </div>
  );
}
