import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import './style.scss';

export const NotFound: FC = () => {
  return (
    <div className="home-page container">
      <div className="">
        <div className="notfound">
          <div className="notfound__error">404</div>
          <div className="notfound__pageParagraph">We searched high and low</div>
          <div className="notfound__pageParagraph">
            but couldn&apos;t find what you&apos;re looking for.
          </div>

          <div className="notfound__backPage">
            <p className="notfound__backParagraph">
              Let&apos;s find a better&nbsp;
              <NavLink to="/" className="notfound__back">
                place
              </NavLink>
              &nbsp;for you to go.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
