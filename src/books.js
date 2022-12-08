import React from 'react';
import '../src/const.css';

export class Books extends React.Component {
  constructor() {
    super();
    this.state = {
      booksauth: '',
    };
    this.booksArray = [];
  }

  componentDidMount() {
    fetch('https://s3.amazonaws.com/api-fun/books.json')
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        this.booksArray = json.data.books;
        this.setState({
          booksauth: json.data,
          DataisLoaded: true,
        });
        console.log(this.booksArray);
      });
  }

  render() {
    return (
      <React.Fragment>
        <div className="fd ">
          <div className="toggle_m1">
            <p>Filter by Date</p>
            <label className="switch">
              {/* <input type="checkbox" checked /> */}
              <span className="slider round"></span>
            </label>
          </div>
          <div className="books_auth">
            <p>
              <span>Author</span> {this.state.booksauth.author}{' '}
            </p>
            <p>
              <span>Birthday</span> {this.state.booksauth.birthday}{' '}
            </p>
            <p>
              <span>birthPlace</span> {this.state.booksauth.birthPlace}{' '}
            </p>
          </div>
        </div>
        <div className="fd p_10">
          <div className="row">
            {this.booksArray.map((data) => (
              <div key={data.title} className="bookTab df">
                <div className="booksDv fd m_b_10">
                  <img src={data.imageUrl} alt="" />
                  <div className="fd">
                    <div className="fd title">
                      {data.title} <span> {data.PublishDate} </span>
                    </div>
                    <div className="fd">
                      <a className="buyBtn" href={data.purchaseLink}>
                        Buy
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </React.Fragment>
    );
  }
}
