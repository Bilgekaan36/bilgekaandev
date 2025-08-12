'use client';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { AvatarGroup, AvatarGroupTooltip } from '../ui/avatar-group';

const AVATARS = [
  {
    src: '/avatars/react-logo-v.png',
    fallback: 'React',
    tooltip: 'React',
  },
  // {
  //   src: '/avatars/next-logo.png',
  //   fallback: 'Next.js',
  //   tooltip: 'Next.js',
  // },
  {
    src: '/avatars/nodejs-logo.webp',
    fallback: 'Nodejs',
    tooltip: 'Nodejs',
  },
  {
    src: '/avatars/vuejs-logo.png',
    fallback: 'Vue.js',
    tooltip: 'Vue.js',
  },
  {
    src: '/avatars/typescript-logo.png',
    fallback: 'TypeScript',
    tooltip: 'TypeScript',
  },
  {
    src: '/avatars/psql-logo.jpg',
    fallback: 'PostgreSQL',
    tooltip: 'PostgreSQL',
  },
];

export const AvatarGroupComponent = () => {
  return (
    <AvatarGroup variant='motion' className='h-12 -space-x-3'>
      {AVATARS.map((avatar, index) => (
        <Avatar key={index} className='size-12 border-3 border-background'>
          <AvatarImage src={avatar.src} />
          <AvatarFallback>{avatar.fallback}</AvatarFallback>
          <AvatarGroupTooltip>
            <p>{avatar.tooltip}</p>
          </AvatarGroupTooltip>
        </Avatar>
      ))}
    </AvatarGroup>
  );
};
