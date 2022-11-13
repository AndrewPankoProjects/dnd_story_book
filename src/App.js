import './App.css';
import './Oneshot.css';

function App() {
  return (
    <>
    <div id="alto">

      <div id="title">
          <h1>Welcome to Dungeons & Dragons: Story Mode</h1>
      </div>
      <div id="info">
        <h1>Hover over the book to open it!</h1>
      </div>
      
      <div className='scroll-down'></div>

      <div className="book">
          <div className='cover'>
            <h1 id="bookTitle">DnD Story Mode</h1>
          </div>
          <div className='page'></div>
          <div className='page'></div>
          <div className='page'></div>
          <div className='page'></div>
          <div className='page'></div>
          <div className='last-page'>
            <h2 id="desc">Hello there Adventurer... blah blah blah click the big green button..</h2>
            <button id="goToStory">
              <a href="#section2">Start Adventure!</a>
            </button>
          </div>
          <div className='back-cover'></div>
        </div>
      </div>
    </> 
  );
}

export default App;
