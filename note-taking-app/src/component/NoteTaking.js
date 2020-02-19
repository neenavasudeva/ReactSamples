import React from "react";
import "../css/NoteTaking.css";
class NoteTaking extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonActive: true,
      items: []
    };
    this.addNote = this.addNote.bind(this);
  }

  buttonActive = () => {
    if (this.theTitle !== "") {
      this.setState({ buttonActive: false });
    }
  };
  deleteNotes = () => {
    this.setState({
      items: [],
      buttonActive: true
    });
  };

  addNote = event => {
    if (this.theTitle.value !== "") {
      var newItem = {
        title: this.theTitle.value,
        note: this.note.value
      };
    }
    this.setState(prevState => {
      return {
        items: prevState.items.concat(newItem)
      };
    });
    this.note.value = "";
    this.theTitle.value = "";
    event.preventDefault();
  };
  render() {
    return (
      <div>
        <div>
          <section>
            <p>
              {this.state.items.map((val, index) => (
                <li key={index}>
                  {val.title}- {val.note}                
                </li>               
              ))}
            </p>
          </section>
        </div>
        
          <footer className='position'>
            <div>
              <div>
                <input
                  className="content-margin"
                  type="text"
                  placeholder="Note Heading"
                  ref={title => (this.theTitle = title)}
                  onChange={this.buttonActive}
                ></input>
              </div>
              <div>
               
                <textarea
                  className="content-margin"
                  placeholder="Note Content"
                  ref={content => (this.note = content)}
                ></textarea>
              </div>
            </div>

            <div className="button-margins">
              <button
                disabled={this.state.buttonActive}
                className="Button-class"
                onClick={this.addNote}
              >
                Add Note
              </button>
              <button onClick={this.deleteNotes} className="Button-class">
                Clear Notes
              </button>
            </div>
          </footer>
       
      </div>
    );
  }
}
export default NoteTaking;
