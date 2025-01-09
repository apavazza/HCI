import 'server-only'

import contentfulClient from "@/lib/contentfulClient";
import { unstable_cache } from "next/cache"; // Replaced by 'use cache' directive in new version of Next.js
import { TypeNavigationSkeleton } from '@/content-types';

export const getMainNavigation = unstable_cache(async () => {
    // Check https://github.com/contentful/contentful.js/blob/master/ADVANCED.md#link-resolution
    // for more information on "withoutUnresolvableLinks".
    const data = await contentfulClient.withoutUnresolvableLinks.getEntries<TypeNavigationSkeleton>({
        content_type: 'navigation',
        query: 'Main Navigation',
        select: ['fields'],
    });

    return data.items[0];

}, ['navigation'], { revalidate: 60 * 60, tags: ['navigation'] });  