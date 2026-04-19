import { useEffect, useRef, useState } from 'react';
import { quotes } from '../data';
import { scramble } from '../utils/scramble';

const FRAME_MS = 45;
const TOTAL_FRAMES = 40;

export function useScrambleDecode() {
  const [index, setIndex] = useState(() => Math.floor(Math.random() * quotes.length));
  const [displayed, setDisplayed] = useState(() => scramble(quotes[0], 0));
  const [fading, setFading] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const holdRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const target = quotes[index];
    let frame = 0;
    setFading(false);
    setDisplayed(scramble(target, 0));

    intervalRef.current = setInterval(() => {
      frame++;
      const locked = Math.floor((frame / TOTAL_FRAMES) * target.length);
      setDisplayed(scramble(target, locked));

      if (frame >= TOTAL_FRAMES) {
        clearInterval(intervalRef.current!);
        setDisplayed(target);

        holdRef.current = setTimeout(() => {
          setFading(true);
          setTimeout(() => {
            setIndex((i) => {
              let next = i;
              while (next === i) next = Math.floor(Math.random() * quotes.length);
              return next;
            });
          }, 500);
        }, 5000 + Math.random() * 5000);
      }
    }, FRAME_MS);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (holdRef.current) clearTimeout(holdRef.current);
    };
  }, [index]);

  return { displayed, fading };
}
