import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';


export const client = createClient({
    projectId: '98i40s64',
    dataset: 'production',
    apiVersion: '2022-02-01',
    useCdn: true,
    token: 'skDb1GukO4fWDinAtIHY8gY3SwezU8KplIRO1f8MDXaKHKb4UHrPKQXCOR2MDtqlcZWi5ibcPWH0gCgZ7Fl9QJUqvB171jdIebPSH8gXCoPAYqnPUiCBlUeRPxJHoHA2U57RklU7vxj427XJf881TDGPY0r459pBYBxgfluS3NTUmQ6AQUqh'
});

const Builder = imageUrlBuilder(client);

export const urlFor = (source) => Builder.image(source);
