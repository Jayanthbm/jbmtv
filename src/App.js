import React, { useEffect, useState } from "react";
import "./App.css";

const shortKeys = {
  1: "https://astro-cricstreaming.vercel.app",
  2: "https://star1-cricstreaming.vercel.app",
  3: "http://localhost:5001/play/162",
  4: "http://localhost:5001/play/1984",
  5: "https://willow-cricstreaming.vercel.app",
  6: "https://tencric-cricstreaming.vercel.app",
  7: "http://localhost:5001/play/891",
  8: "http://localhost:5001/play/204",
  9: "https://livesportsclub.me/hls/tata/play.php?id=246",
  Q: "http://localhost:5001/play/757",
  W: "http://localhost:5001/play/1632",
  E: "https://livesportsclub.me/hls/tata/play.php?id=467",
  R: "http://localhost:5001/play/901",
  T: "http://localhost:5001/play/744",
  Y: "http://localhost:5001/play/1245",
  U: "http://localhost:5001/play/743",
  I: "http://localhost:5001/play/773",
  O: "http://localhost:5001/play/678",
  P: "http://localhost:5001/play/1632",
  "[": "http://localhost:5001/play/785",
  "]": "http://localhost:5001/play/1633",
  A: "http://localhost:5001/play/896",
  S: "http://localhost:5001/play/1209",
  D: "http://localhost:5001/play/894",
  F: "http://localhost:5001/play/895",
  G: "http://localhost:5001/play/748",
  H: "http://localhost:5001/play/803",
  J: "http://localhost:5001/play/845",
  K: "http://localhost:5001/play/847",
  L: "http://localhost:5001/play/2256",
  ";": "http://localhost:5001/play/707",
  "'": "http://localhost:5001/play/417",
  "\\": "http://localhost:5001/play/419",
  Z: "http://localhost:5001/play/897",
  X: "https://livesportsclub.me/hls/tata/play.php?id=516",
  C: "http://localhost:5001/play/1354",
  V: "http://localhost:5001/play/899",
  B: "https://livesportsclub.me/hls/tata/play.php?id=387",
  N: "https://livesportsclub.me/hls/tata/play.php?id=388",
  M: "http://localhost:5001/play/1363",
  ",": "http://localhost:5001/play/898",
  ".": "http://localhost:5001/play/252",
  "/": "http://localhost:5001/play/692",
};

const kannadaChannels = [
  {
    name: "Colors Kannada",
    image: "http://localhost:5001/jtvimage/Colors_Kannada_HD.png",
    url: "http://localhost:5001/play/757",
    shortCut: "Q",
  },
  {
    name: "Zee Kannada",
    image: "http://localhost:5001/jtvimage/Zee_Kannada_HD.png",
    url: "http://localhost:5001/play/1632",
    shortCut: "W",
  },
  {
    name: "Star Suvarna",
    image:
      "https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11816-j9kz224o-v1/imageContent-11816-j9kz224o-m1.png",
    url: "https://livesportsclub.me/hls/tata/play.php?id=467",
    shortCut: "E",
  },
  {
    name: "Udaya",
    image: "http://localhost:5001/jtvimage/Udaya_HD.png",
    url: "http://localhost:5001/play/901",
    shortCut: "R",
  },
  {
    name: "Udaya Music",
    image: "http://localhost:5001/jtvimage/Udaya_Music.png",
    url: "http://localhost:5001/play/744",
    shortCut: "T",
  },
  {
    name: "Sakkat",
    image: "http://localhost:5001/jtvimage/Sakkat.png",
    url: "http://localhost:5001/play/1245",
    shortCut: "Y",
  },
  {
    name: "Raj Music",
    image: "http://localhost:5001/jtvimage/Raj_Music_Kannada.png",
    url: "http://localhost:5001/play/743",
    shortCut: "U",
  },

  {
    name: "Public Music",
    image: "http://localhost:5001/jtvimage/Public_Music.png",
    url: "http://localhost:5001/play/773",
    shortCut: "I",
  },

  {
    name: "Udaya Movies",
    image: "http://localhost:5001/jtvimage/Udaya_Movies.png",
    url: "http://localhost:5001/play/678",
    shortCut: "O",
  },
  {
    name: "Colors Cinema",
    image: "http://localhost:5001/jtvimage/Colors_Kannada_Cinema.png",
    url: "http://localhost:5001/play/1632",
    shortCut: "P",
  },
  {
    name: "Colors Super",
    image: "http://localhost:5001/jtvimage/Colors_Super.png",
    url: "http://localhost:5001/play/785",
    shortCut: "[",
  },
  {
    name: "Public Movies",
    image: "http://localhost:5001/jtvimage/Public_Movies.png",
    url: "http://localhost:5001/play/1633",
    shortCut: "]",
  },
  {
    name: "Zee Picchar",
    image: "http://localhost:5001/jtvimage/Zee_Picchar_HD.png",
    url: "http://localhost:5001/play/1746",
  },
  {
    name: "Suvarna Plus",
    image:
      "https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-12038-j9o0554o-v2/imageContent-12038-j9o0554o-m2.png",
    url: "https://livesportsclub.me/hls/tata/play.php?id=540",
  },
  {
    name: "Udaya Comedy",
    image: "http://localhost:5001/jtvimage/Udaya_Comedy.png",
    url: "http://localhost:5001/play/733",
  },
  {
    name: "Kasthuri",
    image:
      "https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-822-j5m8ivjs-v1/imageContent-822-j5m8ivjs-m1.png",
    url: "https://livesportsclub.me/hls/tata/play.php?id=196",
  },
];

const tamilChannels = [
  {
    name: "Sun Tv",
    image: "http://localhost:5001/jtvimage/Sun_TV_HD.png",
    url: "http://localhost:5001/play/896",
    shortCut: "A",
  },
  {
    name: "Kalaingar TV",
    image: "http://localhost:5001/jtvimage/Kalaignar_TV.png",
    url: "http://localhost:5001/play/1209",
    shortCut: "S",
  },
  {
    name: "KTV",
    image: "http://localhost:5001/jtvimage/KTV_HD.png",
    url: "http://localhost:5001/play/894",
    shortCut: "D",
  },
  {
    name: "Sun Music",
    image: "http://localhost:5001/jtvimage/Sun_Music_HD.png",
    url: "http://localhost:5001/play/895",
    shortCut: "F",
  },
  {
    name: "Raj Musix",
    image: "http://localhost:5001/jtvimage/Raj_Musix.png",
    url: "http://localhost:5001/play/748",
    shortCut: "G",
  },
  {
    name: "Tunes 6",
    image: "http://localhost:5001/jtvimage/Tunes_6.png",
    url: "http://localhost:5001/play/803",
    shortCut: "H",
  },
  {
    name: "Mk Music",
    image: "http://localhost:5001/jtvimage/MK_Music.png",
    url: "http://localhost:5001/play/845",
    shortCut: "J",
  },
  {
    name: "MK TV",
    image: "http://localhost:5001/jtvimage/MK_TV.png",
    url: "http://localhost:5001/play/847",
    shortCut: "K",
  },
  {
    name: "Zee Thirai",
    image: "http://localhost:5001/jtvimage/Zee_Thirai.png",
    url: "http://localhost:5001/play/2256",
    shortCut: "L",
  },
  {
    name: "Raj Tv",
    image: "http://localhost:5001/jtvimage/Raj_TV.png",
    url: "http://localhost:5001/play/707",
    shortCut: ";",
  },
  {
    name: "J Movies",
    image: "http://localhost:5001/jtvimage/J_Movies.png",
    url: "http://localhost:5001/play/417",
    shortCut: "'",
  },
  {
    name: "Jaya Tv",
    image: "http://localhost:5001/jtvimage/Jaya_TV_HD.png",
    url: "http://localhost:5001/play/419",
    shortCut: "\\",
  },
  {
    name: "Colors",
    image: "http://localhost:5001/jtvimage/Colors_Tamil_HD.png",
    url: "http://localhost:5001/play/429",
  },
  {
    name: "Zee",
    image: "http://localhost:5001/jtvimage/Zee_Tamil_HD.png",
    url: "http://localhost:5001/play/1356",
  },
  {
    name: "Adithya",
    image: "http://localhost:5001/jtvimage/Adithya_TV.png",
    url: "http://localhost:5001/play/709",
  },
  {
    name: "Jaya Max",
    image: "http://localhost:5001/jtvimage/Jaya_Max.png",
    url: "http://localhost:5001/play/420",
  },
  {
    name: "Sun Life",
    image: "http://localhost:5001/jtvimage/Sun_Life.png",
    url: "http://localhost:5001/play/682",
  },
  {
    name: "Vijay",
    image:
      "https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11909-j9l52epk-v2/imageContent-11909-j9l52epk-m4.png",
    url: "https://livesportsclub.me/hls/tata/play.php?id=496",
  },
  {
    name: "Isaiaruvi",
    image:
      "https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-24578-jgotgry0-v1/imageContent-24578-jgotgry0-m1.png",
    url: "https://livesportsclub.me/hls/tata/play.php?id=647",
  },
  {
    name: "Murasu",
    image:
      "https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11616-j9k04eo0-v1/imageContent-11616-j9k04eo0-m1.png",
    url: "https://livesportsclub.me/hls/tata/play.php?id=411",
  },
  {
    name: "Mega Musiq",
    image:
      "https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11583-j9jype8w-v3/imageContent-11583-j9jype8w-m3.png",
    url: "https://livesportsclub.me/hls/tata/play.php?id=400",
  },
];

const teluguChannels = [
  {
    name: "Gemini",
    image: "http://localhost:5001/jtvimage/Gemini_TV_HD.png",
    url: "http://localhost:5001/play/897",
    shortCut: "Z",
  },
  {
    name: "Star Maa",
    image:
      "https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-25361-jhsvr3nc-v1/imageContent-25361-jhsvr3nc-m1.png",
    url: "https://livesportsclub.me/hls/tata/play.php?id=516",
    shortCut: "X",
  },
  {
    name: "Zee Telugu",
    image: "http://localhost:5001/jtvimage/Zee_Telugu_HD.png",
    url: "http://localhost:5001/play/1354",
    shortCut: "C",
  },
  {
    name: "Gemini Movies",
    image: "http://localhost:5001/jtvimage/Gemini_Movies_HD.png",
    url: "http://localhost:5001/play/899",
    shortCut: "V",
  },
  {
    name: "Maa Movies",
    image:
      "https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-18348-jcqpx9ns-v1/imageContent-18348-jcqpx9ns-m1.PNG",
    url: "https://livesportsclub.me/hls/tata/play.php?id=387",
    shortCut: "B",
  },
  {
    name: "Maa Gold",
    image:
      "https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11553-j9julvag-v3/imageContent-11553-j9julvag-m6.png",
    url: "https://livesportsclub.me/hls/tata/play.php?id=388",
    shortCut: "N",
  },

  {
    name: "Zee Cinemalu",
    image: "http://localhost:5001/jtvimage/Zee_Cinemalu_HD.png",
    url: "http://localhost:5001/play/1363",
    shortCut: "M",
  },
  {
    name: "Gemini Music",
    image: "http://localhost:5001/jtvimage/Gemini_Music_HD.png",
    url: "http://localhost:5001/play/898",
    shortCut: ",",
  },

  {
    name: "ETV Cinema",
    image: "http://localhost:5001/jtvimage/ETV_Cinema.png",
    url: "http://localhost:5001/play/252",
    shortCut: ".",
  },

  {
    name: "ETV Plus",
    image: "http://localhost:5001/jtvimage/ETV_Plus.png",
    url: "http://localhost:5001/play/692",
    shortCut: "/",
  },

  {
    name: "Raj Music",
    image: "http://localhost:5001/jtvimage/Raj_Music_Telugu.png",
    url: "http://localhost:5001/play/737",
    shortCut: "",
  },
  {
    name: "Gemini Comedy",
    image: "http://localhost:5001/jtvimage/Gemini_Comedy.png",
    url: "http://localhost:5001/play/729",
    shortCut: "",
  },
  {
    name: "ETV HD",
    image: "http://localhost:5001/jtvimage/ETV_HD.png",
    url: "http://localhost:5001/play/1973",
    shortCut: "",
  },
];

const sportsChannels = [
  {
    name: "Astro Cricket",
    image:
      "https://divign0fdw3sv.cloudfront.net/Images/ChannelLogo/contenthub/197_144.png",
    url: "https://astro-cricstreaming.vercel.app",
    shortCut: "1",
  },
  {
    name: "Star Sports 1",
    image:
      "https://img10.hotstar.com/image/upload/f_auto,q_90,w_1080/sources/r1/cms/prod/4942/1424942-a-6e211260a748",
    url: "https://star1-cricstreaming.vercel.app",
    shortCut: "2",
  },
  {
    name: "Sony Ten 1",
    image: "http://localhost:5001/jtvimage/Ten_HD.png",
    url: "http://localhost:5001/play/162",
    shortCut: "3",
  },
  {
    name: "Sports18 HD",
    image: "http://localhost:5001/jtvimage/Sports18_1_HD.png",
    url: "http://localhost:5001/play/1984",
    shortCut: "4",
  },
  {
    name: "Willow Cricket",
    image: "https://willowimages.s3.amazonaws.com/willowblack_265x60.png",
    url: "https://willow-cricstreaming.vercel.app",
    shortCut: "5",
  },
  {
    name: "Ten Sports",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/1/12/Ten_Sports_Logo.png/250px-Ten_Sports_Logo.png",
    url: "https://tencric-cricstreaming.vercel.app",
    shortCut: "6",
  },
  {
    name: "Sony Ten 2",
    image: "http://localhost:5001/jtvimage/Ten2_HD.png",
    url: "http://localhost:5001/play/891",
    shortCut: "7",
  },

  {
    name: "DD Sports",
    image: "http://localhost:5001/jtvimage/DD_Sports.png",
    url: "http://localhost:5001/play/204",
    shortCut: "8",
  },
  {
    name: "Star Sports Select 1",
    image:
      "https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-7891-j75vq7k0-v1/imageContent-7891-j75vq7k0-m1.PNG",
    url: "https://livesportsclub.me/hls/tata/play.php?id=246",
    shortCut: "9",
  },
];

// Card component for displaying channel information
const ChannelCard = ({ channel }) => {
  const openNewTab = (url) => {
    window.open(url, "_blank");
  };

  const [imageSrc, setImageSrc] = useState(
    "https://e1.pngegg.com/pngimages/259/287/png-clipart-metrostation-tv-logo-thumbnail.png"
  );

  useEffect(() => {
    const img = new Image();
    img.src = channel.image;

    img.onload = () => {
      // If the actual image exists, update the state to use the actual image
      setImageSrc(channel.image);
    };

    img.onerror = () => {
      // If the actual image fails to load, use the default image
      setImageSrc(
        "https://e1.pngegg.com/pngimages/259/287/png-clipart-metrostation-tv-logo-thumbnail.png"
      );
    };
  }, [channel.image]);

  return (
    <div className="channel-card" onClick={() => openNewTab(channel.url)}>
      <div className="channel-info">
        <img src={imageSrc} alt={channel.name} />
        <h4 style={{ margin: "3px 0" }}>{channel.name}</h4>
      </div>
      {channel.shortCut && (
        <div className="shortcut-display">{channel.shortCut}</div>
      )}
    </div>
  );
};

// Section component to display channels for a specific language
const ChannelSection = ({ title, channels }) => {
  const [isCollapsed, setCollapsed] = useState(false);

  const toggleCollapse = () => {
    setCollapsed(!isCollapsed);
  };

  return (
    <div className={`channel-section ${isCollapsed ? "collapsed" : ""}`}>
      <h2 onClick={toggleCollapse}>{title}</h2>
      {isCollapsed ? null : (
        <div className="channel-list">
          {channels.map((channel, index) => (
            <ChannelCard key={index} channel={channel} />
          ))}
        </div>
      )}
    </div>
  );
};

function App() {
  const [isDarkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
    document.body.classList.toggle("dark-mode");
  };

  useEffect(() => {
    const handleKeyPress = (event) => {
      let key = event.key.toUpperCase();
      if (shortKeys[key] !== undefined) {
        const url = shortKeys[key];
        if (url) {
          window.open(url, "_blank");
        }
      }
      // You can also console.log(event) to see the details of other key combinations
    };

    // Attach the event listener when the component mounts
    window.addEventListener("keyup", handleKeyPress);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("keyup", handleKeyPress);
    };
  }, []);

  return (
    <div className={isDarkMode ? "dark-mode" : "light-mode"}>
      <header>
        <h1>JioTv</h1>
        <div className="mode-buttons">
          <button onClick={toggleDarkMode}>
            {isDarkMode ? "Light" : "Dark"} Mode
          </button>
        </div>
      </header>
      <ChannelSection title="Kannada" channels={kannadaChannels} />
      <ChannelSection title="Tamil" channels={tamilChannels} />
      <ChannelSection title="Telugu" channels={teluguChannels} />
      <ChannelSection title="Sports" channels={sportsChannels} />
    </div>
  );
}

export default App;
