import React, { useState, useEffect } from "react";
import "./styles.css";

const shortKeys = {
  0: "http://localhost:5001/play/678",
  1: "http://localhost:5001/play/162",
  2: "http://localhost:5001/play/891",
  3: "http://localhost:5001/play/155",
  4: "http://localhost:5001/play/204",
  5: "http://localhost:5001/play/1984",
  Q: "http://localhost:5001/play/901",
  W: "http://localhost:5001/play/757",
  E: "http://localhost:5001/play/1632",
  R: "http://localhost:5001/play/733",
  T: "http://localhost:5001/play/744",
  Y: "http://localhost:5001/play/1245",
  U: "http://localhost:5001/play/743",
  I: "http://localhost:5001/play/773",
  P: "http://localhost:5001/play/1632",
  A: "http://localhost:5001/play/896",
  S: "http://localhost:5001/play/1209",
  D: "http://localhost:5001/play/894",
  F: "http://localhost:5001/play/895",
  G: "http://localhost:5001/play/748",
  H: "http://localhost:5001/play/803",
  J: "http://localhost:5001/play/845",
  K: "http://localhost:5001/play/847",
  L: "http://localhost:5001/play/2256",
  Z: "http://localhost:5001/play/897",
  X: "http://localhost:5001/play/899",
  C: "http://localhost:5001/play/898",
  V: "http://localhost:5001/play/1363",
  B: "http://localhost:5001/play/1354",
  N: "http://localhost:5001/play/252",
  M: "http://localhost:5001/play/692",
};
const kannadaChannels = [
  {
    name: "Udaya",
    image: "http://localhost:5001/jtvimage/Udaya_HD.png",
    url: "http://localhost:5001/play/901",
    shortCut: "Q",
  },
  {
    name: "Colors",
    image: "http://localhost:5001/jtvimage/Colors_Kannada_HD.png",
    url: "http://localhost:5001/play/757",
    shortCut: "W",
  },
  {
    name: "Zee Kannada",
    image: "http://localhost:5001/jtvimage/Zee_Kannada_HD.png",
    url: "http://localhost:5001/play/1632",
    shortCut: "E",
  },
  {
    name: "Udaya Comedy",
    image: "http://localhost:5001/jtvimage/Udaya_Comedy.png",
    url: "http://localhost:5001/play/733",
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
    shortCut: "0",
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
  },
  {
    name: "Public Movies",
    image: "http://localhost:5001/jtvimage/Public_Movies.png",
    url: "http://localhost:5001/play/1633",
  },
  {
    name: "Zee Picchar",
    image: "http://localhost:5001/jtvimage/Zee_Picchar_HD.png",
    url: "http://localhost:5001/play/1746",
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
  },
  {
    name: "J Movies",
    image: "http://localhost:5001/jtvimage/J_Movies.png",
    url: "http://localhost:5001/play/417",
  },
  {
    name: "Jaya Tv",
    image: "http://localhost:5001/jtvimage/Jaya_TV_HD.png",
    url: "http://localhost:5001/play/419",
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
];

const teluguChannels = [
  {
    name: "Gemini",
    image: "http://localhost:5001/jtvimage/Gemini_TV_HD.png",
    url: "http://localhost:5001/play/897",
    shortCut: "Z",
  },
  {
    name: "Gemini Movies",
    image: "http://localhost:5001/jtvimage/Gemini_Movies_HD.png",
    url: "http://localhost:5001/play/899",
    shortCut: "X",
  },

  {
    name: "Gemini Music",
    image: "http://localhost:5001/jtvimage/Gemini_Music_HD.png",
    url: "http://localhost:5001/play/898",
    shortCut: "C",
  },
  {
    name: "Zee Cinemalu",
    image: "http://localhost:5001/jtvimage/Zee_Cinemalu_HD.png",
    url: "http://localhost:5001/play/1363",
    shortCut: "V",
  },
  {
    name: "Zee",
    image: "http://localhost:5001/jtvimage/Zee_Telugu_HD.png",
    url: "http://localhost:5001/play/1354",
    shortCut: "B",
  },
  {
    name: "ETV Cinema",
    image: "http://localhost:5001/jtvimage/ETV_Cinema.png",
    url: "http://localhost:5001/play/252",
    shortCut: "N",
  },

  {
    name: "ETV Plus",
    image: "http://localhost:5001/jtvimage/ETV_Plus.png",
    url: "http://localhost:5001/play/692",
    shortCut: "M",
  },
  {
    name: "Gemini Comedy",
    image: "http://localhost:5001/jtvimage/Gemini_Comedy.png",
    url: "http://localhost:5001/play/729",
    shortCut: "",
  },
  {
    name: "Raj Music",
    image: "http://localhost:5001/jtvimage/Raj_Music_Telugu.png",
    url: "http://localhost:5001/play/737",
    shortCut: "",
  },

  {
    name: "ETV",
    image: "http://localhost:5001/jtvimage/ETV_HD.png",
    url: "http://localhost:5001/play/1973",
    shortCut: "",
  },
];

const sportsChannels = [
  {
    name: "Sony Ten 1",
    image: "http://localhost:5001/jtvimage/Ten_HD.png",
    url: "http://localhost:5001/play/162",
    shortCut: "1",
  },
  {
    name: "Sony Ten 2",
    image: "http://localhost:5001/jtvimage/Ten2_HD.png",
    url: "http://localhost:5001/play/891",
    shortCut: "2",
  },
  {
    name: "Sony Ten 5",
    image: "http://localhost:5001/jtvimage/Six_HD.png",
    url: "http://localhost:5001/play/155",
    shortCut: "3",
  },
  {
    name: "DD Sports",
    image: "http://localhost:5001/jtvimage/DD_Sports.png",
    url: "http://localhost:5001/play/204",
    shortCut: "4",
  },
  {
    name: "Sports18 HD",
    image: "http://localhost:5001/jtvimage/Sports18_1_HD.png",
    url: "http://localhost:5001/play/1984",
    shortCut: "5",
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
  const [searchTerm, setSearchTerm] = useState("");

  const toggleCollapse = () => {
    setCollapsed(!isCollapsed);
  };

  const filteredChannels = channels.filter((channel) =>
    channel.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={`channel-section ${isCollapsed ? "collapsed" : ""}`}>
      <h2 onClick={toggleCollapse}>{title}</h2>
      {isCollapsed ? null : (
        <>
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          {filteredChannels.length === 0 && searchTerm.length > 0 && (
            <div className="no-results-wrapper">
              <p>
                No channels found{" "}
                <span className="no-results" onClick={() => setSearchTerm("")}>
                  Clear Search
                </span>
              </p>
            </div>
          )}
          <div className="channel-list">
            {filteredChannels.map((channel, index) => (
              <ChannelCard key={index} channel={channel} />
            ))}
          </div>
        </>
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
