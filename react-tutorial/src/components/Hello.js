/*
function Hello() {
    return <h1>Hello World!</h1>;
}; */

const name = 'John Cena';

const displayMessage = () => {
    return "I need help!";
};

const Hello = () => <h1>Hello There, {name}! {displayMessage()}</h1>;

export default Hello;