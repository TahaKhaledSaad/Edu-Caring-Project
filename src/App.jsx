import { Route, Routes } from "react-router-dom";

// Auth
import Login from "./components/Website/Login.jsx";
import AttendanceReg from "./components/Website/Register/AttendanceReg.jsx";
import SpeakerReg from "./components/Website/Register/SpeakerReg.jsx";

// Main Page
import LandingPage from "./components/Website/LandingPage/LandingPage.jsx";
import RequireAuth from "./components/Website/Register/RequireAuth.jsx";
import MyEvents from "./components/Website/myEvents/MyEvents.jsx";
import Home from "./components/Website/home/Home.jsx";
import Community from "./components/Website/community/Community.jsx";
import Profile from "./components/Website/Profile/Profile.jsx";
import Event from "./components/Website/Event/Event.jsx";
import Payment from "./components/Website/payment/Payment.jsx";
import SpeakerProfile from "./components/Website/speakerProfile/SpeakerProfile.jsx";
import Session from "./components/Website/session/Session.jsx";
import Test from "./components/Test.jsx";
function App() {
  return (
    <div>
      <Routes>
        {/* Puplic Routes */}
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="register-attendance" element={<AttendanceReg />}></Route>
        <Route path="register-speaker" element={<SpeakerReg />}></Route>
        <Route path="test" element={<Test />} />
        <Route element={<RequireAuth />}>
          <Route path="/home" element={<Home />}>
            <Route path="event/:eventId" element={<Event />} />
            <Route
              path="speakerProfile/:eventId/:eventDayId/:speakerId"
              element={<SpeakerProfile />}
            />
            <Route path="session/:eventId/:eventDayId" element={<Session />} />
            <Route path="myevents" element={<MyEvents />} />
            <Route path="community" element={<Community />} />
            <Route path="profile" element={<Profile />} />
            <Route path="payment/:eventId" element={<Payment />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
