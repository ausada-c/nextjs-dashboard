import localFont from 'next/font/local'
import { Inter, Lusitana } from 'next/font/google';

export const inter = Inter({ subsets: ['latin'] });

export const lusitana = Lusitana({
    weight: ['400', '700'],
    subsets: ['latin'],
});

export const sarabun = localFont({
    src: [
        {
            path: '../../public/fonts/Sarabun-Regular.ttf',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../../public/fonts/Sarabun-Bold.ttf',
            weight: '700',
            style: 'normal',
        }
    ],
})
