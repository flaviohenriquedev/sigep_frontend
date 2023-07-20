import tw from 'tailwind-styled-components';

export const Container = tw.div`
    grid
    grid-cols-4
    mt-20
    gap-6
    bg-blue-200
`;

export const Root = tw.div`
    flex
    bg-red-500
    items-center
    justify-between
    group
    rounded-md
    h-20
    w-60
`;

export const Info = tw.div`
    flex
    bg-white
    w-40
    h-full
    items-center
    pl-2
    rounded-md
    hover:cursor-pointer
`;

export const Icon = tw.div`
    text-gray-400
    group-hover: transform
    
`;
