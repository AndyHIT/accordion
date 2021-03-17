import './App.css';
import Accordion from './components/accordion'

const App = () => {
  const items = [
    {
      title: 'What is React?',
      content: 'React is a front end library.'
    }, {
      title: 'Why use React?',
      content: 'React is a popular library among developers to do front end works.'
    }, {
      title: 'How to use React?',
      content: 'You use React to create components.'
    }
  ]

  return (
    <div className="ui styled accordion">
      <Accordion items={items} />
    </div>
  );
}

export default App;
