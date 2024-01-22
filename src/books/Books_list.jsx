import React from "react";
import { BooksStyle } from "./BooksStyle";
const Books_list = () => {
  function handleClick() {
    alert('You clicked me!');
  }
  return (
    <>
      <BooksStyle>
        <div className="body">
          <div className="main">
            <div className="card">
              <div className="header">
                <div className="header_logo">
                  <img src="/image/bi_cloud-check.png" />
                  <h6>
                    Books <span>List</span>
                  </h6>
                  <img src="/image/search-refraction.png" />
                  <p>Search for any training you want</p>
                </div>
                <div className="header_right">
                  <img className="bell" src="/image/bell-01.png" />
                  <div className="point"></div>
                  <img className="user_image" src="/image/profile_photo.png" />
                </div>
              </div>
              <div className="text_main">
                <h5>
                  You’ve got <span>7 book</span>
                </h5>



                
                <button onClick={handleClick}
                 className="Create">
                  <img src="/image/plus.png" />
                  Create a boo
                </button>
              </div>
              <div className="text">
                <p>Your books today</p>
              </div>
              <div className="cards">
                <div className="cards_books">
                  <div className="card_book">
                    <h5>Raspberry Pi User Guide</h5>
                    <ul>
                      <li>Cover: http://url.to.book.cover</li>
                      <li>Pages: 221</li>
                      <li>Published: 2012</li>
                      <li>Isbn: 9781118464465</li>
                    </ul>
                    <div className="row">
                      <p>
                        Eben Upton /<span>2012</span>{" "}
                      </p>
                      <button className="new">New</button>
                    </div>
                  </div>
                  <div className="delet_one">
                    <div className="turn_off">
                      <img src="/image/trash_01.png" />
                    </div>
                    <div className="to_add">
                      <img src="/image/edit_04.png" />
                    </div>
                  </div>
                </div>

                <div className="cards_books">
                  <div className="card_book">
                    <h5>Raspberry Pi User Guide</h5>
                    <ul>
                      <li>Cover: http://url.to.book.cover</li>
                      <li>Pages: 221</li>
                      <li>Published: 2012</li>
                      <li>Isbn: 9781118464465</li>
                    </ul>
                    <div className="row">
                      <p>
                        Eben Upton /<span>2012</span>
                      </p>
                      <button className="reading">Reading</button>
                    </div>
                  </div>
                  <div className="delet_to">
                    <div className="turn_off">
                      <img src="/image/trash_01.png" />
                    </div>
                    <div className="to_add">
                      <img src="/image/edit_04.png" />
                    </div>
                  </div>
                </div>
                <div className="cards_books">
                  <div className="card_book">
                    <h5>Raspberry Pi User Guide</h5>
                    <ul>
                      <li>Cover: http://url.to.book.cover</li>
                      <li>Pages: 221</li>
                      <li>Published: 2012</li>
                      <li>Isbn: 9781118464465</li>
                    </ul>
                    <div className="row">
                      <p>
                        Eben Upton /<span>2012</span>
                      </p>
                      <button className="finished">Finished</button>
                    </div>
                  </div>
                  <div className="delet_thre">
                    <div className="turn_off">
                      <img src="/image/trash_01.png" />
                    </div>
                    <div className="to_add">
                      <img src="/image/edit_04.png" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </BooksStyle>
    </>
  );
};
export default Books_list;
