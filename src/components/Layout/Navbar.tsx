'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FC } from 'react';
import Container from '../Container';

const Navbar: FC = () => {
  const pathname = usePathname();

  const pathSegments = pathname.split('/').filter(Boolean);

  return (
    <nav className=" bg-[#1f5d88] p-4">
      <Container>
      <ul className="flex space-x-4 text-white ">
        <li>
          <Link href="/" className="hover:underline">
            Shop - Home
          </Link>
        </li>
        {pathSegments.map((segment, index) => {
          const path = `/${pathSegments.slice(0, index + 1).join('/')}`;
          return (
            <li key={path}>
              <Link href={path} className="hover:underline">
                {segment.charAt(0).toUpperCase() + segment.slice(1)}
              </Link>
            </li>
          );
        })}
      </ul>
      </Container>
    </nav>
  );
};

export default Navbar;
