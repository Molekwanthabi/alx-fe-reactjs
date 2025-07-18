import UserProfile from './UserProfile';
import WelcomeMessage from './WelcomeMessage';
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';
import { useState } from 'react';

const App = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
            <WelcomeMessage message="Hello everyone I am learning React at ALX" />
            <Header title="My Favorite Cities" />
            <MainContent content="I love to visit New York, Paris and Tokyo" />
            <Footer text="City Lovers" />
            <p>Current Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
            <button onClick={() => setCount(0)}>Reset</button>
        </div>
    );
};

export default App;