import Smile from '@/components/svgr/Smile';
import PenTool from '@/components/svgr/PenTool';
import Contact from '@/components/svgr/Phone';

const menu = [
  {
    id: 'aboutUs',
    icon: (props) => <Smile {...props} />,
    title: 'About Us',
    url: '/',
  },
  {
    id: 'visionMision',
    icon: (props) => <PenTool {...props} />,
    title: 'About Us',
    url: '/aboutUs',
  },
  {
    id: 'contact',
    icon: (props) => <Contact {...props} />,
    title: 'Contact',
    url: '/contact',
  },
];

export default menu;
