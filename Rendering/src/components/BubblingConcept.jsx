function BubblingConcept() {
    const handleParentClick = (event) => {
      console.log('Parent clicked');
    };
    const handleChildClick = (event) => {
      // event.preventDefault();
      event.stopPropagation();
      console.log('Child clicked');
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log('Form submission prevented');
    };
  
    return (
      <section>
        {/* <div
          onClick={handleParentClick}
          style={{ padding: '20px', backgroundColor: 'lightblue' }}
        >
          <p
            onClick={handleChildClick}
            style={{ padding: '10px', backgroundColor: 'lightgreen' }}
          >
            Click me
          </p>
        </div> */}
  
        <form onSubmit={handleSubmit}>
          <button>Submit</button>
        </form>
      </section>
    );
  }
  
  export default BubblingConcept;
  