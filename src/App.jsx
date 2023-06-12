import  { useState } from "react";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";

const App = () => {
  const [showContent, setShowContent] = useState(false);

  const handleChatClick = () => {
    setShowContent(true);
  };

  const steps = [
    {
      id: "0",
      message: "Hey Geek!",
      trigger: "1",
    },
    {
      id: "1",
      message: "Please write your username",
      trigger: "2",
    },
    {
      id: "2",
      user: true,
      trigger: "3",
    },
    {
      id: "3",
      message: "Hi {previousValue}, how can I help you?",
      trigger: "4",
    },
    {
      id: "4",
      options: [
        { value: 1, label: "View Courses" },
        { value: 2, label: "Read Articles" },
      ],
      end: true,
    },
  ];

  const theme = {
    background: "#C9FF8F",
    headerBgColor: "#197B22",
    headerFontSize: "20px",
    botBubbleColor: "#0F3789",
    headerFontColor: "white",
    botFontColor: "white",
    userBubbleColor: "#FF5733",
    userFontColor: "white",
  };

  const config = {
    botAvatar:
      "https://media.wired.com/photos/5a540c008652c3185cff9b4e/master/w_2560%2Cc_limit/Chatbot-TopArt-879128144.jpg",
    floating: true,
  };

  return (
    <div className="App">
      {!showContent ? (
        <button onClick={handleChatClick}>Click to Chat</button>
      ) : (
        <ThemeProvider theme={theme}>
          <ChatBot headerTitle="chatBot" steps={steps} {...config} />
          <img src="https://media.istockphoto.com/id/637696304/photo/patan.jpg?s=612x612&w=0&k=20&c=-53aSTGBGoOOqX5aoC3Hs1jhZ527v3Id_xOawHHVPpg=" />
        </ThemeProvider>
      )}
    </div>
  );
};

export default App;
