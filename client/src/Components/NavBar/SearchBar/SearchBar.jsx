import React, {useState} from "react";
import "./SearchBar.css";
import SearchList from "./SearchList"
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {FaSearch} from "react-icons/fa"
import {FaMicrophone} from "react-icons/fa"


const SearchBar = () => {

  const [searchQuery, setSearchQuery] = useState("");
  const [searchListA, setSearchList] = useState(false);
  const TitleArray = useSelector(s=>s?.videoReducer)?.data?.filter(q=> q?.videoTitle.toUpperCase().includes(searchQuery?.toUpperCase())).map(m=>m?.videoTitle)
  // const TitleArray=["video1", "video2", "video3"," animation", "movie"].filter(q=>q.toUpperCase().includes(searchQuery.toUpperCase()));

return (
    <>
       <div className="SearchBar_Container">
        <div className="SearchBar_Container2">
          <div className="search_div">
            <input type="text" className="iBox_SearchBar" placeholder="Search" 
              onChange={e=>setSearchQuery(e.target.value)}
              value={searchQuery}
              onClick={e=>setSearchList(true)}
            />
            <Link to={`/seacrh/${searchQuery}`}>
              <FaSearch className="searchIcon_SearchBar" 
              onClick={e=>setSearchList(false)}
            />
            </Link>
            <FaMicrophone className="Mic_SearchBar" />
            {searchQuery&& searchListA &&
              <SearchList
              setSearchQuery={setSearchQuery}
              TitleArray={TitleArray}
              />
            }
          </div>
        </div>
      </div>
    </>
  );
}


export default SearchBar;
