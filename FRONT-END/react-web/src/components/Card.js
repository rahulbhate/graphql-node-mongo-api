import React from 'react';
import { FaAlignLeft } from 'react-icons/fa';
const Card = () =>(
     
    <section className="wrapper">
        <ul className="column__list">
          <li className="column__item">
            <div className="column__title--wrapper">
              <h2>Event </h2>
              <i className="fas fa-ellipsis-h" />
            </div>
            <ul className="card__list">
              <li className="card__item">
                <span className="card__tag card__tag--browser">Event Title</span>
                <h6 className="card__title">Event Description</h6>
                <p>Event Date</p>
                <ul className="card__actions">
                  <li className="card__actions--wrapper">
                    <i><FaAlignLeft /></i></li>
                </ul>
              </li>
              <li class="card__item">
                <span class="card__tag card__tag--browser">Event Title</span>
                <h6 class="card__title">Event Description</h6>
                <p>Event Date</p>
              </li>
            </ul>
            <div className="column__item--cta">
              <i className="fas fa-plus" />
              <h4>Add another card</h4>
            </div>
          </li>
          <li className="column__item">
            <div className="column__title--wrapper">
              <h2>Days Left</h2>
              <i className="fas fa-ellipsis-h" />
            </div>
            <ul className="card__list">
              <li className="card__item">
                <span className="card__tag card__tag--high">Days Left</span>
                <h6 className="card__title">15 Days</h6>
                <p>Event</p>
                <ol className="card__actions">
                  <li className="card__actions--wrapper">
                    <i className="far fa-check-square" /><span className="card__actions--text">1/4</span></li>
                  <ol className="card__avatars">
                    <li className="card__avatars--item">
                      {/* Photo by Philip Martin on Unsplash */}
                      <img src="https://images.unsplash.com/photo-1521119989659-a83eee488004?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=664&q=80" alt="Man standing near balcony" className="avatar__image" />
                    </li>
                  </ol>
                </ol>
              </li>
              <li className="card__item">
                <span className="card__tag card__tag--high">Days Left</span>
                <h6 className="card__title">Days Left</h6>
                <ol className="card__actions">
                  <li className="card__actions--wrapper">
                    <i className="far fa-check-square" /><span className="card__actions--text">1/4</span></li>
                  <ol className="card__avatars">
                    <li className="card__avatars--item">
                      {/* Photo by Philip Martin on Unsplash */}
                      <img src="https://images.unsplash.com/photo-1521119989659-a83eee488004?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=664&q=80" alt="Man standing near balcony" className="avatar__image" />
                    </li>
                  </ol>
                </ol>
              </li>
            </ul>
            <div className="column__item--cta">
              <i className="fas fa-plus" />
              <h4>Add another card</h4>
            </div>
          </li>
          <li className="column__item">
            <div className="column__title--wrapper">
              <h2>Hours Left</h2>
              <i className="fas fa-ellipsis-h" />
            </div>
            <ul className="card__list">
              <li className="card__item">
                <span className="card__tag card__tag--design">Hours Left</span>
                <h6 className="card__title">100 HOURS</h6>
                <ol className="card__actions">
                  <li className="card__actions--wrapper">
                    <i className="fas fa-align-left" /></li>
                  <ol className="card__avatars">
                    <li className="card__avatars--item">
                      {/* Photo by Philip Martin on Unsplash */}
                      <img src="https://images.unsplash.com/photo-1521119989659-a83eee488004?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=664&q=80" alt="Man standing near balcony" className="avatar__image" />
                    </li>
                  </ol>
                </ol>
              </li>
              <li className="card__item">
                <span className="card__tag card__tag--design">Hours Left</span>
                <h6 className="card__title">100 HOURS</h6>
                <ol className="card__actions">
                  <li className="card__actions--wrapper">
                    <i className="fas fa-align-left" /></li>
                  <ol className="card__avatars">
                    <li className="card__avatars--item">
                      {/* Photo by Philip Martin on Unsplash */}
                      <img src="https://images.unsplash.com/photo-1521119989659-a83eee488004?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=664&q=80" alt="Man standing near balcony" className="avatar__image" />
                    </li>
                  </ol>
                </ol>
              </li>
            </ul>
            <div className="column__item--cta">
              <i className="fas fa-plus" />
              <h4>Add another card</h4>
            </div>
          </li>
          <li className="column__item">
            <div className="column__title--wrapper">
              <h2>Minutes Left</h2>
              <i className="fas fa-ellipsis-h" />
            </div>
            <ul className="card__list">
              <li className="card__item">
              <span className="card__tag card__tag--low">Minutes Left</span>
                <h6 className="card__title">30 MINUTES</h6>
                <ol className="card__actions">
                  <ol className="card__avatars">
                    <li className="card__avatars--item">
                      {/* Photo by Michael Alfonso on Unsplash */}
                      <img src="https://images.unsplash.com/photo-1516756587022-7891ad56a8cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" alt="Woman, Lady, Female" className="avatar__image" />
                    </li>
                    <li className="card__avatars--item">
                      {/* Photo by Toa Heftiba on Unsplash */}
                      <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" alt="Woman standing near blue steel gate" className="avatar__image" />
                    </li>
                  </ol>
                </ol>
              </li>
              <li className="card__item">
              <span className="card__tag card__tag--low">Minutes Left</span>
                <h6 className="card__title">30 MINUTES</h6>
                <ol className="card__actions">
                  <ol className="card__avatars">
                    <li className="card__avatars--item">
                      {/* Photo by Michael Alfonso on Unsplash */}
                      <img src="https://images.unsplash.com/photo-1516756587022-7891ad56a8cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" alt="Woman, Lady, Female" className="avatar__image" />
                    </li>
                    <li className="card__avatars--item">
                      {/* Photo by Toa Heftiba on Unsplash */}
                      <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" alt="Woman standing near blue steel gate" className="avatar__image" />
                    </li>
                  </ol>
                </ol>
              </li>
            </ul>
            <div className="column__item--cta">
              <i className="fas fa-plus" />
              <h4>Add another card</h4>
            </div>
          </li>
          <li className="column__item">
            <div className="column__title--wrapper">
              <h2>Seconds Left</h2>
              <i className="fas fa-ellipsis-h" />
            </div>
            <ul className="card__list">
              <li className="card__item">
                <span className="card__tag card__tag--mobile">Seconds Left</span>
                <h6 className="card__title">25 SECONDS</h6>
                <ol className="card__actions">
                  <ol className="card__avatars">
                    <li className="card__avatars--item">
                      {/* Photo by Philip Martin on Unsplash */}
                      <img src="https://images.unsplash.com/photo-1521119989659-a83eee488004?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=664&q=80" alt="Man standing near balcony" className="avatar__image" />
                    </li>
                    <li className="card__avatars--item">
                      {/* Photo by Michael Alfonso on Unsplash */}
                      <img src="https://images.unsplash.com/photo-1516756587022-7891ad56a8cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" alt="Woman, Lady, Female" className="avatar__image" />
                    </li>
                  </ol>
                </ol>
              </li>
              <li className="card__item">
              <span className="card__tag card__tag--mobile">Seconds Left</span>
                <h6 className="card__title">25 SECONDS</h6>
                <ol className="card__actions">
                  <ol className="card__avatars">
                    <li className="card__avatars--item">
                      {/* Photo by Philip Martin on Unsplash */}
                      <img src="https://images.unsplash.com/photo-1521119989659-a83eee488004?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=664&q=80" alt="Man standing near balcony" className="avatar__image" />
                    </li>
                    <li className="card__avatars--item">
                      {/* Photo by Michael Alfonso on Unsplash */}
                      <img src="https://images.unsplash.com/photo-1516756587022-7891ad56a8cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" alt="Woman, Lady, Female" className="avatar__image" />
                    </li>
                  </ol>
                </ol>
              </li>
            </ul>
            <div className="column__item--cta">
              <i className="fas fa-plus" />
              <h4>Add another card</h4>
            </div>
          </li>
        </ul>
      </section>
      
)
export default Card;