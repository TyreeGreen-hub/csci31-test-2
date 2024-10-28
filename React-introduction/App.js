function App() {
    return (
      <div>
        <Navbar />
        <div className="p-12">
          <Header />
          <Main />
          <ComponentWithCustomContent content="My favorite Superheroes from three seperate comic book publishers.
          I think they are the best based on the fact of their design, to the stories they tell, and history behind each character.
          They are more than just characters to me, they were characters that I read and not only wanted to be but also wanted to become
          as their morals and general lessons they taught in their stories resonated with me." />
          
          <ComponentWithCustomContent content="Spiderman is a character about being able to defeat any adversity and he's part of Marvel.
          Superman is a character that can achieve the best ideals of humanity, truth, justice, and compassion for others and he's apart of
          DC or Detective Comics. Hellboy is a character about not judging a book by it's cover and no matter where you come from or how
          you can achieve greatness and that you should judge people on their actions not their words or apperance and he's apart of
          Dark Horse Comics." />
        </div>
        <Footer />
      </div>
    );
  }

  const container = document.getElementById("root");
  const root = ReactDOM.createRoot(container);
  root.render(<App />);