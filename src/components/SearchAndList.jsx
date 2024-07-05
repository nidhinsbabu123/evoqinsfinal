import React, { useContext, useState } from 'react'
import './searchAndList.css'
import { IoSearchSharp } from "react-icons/io5"
import { searchTheList} from '../services/AllApi';
import { searchContext, searchTextContext, sortContext } from './ContextShare';


function SearchAndList() {
    const [selectedOption, setSelectedOption] = useState('All');
    const [selectedRate, setSelectedRate] = useState('5')
    const [selectedType, setSelectedType] = useState('null')
    const [inputDetails, setInputDetails] = useState({ rating_by: 5, application_type: null })

    const {sortValue, setSortValue} = useContext(sortContext)
    const { searchValue, setSearchValue } = useContext(searchContext);
    const { searchTextBox, setSearchTextBox } = useContext(searchTextContext)

    const [search, setSearch] = useState("")

    const [errors, setErrors] = useState(null)

    setSearchTextBox(search)

   
    const handleDetails = (e) => {

        const {name , value} = e.target

        setInputDetails(prevDetails => ({
            ...prevDetails, [name] : parseInt(value) 
        }))

    }

    setSortValue(inputDetails)


    // For Developed By
    const handleRadioChange = (e) => {
        setSelectedOption(e.target.value);
    };

    const getFontWeight = (option) => {
        return selectedOption === option ? 500 : 400;
    };

    // For Rating
    const handleRadioChangeRate = (e) => {
        const value = e.target.value
        setSelectedRate(value);
        handleDetails(e);
        
    };

    const getRateFontWeight = (option) => {
        return selectedRate === option ? 500 : 400;
    };

    // For Application Type
    const handleRadioChangeType = (e) => {
        const value = e.target.value
        setSelectedType(value);
        handleDetails(e);
        
    };

    const getTypeFontWeight = (option) => {
        return selectedType === option ? 500 : 400;
    };

    const searchListCall = async (search) => {

        try {

            const header = {
                "content-type": "application/json",
                'Access-Token': 'eyJhbGciOiJIUzUxMiIsImlhdCI6MTYwODEwMDI4MCwiZXhwIjoxNjE1ODc2MjgwfQ.eyJ0eXBlIjozLCJpZCI6MTQ5MzMsImNyZWF0ZWQiOiIyMDIwLTEyLTE2IDA2OjMxOjIwLjczMTk2NiJ9.Ef001xBUX_ZPsgvGWCou9sUa6Q2BV9jvPWZZsnwE8qB3_IDTGaSNV0d0lmcuWab2FwEUQ3GouA9LVdd7ExmkvQ'
            };

            const fullDetails = {
                "page_num": 1,
                "text": search
            }

            const data = await searchTheList(fullDetails, header);


            // if (data.status === 200) {

            // }

            if (data.error) {
                throw new Error(data.message)
            }
            // console.log("The Search data is :", data);

            setSearchValue(data.data.data.products)

            

        } catch (error) {
            console.error("Error in the Searching the list :", error)
            setErrors(error.message)
        }

    }

    const handleSearch = async (e) => {
        setSearch(e.target.value);
        await searchListCall(search)
    }

    // console.log("Search data input Text is :", search);


    return (
        <>
            <div className='main' >
                <div className="input-group rounded-1 w-75">
                    <div className="input-group-text"><IoSearchSharp /></div>
                    <input onChange={(e) => handleSearch(e)} type="text" className="form-control" id="specificSizeInputGroupUsername" placeholder="Search for products" />
                </div>


                <div className='listhead mt-5'>
                    <span>Developed by</span>

                    <div className='listItems'>

                        <div className="d-flex items-center justify-center gap-1 mt-3">

                            <input
                                className=""
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault1"
                                value="All"
                                checked={selectedOption === 'All'}
                                onChange={handleRadioChange}
                            />


                            <label
                                className="above"
                                htmlFor="flexRadioDefault1"
                                style={{ fontWeight: getFontWeight('All') }}
                            >
                                All
                            </label>
                        </div>


                        <div className="d-flex items-center justify-center gap-1 my-3">

                            <input
                                className=""
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault2"
                                value="Evoque Innovative Lab"
                                checked={selectedOption === 'Evoque Innovative Lab'}
                                onChange={handleRadioChange}
                            />


                            <label
                                className=""
                                htmlFor="flexRadioDefault2"
                                style={{ fontWeight: getFontWeight('Evoque Innovative Lab') }}
                            >
                                Evoque Innovative Lab
                            </label>
                        </div>


                        <div className="d-flex items-center justify-center gap-1">

                            <input
                                className=""
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault3"
                                value="Lorem Ipsum 1"
                                checked={selectedOption === 'Lorem Ipsum 1'}
                                onChange={handleRadioChange}
                            />

                            <label
                                className=""
                                htmlFor="flexRadioDefault3"
                                style={{ fontWeight: getFontWeight('Lorem Ipsum 1') }}
                            >
                                Lorem Ipsum 1
                            </label>
                        </div>


                        <div className="d-flex items-center justify-center gap-1 my-3">

                            <input
                                className=""
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault4"
                                value="Lorem Ipsum 2"
                                checked={selectedOption === 'Lorem Ipsum 2'}
                                onChange={handleRadioChange}
                            />

                            <label
                                className=""
                                htmlFor="flexRadioDefault4"
                                style={{ fontWeight: getFontWeight('Lorem Ipsum 2') }}
                            >
                                Lorem Ipsum 2
                            </label>
                        </div>


                        <div className="d-flex items-center justify-center gap-1">

                            <input
                                className=""
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault5"
                                value="Lorem Ipsum 3"
                                checked={selectedOption === 'Lorem Ipsum 3'}
                                onChange={handleRadioChange}
                            />

                            <label
                                className=""
                                htmlFor="flexRadioDefault5"
                                style={{ fontWeight: getFontWeight('Lorem Ipsum 3') }}
                            >
                                Lorem Ipsum 3
                            </label>
                        </div>
                    </div>
                </div>

                {/* -----------------------Rating By Section-------------------------- */}

                <div className='listhead mt-4'>
                    <span>Rating by</span>

                    <div className='listItems'>


                        <div className="d-flex items-center justify-center gap-1 mt-3">

                            <input
                                className=""
                                type="radio"
                                name="rating_by"
                                id="firstnameone"
                                value='5'
                                checked={selectedRate === '5'}
                                onChange={handleRadioChangeRate}
                            />

                            <label
                                className="above"
                                htmlFor="firstnameone"
                                style={{ fontWeight: getRateFontWeight('5') }}
                            >
                                All
                            </label>
                        </div>


                        <div className="d-flex items-center justify-center gap-1 my-3">
                            <input
                                className=""
                                type="radio"
                                name="rating_by"
                                id="flexRadioDefault2two"
                                value="4"
                                checked={selectedRate === '4'}
                                onChange={handleRadioChangeRate}
                            />


                            <label
                                className="above"
                                htmlFor="flexRadioDefault2two"
                                style={{ fontWeight: getRateFontWeight('4') }}
                            >

                                <img src="./images/fourstar.svg" alt="" /> & above

                            </label>
                        </div>


                        <div className="d-flex items-center justify-center gap-1">

                            <input
                                className=""
                                type="radio"
                                name="rating_by"
                                id="flexRadioDefault3two"
                                value="3"
                                checked={selectedRate === '3'}
                                onChange={handleRadioChangeRate}
                            />

                            <label
                                className="above"
                                htmlFor="flexRadioDefault3two"
                                style={{ fontWeight: getRateFontWeight('3') }}
                            >
                                <img src="./images/threestar.svg" alt="" /> & above
                            </label>
                        </div>


                        <div className="d-flex items-center justify-center gap-1 my-3">

                            <input
                                className=""
                                type="radio"
                                name="rating_by"
                                id="flexRadioDefault4two"
                                value="2"
                                checked={selectedRate === '2'}
                                onChange={handleRadioChangeRate}
                            />

                            <label
                                className="above"
                                htmlFor="flexRadioDefault4two"
                                style={{ fontWeight: getRateFontWeight('2') }}
                            >
                                <img src="./images/twoStar.svg" alt="" /> & above
                            </label>
                        </div>


                        <div className="d-flex items-center justify-center gap-1">

                            <input
                                className=""
                                type="radio"
                                name="rating_by"
                                id="flexRadioDefault5two"
                                value="1"
                                checked={selectedRate === '1'}
                                onChange={handleRadioChangeRate}
                            />

                            <label
                                className="above"
                                htmlFor="flexRadioDefault5two"
                                style={{ fontWeight: getRateFontWeight('1') }}
                            >
                                <img src="./images/oneStar.svg" alt="" /> & above
                            </label>
                        </div>
                    </div>

                </div>

                {/* ------------------------Application Type-------------------------- */}

                <div className='listhead mt-4'>
                    <span>Application Type</span>

                    <div className='listItems'>


                        <div className="d-flex items-center justify-center gap-1 mt-3">

                            <input
                                className=""
                                type="radio"
                                name="application_type"
                                id="everyone"
                                value="null"
                                checked={selectedType === 'null'}
                                onChange={(e) => { handleRadioChangeType(e) }}
                            />


                            <label
                                className="above"
                                htmlFor="everyone"
                                style={{ fontWeight: getTypeFontWeight('null') }}
                            >
                                All
                            </label>
                        </div>


                        <div className="d-flex items-center justify-center gap-1 my-3">

                            <input
                                className=""
                                type="radio"
                                name="application_type"
                                id="webBased"
                                value="1"
                                checked={selectedType === '1'}
                                onChange={(e) => { handleRadioChangeType(e) }}

                            />


                            <label
                                className="above"
                                htmlFor="webBased"
                                style={{ fontWeight: getTypeFontWeight('1') }}
                            >

                                Web based applications

                            </label>
                        </div>

                        <div className="d-flex items-center justify-center gap-1">

                            <input
                                className=""
                                type="radio"
                                name="application_type"
                                id="mobile"
                                value="2"
                                checked={selectedType === '2'}
                                onChange={(e) => { handleRadioChangeType(e) }}
                            />

                            <label
                                className="above"
                                htmlFor="mobile"
                                style={{ fontWeight: getTypeFontWeight('2') }}
                            >
                                Mobile applications
                            </label>
                        </div>

                    </div>

                </div>

            </div>
        </>
    )
}

export default SearchAndList

