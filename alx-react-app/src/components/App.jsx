import UserProfile from './UserProfile';
import WelcomeMessage from './WelcomeMessage';
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';

const App = () => {
    return (
        <div>
            <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
            <WelcomeMessage Hello everyone I am learning React at ALX /> 
            <Header My Favorite Cities />
            <MainContent I love to visit New York Paris and Tokyo />
            <Footer City Lovers />
        </div>
    );
};

export default App;