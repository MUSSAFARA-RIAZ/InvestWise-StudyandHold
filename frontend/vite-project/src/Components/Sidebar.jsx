import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '@fontsource/roboto'; // Example font, you can choose another font
import {
  Menu as MenuIcon,
  Home as HomeIcon,
  Explore as ExploreIcon,
  Mail as MailIcon,
  Description as DescriptionIcon,
  
} from '@mui/icons-material';
import '../../src/index.css';

const Sidebar = () => {
  const useMediaQuery = (query) => {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
      const media = window.matchMedia(query);
      if (media.matches !== matches) {
        setMatches(media.matches);
      }
      const listener = () => setMatches(media.matches);
      window.addEventListener("resize", listener);
      return () => window.removeEventListener("resize", listener);
    }, [matches, query]);

    return matches;
  };

  const navigate = useNavigate();

  let menuItems = [
    { name: "Invest Wise", icon: <MenuIcon />, path:"/" },
    { name: "ETFKDE", icon: <HomeIcon />, path: "/home" },
   
    { name: "ETFPlotTime", icon: <MailIcon />, path: "/messages" },
    { name: "ETFHistrogram", icon: <DescriptionIcon />, path: "/resources" },
    { name: "GoogleKDE", icon: <DescriptionIcon />, path: "/google" },
    { name: "GooglePlotTime", icon: <ExploreIcon />, path: "/googleplottime" },
    {name:"GoogleHistrogram", icon: <ExploreIcon />, path: "/googlehistrogram"},
    {name:"AppleKDE", icon: <ExploreIcon />, path: "/apple"},
    {name:"appleHistrogram", icon: <ExploreIcon />, path: "/applehistrogram"},
    {name:"applePlotTime", icon: <ExploreIcon />, path: "/applePlotTime"},


    // { name: "Starred", icon: <StarIcon />, path: "/starred" },
    // { name: "Settings", icon: <SettingsIcon />, path: "/settings" },
    { name: "", icon: null, color: null, rotate: null, path: "" },  // Removed logout item and left it blank
  ];

  const [hovered, setHovered] = useState(null);
  const [active, setActive] = useState(1);
  const [animate, setAnimate] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const changeSmall = useMediaQuery("(max-height: 550px)");
  let delay = 1;

  useEffect(() => {
    setAnimate(true);
    let timer = setTimeout(() => setAnimate(false), delay * 1000);
    return () => clearTimeout(timer);
  }, [active, delay]);

  return (
    <div className={`sidebar ${expanded && "expanded"}`} style={{ fontFamily: 'Roboto, sans-serif' }}>
      {menuItems.map((item, index) => {
        let middle = !(index === 0 || index === menuItems.length - 1);
        return (
          <div
            className={`boxicon-container ${expanded && "expanded-boxicon-container"}`}
            onMouseEnter={() => middle && setHovered(index)}
            onMouseLeave={() => middle && setHovered(null)}
            onClick={() => {
              if (middle) setActive(index);
              if (index === 0) setExpanded(!expanded);
              navigate(item.path); 
              console.log("ite",item.path) // Add navigation
            }}
            key={index}
          >
       
            <div
              className={`icon ${middle && "boxicon"} ${!middle && "first-and-last-trash-fix"} ${active === index && "active"}`}
              style={{
                fontSize: changeSmall ? "20px" : "24px",
                color: hovered === index || active === index ? "white" : item.color,
                transform: item.rotate ? `rotate(${item.rotate}deg)` : undefined,
              }}
            >
              {item.icon}
            </div>
            <p className={`description ${expanded && "show-description"} ${active === index && "active-description"}`}>
              {item.name}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Sidebar;
