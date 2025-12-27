"use client";

import { ICONS } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import DropdownList from './DropdownList'
import { usePathname, useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation'
import { updateURLParams } from '@/lib/utils'
import { filterOptions } from "@/constants";

const Header = ({ subHeader, title, userImg }: SharedHeaderProps) => {

    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const [searchQuery, setSearchQuery] = useState(
        searchParams.get("query") || ""
    );
    const [selectedFilter, setSelectedFilter] = useState(
        searchParams.get("filter") || "Most Recent"
    );

    useEffect(() => {
        setSearchQuery(searchParams.get("query") || "");
        setSelectedFilter(searchParams.get("filter") || "Most Recent");
    }, [searchParams]);

    useEffect(() => {
        const debounceTimer = setTimeout(() => {
            if (searchQuery !== searchParams.get("query")) {
                const url = updateURLParams(
                    searchParams,
                    { query: searchQuery || null },
                    pathname
                );
                router.push(url);
            }
        }, 500);
        return () => clearTimeout(debounceTimer);
    }, [searchQuery, searchParams, pathname, router]);

    const handleFilterChange = (filter: string) => {
        setSelectedFilter(filter);
        const url = updateURLParams(
            searchParams,
            { filter: filter || null },
            pathname
        );
        router.push(url);
    };

    const renderFilterTrigger = () => (
        <div className="filter-trigger">
            <figure>
                <Image
                    src="/assets/icons/hamburger.svg"
                    alt="hamburger"
                    width={14}
                    height={14}
                />
                <span>{selectedFilter}</span>
            </figure>
            <Image
                src="/assets/icons/arrow-down.svg"
                alt="arrow-down"
                width={20}
                height={20}
            />
        </div>
    );

    return (
        <header className='header'>
            <section className="header-container">
                <div className="details">
                    {
                        userImg && (
                            <Image
                                src={userImg || '/assets/images/dummy.jpg'}
                                alt="user avatar"
                                width={66}
                                height={66}
                                className='rounded-full'
                            />
                        )
                    }

                    <article>
                        <p>{subHeader}</p>
                        <h1>{title}</h1>
                    </article>
                </div>

                <aside>
                    <Link href="/upload" className=''>
                        <Image
                            src="/assets/icons/upload.svg"
                            alt="upload icon"
                            width={16}
                            height={16}
                        />
                        <span>Upload a video</span>
                    </Link>
                    <div className='record'>
                        <button className="primary-btn">
                            <Image
                                src={ICONS.record}
                                alt="record icon"
                                width={16}
                                height={16}
                            />
                            <span>Record a video</span>
                        </button>
                    </div>
                </aside>
            </section>

            <section className="search-filter">
                <div className="search">
                    <input
                        type="text"
                        placeholder='Search for videos, tags, folders...'
                    />
                    <Image
                        src="/assets/icons/search.svg"
                        alt="search icon"
                        width={16}
                        height={16}
                    />
                </div>

                <DropdownList
                    options={filterOptions}
                    selectedOption={selectedFilter}
                    onOptionSelect={handleFilterChange}
                    triggerElement={renderFilterTrigger()}
                />
            </section>
        </header>
    )
}

export default Header