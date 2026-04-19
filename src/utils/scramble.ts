const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!<>-_\\/[]{}=+*^?#@$';

export const scramble = (target: string, locked: number): string =>
  target
    .split('')
    .map((ch, i) =>
      ch === ' ' ? ' ' : i < locked ? ch : CHARS[Math.floor(Math.random() * CHARS.length)]
    )
    .join('');
