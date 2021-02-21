import React, { useEffect, useState } from 'react';
import CitiesList from './components/Cities/Cities.List'
import Map from './components/Map/Map'
import { ListTitle, CitiesListWrapper, PaginateWrapper, Wrapper, Search } from './Style'
import ReactPaginate from 'react-paginate';

function App() {
  const [cities, setCities] = useState({})
  const [offset, setOffset] = useState(0)
  const [perPage, setPerPage] = useState(15)
  const [currentPage, setCurrentPage] = useState(0)
  const [pageCount, setPageCount] = useState(0)
  const [MapPosition, setMapPosition] = useState({ lat: 46.2276, lng: 2.2137 })

  useEffect(() => {
    GetData("start")
  }, [])

  function GetData(verif, filterValue) {
    let slice = []

    fetch("cities.json")
      .then((response) => response.json())
      .then((data) => {
        const cities = data.map((city) => ({
          city: city.city,
          lat: city.latitude,
          lng: city.longitude
        }));
        if (verif === "filter" && filterValue != "") {
          let filtered = Object.values(cities).filter(el =>
            el.city.split("").join("").toLowerCase().includes(filterValue)
          )
          if (filtered.length > 1) {
            slice = filtered
          }
          else {
            slice = filtered.slice(offset, offset + perPage)
          }
        }
        else {
          slice = Object.values(cities).slice(offset, offset + perPage)
        }
        setCities(slice)
        setPageCount(Math.ceil(data.length / perPage))
      });
  }
  function handlePageClick(e) {
    const selectedPage = e.selected;
    const offset = selectedPage * perPage;
    setCurrentPage(selectedPage)
    setOffset(offset)
  };

  useEffect(() => {
    GetData()
  }, [currentPage, offset]);

  function onClickCity(position) {
    setMapPosition(position)
  }
  function filterCities(e) {
    GetData("filter", e.target.value)
  }

  return (
    <div>
      <ListTitle> United States cities  </ListTitle>
      <Wrapper>

        <CitiesListWrapper>
          <Search type="text" placeholder="Search City .." name="search" onChange={filterCities} />
          <CitiesList cities={cities} onClickCity={onClickCity} />
          <PaginateWrapper>
            <ReactPaginate
              previousLabel={'previous'}
              nextLabel={'next'}
              breakLabel={'...'}
              breakClassName={'break-me'}
              pageCount={pageCount}
              marginPagesDisplayed={2}
              pageRangeDisplayed={5}
              onPageChange={handlePageClick}
              containerClassName={'pagination'}
              subContainerClassName={'pages pagination'}
              activeClassName={'active'}
            />
          </PaginateWrapper>
        </CitiesListWrapper>
        <Map cityPosition={MapPosition} />
      </Wrapper>
    </div>
  )

}
export default App;
