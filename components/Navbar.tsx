"use client";

import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation';

const user = {};

const Navbar = () => {
    const router = useRouter();
    return (
        <header className='navbar'>
            <nav>
                <Link href="/">
                    <Image
                        src="/assets/icons/logo.svg"
                        alt="logo"
                        width={32}
                        height={32}
                    />
                    <h1>Let&apos;s Watch</h1>
                </Link>

                {user && (
                    <figure>
                        <button onClick={() => router.push('/profile/123456')} className='cursor-pointer'>
                            <Image
                                src="/assets/images/dummy2.svg"
                                alt="user avatar"
                                width={36}
                                height={36}
                                className='rounded-full aspect-square'
                            />
                        </button>
                        <button className='cursor-pointer'>
                            <Image
                                src="/assets/icons/logout2.svg"
                                alt="logout"
                                width={24}
                                height={24}
                                className='rotate-180'
                            />
                        </button>
                    </figure>
                )}
            </nav>
        </header>
    )
}

export default Navbar