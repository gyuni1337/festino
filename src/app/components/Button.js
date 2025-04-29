import React from 'react';
import Link from 'next/link';

export default function Button({ href, text, onClick}) {

  return (
    <Link onClick={onClick} href={href} legacyBehavior>
      <a className="px-10 py-2 rounded-xl border shadow-xl hover:text-white hover:border-white border-text text-text">
        {text}
      </a>
    </Link>
  );
}
