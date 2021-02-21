import styled from 'styled-components'

export const CitiesListWrapper = styled.div`
  flex :0.2
  padding : 50%
  ul:{
     position :relative;
     padding :10px;
  }
  ul li {
    list-style:none;
    padding :6px;
    background-color : #fff;
    transition: transform 0.5s;
    &:hover{
      background-color : #cce6ff;
      transform : scale(1.1);
      font-size : 25px;
    }
  }

`;

export const PaginateWrapper = styled.div`
.pagination {
  display: inline-block;
  padding-left: 0;
  margin: 22px 0;
  border-radius: 4px;
}
.pagination > li {
  display: inline;
}
.pagination > li > a,
.pagination > li > span {
  position: relative;
  float: left;
  padding: 6px 12px;
  line-height: 1.42857143;
  text-decoration: none;
  color: #2c689c;
  background-color: #fff;
  border: 1px solid #ddd;
  margin-left: -1px;
}
.pagination > li:first-child > a,
.pagination > li:first-child > span {
  margin-left: 0;
  border-bottom-left-radius: 4px;
  border-top-left-radius: 4px;
}
.pagination > li:last-child > a,
.pagination > li:last-child > span {
  border-bottom-right-radius: 4px;
  border-top-right-radius: 4px;
}
.pagination > li > a:hover,
.pagination > li > span:hover,
.pagination > li > a:focus,
.pagination > li > span:focus {
  z-index: 2;
  color: #1b4060;
  background-color: #eeeeee;
  border-color: #ddd;
}
.pagination > .active > a,
.pagination > .active > span,
.pagination > .active > a:hover,
.pagination > .active > span:hover,
.pagination > .active > a:focus,
.pagination > .active > span:focus {
  z-index: 3;
  color: #fff;
  background-color: #2c689c;
  border-color: #2c689c;
  cursor: default;
}
.pagination > .disabled > span,
.pagination > .disabled > span:hover,
.pagination > .disabled > span:focus,
.pagination > .disabled > a,
.pagination > .disabled > a:hover,
.pagination > .disabled > a:focus {
  color: #777777;
  background-color: #fff;
  border-color: #ddd;
  cursor: not-allowed;
}
.pagination-lg > li > a,
.pagination-lg > li > span {
  padding: 10px 16px;
  font-size: 20px;
  line-height: 1.3333333;
}
.pagination-lg > li:first-child > a,
.pagination-lg > li:first-child > span {
  border-bottom-left-radius: 6px;
  border-top-left-radius: 6px;
}
.pagination-lg > li:last-child > a,
.pagination-lg > li:last-child > span {
  border-bottom-right-radius: 6px;
  border-top-right-radius: 6px;
}
.pagination-sm > li > a,
.pagination-sm > li > span {
  padding: 5px 10px;
  font-size: 14px;
  line-height: 1.5;
}
.pagination-sm > li:first-child > a,
.pagination-sm > li:first-child > span {
  border-bottom-left-radius: 3px;
  border-top-left-radius: 3px;
}
.pagination-sm > li:last-child > a,
.pagination-sm > li:last-child > span {
  border-bottom-right-radius: 3px;
  border-top-right-radius: 3px;
}
`;
export const ListTitle = styled.h2`
  margin-top:20px;
  font-size : 40px;
  color: #2c689c;
  display: flex;
  justify-content: center;
  
`;

export const CityItem = styled.li`
  font-size : 18px;
`;

export const Search = styled.input`
  width: 80%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  ::placeholder {
      font-size : 18px
    } 
`;
export const MapWrapper = styled.div`

  height: 490px;
  flex:0.8;
  background-color: white;
  padding: 5%;
  .leaflet-container {
  height : 100%
}
`;
export const Wrapper = styled.div`
  display: flex;
  margin : 3%;
  //width: 1000px;
`
