import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText';
import { ScrambleTextPlugin } from 'gsap/ScrambleTextPlugin';

import './ScrambledText.css';

gsap.registerPlugin(SplitText, ScrambleTextPlugin);

const ScrambledText = ({
  radius = 100,
  duration = 1.2,
  speed = 0.5,
  scrambleChars = '.:',
  className = '',
  style = {},
  children
}) => {
  const rootRef = useRef(null);
  const charsRef = useRef([]);

  useEffect(() => {
    if (!rootRef.current) return;

    const p = rootRef.current.querySelector('p');
    if (!p) return;

    const split = SplitText.create(p, {
      type: 'chars',
      charsClass: 'char'
    });
    charsRef.current = split.chars;

    charsRef.current.forEach(c => {
      gsap.set(c, {
        display: 'inline-block',
        attr: { 'data-content': c.innerHTML }
      });
    });

    // One-time scramble animation on mount (no hover)
    const tl = gsap.timeline();
    const stagger = 0.02;
    charsRef.current.forEach((c, i) => {
      tl.to(
        c,
        {
          duration,
          scrambleText: {
            text: c.dataset.content || '',
            chars: scrambleChars,
            speed
          },
          ease: 'none'
        },
        i * stagger
      );
    });

    return () => {
      try {
        tl.kill();
      } catch (e) {
        // ignore
      }
      try {
        split.revert();
      } catch (err) {
        // ignore
      }
    };
    // Run once on mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div ref={rootRef} className={`text-block ${className}`} style={style}>
      <p>{children}</p>
    </div>
  );
};

export default ScrambledText;
