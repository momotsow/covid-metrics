import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { generate } from 'randomized-string';
import { FaSearchLocation } from 'react-icons/fa';
import fetchData from '../redux/covid/api';
import { fetchStats } from '../redux/covid/reducer';

const HomePage = () => {
  const countryStore = useSelector((store) => store.details);
  const dispatch = useDispatch();

  useEffect(() => {
    if (countryStore.length === 0) {
      fetchData().then((response) => dispatch(fetchStats(response)));
    }
  }, [countryStore.length, dispatch]);

  let continCovid = countryStore.filter((item) => item.continent === 'Africa');
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const search = query.get('search') || '';
  continCovid = continCovid.filter((country) => country.country.includes(search));
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState(search);

  const countryFilterOnChange = (event) => {
    navigate(event.target.value ? `?search=${event.target.value}` : '');
    setSearchValue(event.target.value);
  };

  return (
    <div className="pages">
      <h3 className="area">Africa</h3>
      <form className="form">
        <div className="search-bar">
          <input
            className="form-control"
            type="text"
            value={searchValue}
            placeholder="Search country"
            onChange={countryFilterOnChange}
          />
          <FaSearchLocation />
        </div>
      </form>
      <ul className="list-country">
        {continCovid.map((country) => (
          <Link
            key={generate()}
            to={{ pathname: `/country/${country.country}` }}
          >
            <li className="list-details">
              <div className="details-container">
                <div className=" details">
                  <h1 className="name">{country.country}</h1>
                </div>
                <div>
                  <h2 className="popalution">Population:</h2>
                  {' '}
                  <p className="number">{country.population.toLocaleString()}</p>
                </div>
              </div>
              <div className="photo">
                <img
                  src={country.country_flag}
                  alt="national flag"
                  className="national-flag"
                />
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
