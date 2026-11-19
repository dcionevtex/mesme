'use client';

import Link from 'next/link';
import {useId, useRef, useState} from 'react';

export type NavigationItem = {href: string; label: string};

export function MobileMenu({items, labels}: {
  items: NavigationItem[];
  labels: {open: string; close: string; navigation: string};
}) {
  const [open, setOpen] = useState(false);
  const button = useRef<HTMLButtonElement>(null);
  const id = useId();

  return (
    <div
      className="mobile-menu"
      onKeyDown={(event) => {
        if (open && event.key === 'Escape') {
          event.preventDefault();
          setOpen(false);
          button.current?.focus();
        }
      }}
    >
      <button
        ref={button}
        className="menu-toggle"
        type="button"
        aria-label={open ? labels.close : labels.open}
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen(!open)}
      >
        <span className="menu-icon" aria-hidden="true" />
      </button>
      <nav id={id} className="mobile-panel" aria-label={labels.navigation} hidden={!open}>
        {items.map(({href, label}) => (
          <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>
        ))}
      </nav>
    </div>
  );
}
