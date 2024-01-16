import React, { useState } from "react";
import "./App.css";

const kannadaChannels = [
  {
    name: "Udaya",
    image: "http://localhost:5001/jtvimage/Udaya_HD.png",
    url: "http://localhost:5001/play/901",
  },
  {
    name: "Colors",
    image: "http://localhost:5001/jtvimage/Colors_Kannada_HD.png",
    url: "http://localhost:5001/play/757",
  },
  {
    name: "Zee Kannada",
    image: "http://localhost:5001/jtvimage/Zee_Kannada_HD.png",
    url: "http://localhost:5001/play/1632",
  },
  {
    name: "Udaya Comedy",
    image: "http://localhost:5001/jtvimage/Udaya_Comedy.png",
    url: "http://localhost:5001/play/733",
  },
  {
    name: "Udaya Music",
    image: "http://localhost:5001/jtvimage/Udaya_Music.png",
    url: "http://localhost:5001/play/744",
  },
  {
    name: "Sakkat",
    image: "http://localhost:5001/jtvimage/Sakkat.png",
    url: "http://localhost:5001/play/1245",
  },
  {
    name: "Raj Music",
    image: "http://localhost:5001/jtvimage/Raj_Music_Kannada.png",
    url: "http://localhost:5001/play/743",
  },

  {
    name: "Public Music",
    image: "http://localhost:5001/jtvimage/Public_Music.png",
    url: "http://localhost:5001/play/773",
  },
  {
    name: "Colors Super",
    image: "http://localhost:5001/jtvimage/Colors_Super.png",
    url: "http://localhost:5001/play/785",
  },

  {
    name: "Udaya Movies",
    image: "http://localhost:5001/jtvimage/Udaya_Movies.png",
    url: "http://localhost:5001/play/678",
  },
  {
    name: "Colors Cinema",
    image: "http://localhost:5001/jtvimage/Colors_Kannada_Cinema.png",
    url: "http://localhost:5001/play/1632",
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
  },
  {
    name: "Kalaingar TV",
    image: "http://localhost:5001/jtvimage/Kalaignar_TV.png",
    url: "http://localhost:5001/play/1209",
  },
  {
    name: "KTV",
    image: "http://localhost:5001/jtvimage/KTV_HD.png",
    url: "http://localhost:5001/play/894",
  },
  {
    name: "Sun Music",
    image: "http://localhost:5001/jtvimage/Sun_Music_HD.png",
    url: "http://localhost:5001/play/895",
  },
  {
    name: "Raj Musix",
    image: "http://localhost:5001/jtvimage/Raj_Musix.png",
    url: "http://localhost:5001/play/748",
  },
  {
    name: "Tunes 6",
    image: "http://localhost:5001/jtvimage/Tunes_6.png",
    url: "http://localhost:5001/play/803",
  },
  {
    name: "Mk Music",
    image: "http://localhost:5001/jtvimage/MK_Music.png",
    url: "http://localhost:5001/play/845",
  },
  {
    name: "MK TV",
    image: "http://localhost:5001/jtvimage/MK_TV.png",
    url: "http://localhost:5001/play/847",
  },
  {
    name: "Zee Thirai",
    image: "http://localhost:5001/jtvimage/Zee_Thirai.png",
    url: "http://localhost:5001/play/2256",
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
    name: "ETV Cinema",
    image: "http://localhost:5001/jtvimage/ETV_Cinema.png",
    url: "http://localhost:5001/play/252",
  },
  {
    name: "Zee Cinemalu",
    image: "http://localhost:5001/jtvimage/Zee_Cinemalu_HD.png",
    url: "http://localhost:5001/play/1363",
  },
  {
    name: "Zee",
    image: "http://localhost:5001/jtvimage/Zee_Telugu_HD.png",
    url: "http://localhost:5001/play/1354",
  },
  {
    name: "ETV Plus",
    image: "http://localhost:5001/jtvimage/ETV_Plus.png",
    url: "http://localhost:5001/play/692",
  },
  {
    name: "Gemini Comedy",
    image: "http://localhost:5001/jtvimage/Gemini_Comedy.png",
    url: "http://localhost:5001/play/729",
  },
  {
    name: "Raj Music",
    image: "http://localhost:5001/jtvimage/Raj_Music_Telugu.png",
    url: "http://localhost:5001/play/737",
  },
  {
    name: "Gemini",
    image: "http://localhost:5001/jtvimage/Gemini_TV_HD.png",
    url: "http://localhost:5001/play/897",
  },
  {
    name: "Gemini Music",
    image: "http://localhost:5001/jtvimage/Gemini_Music_HD.png",
    url: "http://localhost:5001/play/898",
  },
  {
    name: "Gemini Movies",
    image: "http://localhost:5001/jtvimage/Gemini_Movies_HD.png",
    url: "http://localhost:5001/play/899",
  },
  {
    name: "ETV",
    image: "http://localhost:5001/jtvimage/ETV_HD.png",
    url: "http://localhost:5001/play/1973",
  },
];
const sportsChannels = [
  {
    name: "Sony Ten 1",
    image: "http://localhost:5001/jtvimage/Ten_HD.png",
    url: "http://localhost:5001/play/162",
  },
  {
    name: "Sony Ten 2",
    image: "http://localhost:5001/jtvimage/Ten2_HD.png",
    url: "http://localhost:5001/play/891",
  },
  {
    name: "Sony Ten 5",
    image: "http://localhost:5001/jtvimage/Six_HD.png",
    url: "http://localhost:5001/play/155",
  },
  {
    name: "DD Sports",
    image: "http://localhost:5001/jtvimage/DD_Sports.png",
    url: "http://localhost:5001/play/204",
  },
  {
    name: "Sports18 HD",
    image: "http://localhost:5001/jtvimage/Sports18_1_HD.png",
    url: "http://localhost:5001/play/1984",
  },
];

// Card component for displaying channel information
const ChannelCard = ({ channel }) => {
  const openNewTab = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="channel-card" onClick={() => openNewTab(channel.url)}>
      <img src={channel.image} alt={channel.name} />
      <h4 style={{ margin: "3px 0" }}>{channel.name}</h4>
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
